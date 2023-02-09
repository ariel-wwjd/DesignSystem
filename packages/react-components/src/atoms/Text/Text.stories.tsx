import { ComponentStory, ComponentMeta } from '@storybook/react';
import Text from './Text';
import '@design-system/scss/lib/Text.css';

const componentName = {
  title: 'Atoms/Text',
  component: Text,
  args: {}
};

export default componentName as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>
    your text here
  </Text>
);

export const Basic = Template.bind({});
Basic.args = {};

export const OverrideProps = Template.bind({});
OverrideProps.args = {
  overrideProps: { style: { backgroundColor: '#87e7e7', padding: '8px' }}
};

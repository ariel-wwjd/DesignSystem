import { ComponentStory, ComponentMeta } from '@storybook/react';
import Margin from './Margin';
import '@design-system/scss/lib/Margin.css';

const componentName = {
  title: 'Margin',
  component: Margin,
  args: {}
};

export default componentName as ComponentMeta<typeof Margin>;

const Template: ComponentStory<typeof Margin> = (args) => (
  <Margin {...args}>
    <div>Margin</div>
  </Margin>
);

export const Basic = Template.bind({});
Basic.args = {};

export const OverrideProps = Template.bind({});
OverrideProps.args = {
  size: 'xl',
  overrideProps: { style: { backgroundColor: '#70a062' }}
};

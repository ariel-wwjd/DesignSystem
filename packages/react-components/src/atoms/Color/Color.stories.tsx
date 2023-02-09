import { ComponentStory, ComponentMeta } from '@storybook/react';
import Color from './Color';
import '@design-system/scss/lib/Utilities.css';

const componentName = {
  title: 'Atoms/Color',
  component: Color,
  args: {}
};

export default componentName as ComponentMeta<typeof Color>;

const Template: ComponentStory<typeof Color> = (args) => (<Color {...args} />);

export const Common = Template.bind({});
Common.args = {};

export const OverrideProps = Template.bind({});
OverrideProps.args = {
  overrideProps: { style: { width: '200px' }}
};

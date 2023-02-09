import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from './Select';
import '@design-system/scss/lib/Select.css'; 

const options = [
  {
    label: 'Strict Black',
    value: 'black',
  },
  {
    label: 'Heavenly Green',
    value: 'green',
  },
  {
    label: 'Sweet Pink',
    value: 'pink',
  },
];

const componentName = {
  title: 'Molecules/Select',
  component: Select,
  argTypes: {},
  args: {
    options: options,
  }
};

export default componentName as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (<Select {...args} />);

export const Common = Template.bind({});
Common.args = {
}

export const RenderOptions = Template.bind({});
RenderOptions.args = {
  renderOption: ({ getOptionRecommendedProps, option, isSelected }) => (
    <li {...getOptionRecommendedProps}>
      {option.label} {isSelected ? ' Selected' : ''}
    </li>
  ),
}

export const CustomLabel = Template.bind({});
CustomLabel.args = {
  label: 'Choose an Option'
} 

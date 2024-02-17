import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import Textarea, { TextareaProps } from './textarea';

// Meta information for Storybook
const meta: Meta = {
  title: 'ui/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

// Template for the default state
const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

// Default state
export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text here...',
};

// With custom styles
export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  placeholder: 'Enter text here...',
  className: 'text-red-500', // Example of adding custom class
};

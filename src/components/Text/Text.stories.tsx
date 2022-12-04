import { StoryObj, Meta } from "@storybook/react";

import { Text, TextProps } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "This is or text component",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = { args: { size: "sm" } };

export const Large: StoryObj<TextProps> = { args: { size: "lg" } };

export const CustomComponent: StoryObj<TextProps> = {
  args: { asChild: true, children: <p>Text with p tag</p> },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

// import React from "react";
// import { ComponentStory, ComponentMeta } from "@storybook/react";

// import { Text } from "./Text";

// export default {
//   title: "Components/Text",
//   component: Text,
//   args: {
//     children: "This is or text component",
//   },
// } as ComponentMeta<typeof Text>;

// const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {};

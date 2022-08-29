import * as React from "react";
import { HomePage } from "../component";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// // // //

export default {
    title: "Pages/HomePage",
    component: HomePage,
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = () => <HomePage />;

// // // // 

export const Render = Template.bind({})

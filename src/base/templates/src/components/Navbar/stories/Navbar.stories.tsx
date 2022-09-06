import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Navbar } from "../component";

// // // //

export default {
    title: "App/Components/Navbar",
    component: Navbar,
    parameters: {
        layout: "fullscreen",
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

// // // //

export const Render = Template.bind({});

import "../src/styles/tailwind.css";
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

// // // // 

// Define Storybook viewports for TailwindCSS breakpoints
const TAILWIND_VIEWPORTS = {
    "sm": {
        name: "Tailwind - SM",
        type: "Desktop",
        styles: {
            height: "1280px",
            width: "640px",
        }
    },
    "md": {
        name: "Tailwind - MD",
        type: "Desktop",
        styles: {
            height: "1280px",
            width: "780px",
        }
    },
    "lg": {
        name: "Tailwind - LG",
        type: "Desktop",
        styles: {
            height: "1280px",
            width: "1024px",
        }
    },
    "xl": {
        name: "Tailwind - XL",
        type: "Desktop",
        styles: {
            height: "1280px",
            width: "1280px",
        }
    },
    "2xl": {
        name: "Tailwind - 2XL",
        type: "Desktop",
        styles: {
            height: "1280px",
            width: "1536",
        }
    }
}


export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    viewport: {
        viewports: {
            ...MINIMAL_VIEWPORTS,
            ...TAILWIND_VIEWPORTS
        }
    }
};

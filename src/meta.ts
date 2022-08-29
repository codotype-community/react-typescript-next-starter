import {
  PropertyTypes,
  Primitives,
  PropertyLayoutVariants,
  ExperienceRecommendations,
} from "@codotype/core";
import { documentation } from "./documentation";

// // // //
// Tooling
export const toolingProperty = new Primitives.ConfigurationProperty({
  identifier: "tooling",
  content: {
    label: "Tooling",
    description: "What tooling would you like to use?",
    icon: "",
    documentation: "",
  },
  type: PropertyTypes.INSTANCE,
  layoutVariant: PropertyLayoutVariants.COL_12,
  defaultValue: {},
  selectOptions: [],
  properties: [
    new Primitives.ConfigurationProperty({
      identifier: "jest",
      content: {
        label: "Jest",
        description:
          "Include Jest environment and snapshot tests for all your components",
        icon:
          "https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png",
        documentation: "https://jestjs.io/",
      },
      type: PropertyTypes.BOOLEAN,
      layoutVariant: PropertyLayoutVariants.CARD_COL_6,
      defaultValue: true,
    }),
    new Primitives.ConfigurationProperty({
      identifier: "prettier",
      content: {
        label: "Prettier",
        description:
          "Include Prettier .rc files and npm script for code formattting",
        icon:
          "https://seeklogo.com/images/P/prettier-logo-D5C5197E37-seeklogo.com.png",
        documentation: "https://prettier.io/",
      },
      type: PropertyTypes.BOOLEAN,
      layoutVariant: PropertyLayoutVariants.CARD_COL_6,
      defaultValue: true,
    }),
    new Primitives.ConfigurationProperty({
      identifier: "eslint",
      content: {
        label: "Eslint",
        description: "Include ESLint .rc files and npm script for code linting",
        icon:
          "https://cdn.freebiesupply.com/logos/large/2x/eslint-logo-png-transparent.png",
        documentation: "https://eslint.org/",
      },
      type: PropertyTypes.BOOLEAN,
      layoutVariant: PropertyLayoutVariants.CARD_COL_6,
      defaultValue: true,
    }),
    new Primitives.ConfigurationProperty({
      identifier: "storybook",
      content: {
        label: "Storybook",
        description:
          "Include Storybook environment and stories for all your components",
        icon:
          "https://pbs.twimg.com/profile_images/1100804485616566273/sOct-Txm.png",
        documentation: "https://storybook.js.org/",
      },
      type: PropertyTypes.BOOLEAN,
      layoutVariant: PropertyLayoutVariants.CARD_COL_6,
      defaultValue: true,
    }),
  ],
});

// // // //
// Analytics
export const analyticsProperty = new Primitives.ConfigurationProperty({
  identifier: "analytics",
  content: {
    label: "Analytics",
    description: "Which SEO features would you like?",
    icon: "",
    documentation: "",
  },
  type: PropertyTypes.INSTANCE,
  layoutVariant: PropertyLayoutVariants.COL_12,
  defaultValue: {},
  selectOptions: [],
  properties: [
    new Primitives.ConfigurationProperty({
      identifier: "googleAnalytics",
      content: {
        label: "Google Analytics",
        description: "Include Google Analytics in your website",
        icon:
          "https://cdn.iconscout.com/icon/free/png-512/google-analytics-2038788-1721678.png",
        documentation: "",
      },
      defaultValue: true,
      type: PropertyTypes.BOOLEAN,
      layoutVariant: PropertyLayoutVariants.CARD_COL_6,
    }),
    // new Primitives.ConfigurationProperty({
    //   identifier: "hotjar",
    //   content: {
    //     label: "Hotjar",
    //     description:
    //       "Include Hotjar heatmaps & behavior analytics tools in your website",
    //     icon: "https://cdn2.hubspot.net/hubfs/2069462/Hotjar_Flame-1-1.png",
    //     documentation: "",
    //   },
    //   defaultValue: true,
    //   type: PropertyTypes.BOOLEAN,
    //   layoutVariant: PropertyLayoutVariants.CARD_COL_6,
    // }),
    // new Primitives.ConfigurationProperty({
    //   identifier: "datadog",
    //   content: {
    //     label: "Datadog",
    //     description:
    //       "Include Datadog Real User Monitoring (RUM) and performance monitoring.",
    //     icon:
    //       "https://www.drupal.org/files/styles/grid-4-2x/public/datadog-logo-purple.png?itok=1gen8ZoL",
    //     documentation:
    //       "https://www.google.com/aclk?sa=l&ai=DChcSEwjBpNKTi9H3AhVCjlsKHfOHAPkYABABGgJ5bQ&ae=2&sig=AOD64_2svRJt4YxI5v5_4EBDSkSmxfhJtg&q&adurl&ved=2ahUKEwiK6sqTi9H3AhWxhIkEHZkgD9gQ0Qx6BAgDEAE",
    //   },
    //   defaultValue: true,
    //   type: PropertyTypes.BOOLEAN,
    //   layoutVariant: PropertyLayoutVariants.CARD_COL_6,
    // }),
  ],
});

// // // //
// Editor
export const textEditorProperty = new Primitives.ConfigurationProperty({
  identifier: "editor",
  content: {
    label: "Editor",
    description: "Which SEO features would you like?",
    icon: "",
    documentation: "",
  },
  type: PropertyTypes.INSTANCE,
  layoutVariant: PropertyLayoutVariants.COL_12,
  defaultValue: {},
  selectOptions: [],
  properties: [
    new Primitives.ConfigurationProperty({
      identifier: "vscode",
      content: {
        label: "VSCode Directory",
        description:
          "Include .vscode directory in your codebase - includes workspace settings and recommended extensions",
        icon: "https://cdn.svgporn.com/logos/visual-studio-code.svg",
        documentation: "",
      },
      defaultValue: true,
      type: PropertyTypes.BOOLEAN,
      layoutVariant: PropertyLayoutVariants.CARD_COL_6,
    }),
  ],
});

// // // //
// GitHub
export const githubProperty = new Primitives.ConfigurationProperty({
  identifier: "github",
  content: {
    label: "GitHub",
    description:
      "Which GitHub features would you like included in your codebase?",
    icon: "",
    documentation: "",
  },
  type: PropertyTypes.INSTANCE,
  layoutVariant: PropertyLayoutVariants.COL_12,
  defaultValue: {},
  selectOptions: [],
  properties: [
    new Primitives.ConfigurationProperty({
      identifier: "dependabot",
      content: {
        label: "Dependabot",
        description: "Include .github/dependabot.yml file in your codebase",
        icon:
          "https://imgs.search.brave.com/xs3w9aSXEMKbuWLujuthHPK9_0OEm7oNdHF2AyQMkvg/rs:fit:200:200:1/g:ce/aHR0cHM6Ly9hdmF0/YXJzMy5naXRodWJ1/c2VyY29udGVudC5j/b20vdS8yNzM0NzQ3/Nj9zPTIwMCZ2PTQ",
        documentation: "",
      },
      defaultValue: true,
      type: PropertyTypes.BOOLEAN,
      layoutVariant: PropertyLayoutVariants.CARD_COL_6,
    }),
    new Primitives.ConfigurationProperty({
      identifier: "pullRequestTemplate",
      content: {
        label: "Pull Request Template",
        description:
          "Include .github/pull_request_template.md file in your codebase",
        icon: "https://cdn.svgporn.com/logos/markdown.svg",
        documentation: "",
      },
      defaultValue: true,
      type: PropertyTypes.BOOLEAN,
      layoutVariant: PropertyLayoutVariants.CARD_COL_6,
    }),
  ],
});

// // // //
// SEO
export const seoProperty = new Primitives.ConfigurationProperty({
  identifier: "seo",
  content: {
    label: "SEO",
    description: "Which SEO features would you like?",
    icon: "",
    documentation: "",
  },
  type: PropertyTypes.INSTANCE,
  layoutVariant: PropertyLayoutVariants.COL_12,
  defaultValue: {},
  selectOptions: [],
  properties: [
    new Primitives.ConfigurationProperty({
      identifier: "twitter",
      content: {
        label: "Twitter",
        description:
          "Include meta tags linking your website to a Twitter handle",
        icon:
          "https://res.cloudinary.com/codotype/image/upload/v1558931014/product-logos/twitter-512.png",
        documentation: "",
      },
      type: PropertyTypes.BOOLEAN,
      layoutVariant: PropertyLayoutVariants.CARD_COL_6,
    }),
    new Primitives.ConfigurationProperty({
      identifier: "opengraph",
      content: {
        label: "OpenGraph",
        description:
          "Include OpenGraph meta tags for pretty previews when sharing your site on social media",
        icon: "https://ogp.me/logo.png",
        documentation: "",
      },
      type: PropertyTypes.BOOLEAN,
      layoutVariant: PropertyLayoutVariants.CARD_COL_6,
    }),
    new Primitives.ConfigurationProperty({
      identifier: "sitemap",
      content: {
        label: "Sitemap",
        description: "Include dynamic sitemap with your exported code",
        // icon: "https://blog.atj.me/assets/sitemap.png",
        icon:
          "https://i.pinimg.com/originals/8e/d4/21/8ed42172785c5f144d5df49998c00cd7.png",
        documentation: "",
      },
      type: PropertyTypes.BOOLEAN,
      layoutVariant: PropertyLayoutVariants.CARD_COL_6,
    }),
    new Primitives.ConfigurationProperty({
      identifier: "jsonLD",
      content: {
        label: "JSON-LD Metadata",
        description: "Include JSON-LD metadata for each of your pages",
        icon:
          // "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/JSON_vector_logo.svg/1200px-JSON_vector_logo.svg.png",
          // "https://www.innocreate.com/wp-content/uploads/2017/07/jsonlogo-300x300.png",
          "https://dinacon.ch/wp-content/uploads/sites/4/2018/05/rdf-icon-with-shadow.png",
        documentation: "",
      },
      type: PropertyTypes.BOOLEAN,
      layoutVariant: PropertyLayoutVariants.CARD_COL_6,
    }),
  ],
});

// // // //
// Hosting

export const hostingProperty = new Primitives.ConfigurationProperty({
  identifier: "hosting",
  content: {
    label: "Hosting",
    description: "What hosting would you like to use?",
    icon: "",
    documentation: "",
  },
  type: PropertyTypes.INSTANCE,
  layoutVariant: PropertyLayoutVariants.COL_12,
  defaultValue: {},
  selectOptions: [],
  properties: [
    new Primitives.ConfigurationProperty({
      identifier: "platform",
      content: {
        label: "Hosting Platform",
        description: "Where would you like to host your website?",
        // icon:
        //   // "https://cdn1.iconfinder.com/data/icons/hawcons/32/699966-icon-1-cloud-512.png",
        //   "https://cdn4.iconfinder.com/data/icons/colicon/24/cloud-512.png",
        // documentation: "",
      },
      type: PropertyTypes.RADIO_GROUP,
      defaultValue: "vercel",
      selectOptions: [
        {
          label: "Vercel",
          value: "vercel",
          description: "Deploy the Next.js app to Vercel.",
          icon: "https://assets.pipedream.net/s.v0/app_1xohRm/logo/orig",
        },
        {
          label: "Docker",
          value: "docker",
          description: "Deploy the Next.js app in a Docker container.",
          icon:
            "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
        },
        {
          label: "Netlify",
          value: "netlify",
          description:
            "Deploy the Next.js app to Netlify - only compatible with `next export` command.",
          icon: "https://www.netlify.com/v3/img/components/logomark.png",
        },
        // {
        //   label: "GitHub Pages",
        //   value: "github_pages",
        //   description: "This is the github_pages description",
        //   documentation: "",
        //   icon:
        //     "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        // },
      ],
    }),
  ],
});

// // // //

export const iconsProperty = new Primitives.ConfigurationProperty({
  identifier: "icons",
  content: {
    label: "Icons",
    description: "Which icon packs would you like to include?",
    icon: "",
    documentation: "",
  },
  type: PropertyTypes.INSTANCE,
  layoutVariant: PropertyLayoutVariants.COL_12,
  defaultValue: {},
  selectOptions: [],
  properties: [
    new Primitives.ConfigurationProperty({
      identifier: "fontawesome",
      content: {
        label: "Font Awesome",
        description:
          "Include dependencies and examples for using Font Awesome with your website",
        icon:
          "https://res.cloudinary.com/codotype/image/upload/c_thumb,w_200,g_face/v1620674185/tech-logos/font-awesome.svg",
        documentation: "https://fontawesome.com",
      },
      defaultValue: true,
      type: PropertyTypes.BOOLEAN,
      layoutVariant: PropertyLayoutVariants.CARD_COL_6,
    }),
    new Primitives.ConfigurationProperty({
      identifier: "heroicons",
      content: {
        label: "Heroicons",
        description:
          "Include dependencies and examples for using Heroicons with your website",
        icon:
          "https://res.cloudinary.com/codotype/image/upload/c_thumb,w_200,g_face/v1620674945/tech-logos/heroicons-logo.png",
        documentation: "https://heroicons.com",
      },
      defaultValue: true,
      type: PropertyTypes.BOOLEAN,
      layoutVariant: PropertyLayoutVariants.CARD_COL_6,
    }),
  ],
});

// // // //

// Other properties:
// - Marketing - Mailchip
// - Analytics - Datadog
// - Customer Engagement - Intercom
// - Customer Engagement - FOSS Intercom alternative?
// - Customer Engagement - Segment (Customer Data Platform)
// - Customer Engagement - Google Tag Manager?
export const NextJsStarter = new Primitives.Plugin({
  identifier: "react-next-ts-website-starter-variant",
  project_path: "react-next-ts-starter",
  content: {
    label: "React + Next + TypeScript Starter",
    description:
      "Website starter kit built with React.js, Next.js, TypeScript, TailwindCSS, and Storybook",
    icon: "https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png", // TODO - get self-hosted icon here
    documentation: documentation,
  },
  version: "0.1.0",
  techTags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Storybook"],
  typeTags: ["Web Application"],
  configurationGroups: [
    new Primitives.ConfigurationGroup({
      identifier: "configure",
      content: {
        label: "Configure",

        description: "Configure your boilerplate code",
      },
      properties: [
        toolingProperty,
        // seoProperty,
        iconsProperty,
        analyticsProperty,
        textEditorProperty,
        githubProperty,
        hostingProperty,
      ],
    }),
  ],
});

export default NextJsStarter;

import { GeneratorProps, PrettifyParsers } from "@codotype/core";
import { getConfig } from "../getConfig";

const PACKAGE_JSON_BASE = {
  name: "react-typescript-next-starter",
  version: "0.1.0",
  // repository:
  //   "git@github.com:codotype-community/react-typescript-next-starter.git",
  // author: "Alexander Schwartzberg <aeksco@gmail.com>",
  license: "MIT",
  scripts: {
    dev: "next dev",
    build: "next build",
    start: "next start",
  },
  dependencies: {
    next: "^12.2.5",
    "next-seo": "^4.19.0",
    react: "^18.0.0",
    "react-dom": "^18.0.0",
  },
  devDependencies: {
    "@babel/core": "^7.16.16", // QUESTION - is this only needed for Jest?
    "@types/node": "^18.7.13",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    autoprefixer: "^10.4.1",
    "babel-loader": "^8.2.3", // QUESTION - is this only needed for Jest?
    postcss: "^8.4.5",
    "postcss-loader": "^7.0.1",
    tailwindcss: "^3.1.8",
    typescript: "^4.8.2",
  },
  resolutions: {
    webpack: "^5",
  },
};

const Generator: GeneratorProps = {
  name: "Nextjs Starter Kit - package.json",
  async write({ runtime, project }) {
    // Defines base package.json
    const packageJson = {
      ...PACKAGE_JSON_BASE,
      // Set "name" property in package.json
      name: project.identifiers.kebab,
    };

    // Gets consolidated configuration data
    const config = getConfig({ project });

    // Handle config.includeEslint
    if (config.includeEslint === false) {
      packageJson.scripts["lint"] = "eslint --ext js,jsx,ts,tsx --fix";
      packageJson.devDependencies["@typescript-eslint/eslint-plugin"] =
        "^4.15.1";
      packageJson.devDependencies["@typescript-eslint/parser"] = "^4.15.1";
      packageJson.devDependencies["eslint"] = "^7.20.0";
      packageJson.devDependencies["eslint-plugin-jsx-a11y"] = "^6.4.1";
      packageJson.devDependencies["eslint-plugin-react"] = "^7.22.0";
      packageJson.devDependencies["eslint-plugin-react-hooks"] = "^4.2.0";
    }

    // Handle config.includeJest
    if (config.includeJest) {
      packageJson.scripts["test"] = "jest";
      packageJson.devDependencies["@types/jest"] = "^26.0.20";
      packageJson.devDependencies["jest"] = "^26.6.3";
      packageJson.devDependencies["ts-jest"] = "^26.5.1";
      packageJson.devDependencies["react-test-renderer"] = "^18.0.0";
      packageJson.devDependencies["@types/react-test-renderer"] = "^18.0.0";
    }

    // Handle config.includePrettier
    if (config.includePrettier) {
      packageJson.scripts["prettify"] =
        "prettier --config ./.prettierrc.js '**/*.ts*' '**/*.js*' --write";
      packageJson.devDependencies["prettier"] = "^2.2.1";
    }

    // Handle config.includeStorybook
    if (config.includeStorybook) {
      packageJson.scripts["storybook"] = "start-storybook -p 6006";
      packageJson.scripts["build-storybook"] = "build-storybook";
      packageJson.devDependencies["@storybook/addon-actions"] = "^6.4.9";
      packageJson.devDependencies["@storybook/addon-essentials"] = "^6.4.9";
      packageJson.devDependencies["@storybook/addon-interactions"] = "^6.4.9";
      packageJson.devDependencies["@storybook/addon-links"] = "^6.4.9";
      packageJson.devDependencies["@storybook/addon-postcss"] = "^2.0.0";
      packageJson.devDependencies["@storybook/builder-webpack5"] = "^6.4.9";
      packageJson.devDependencies["@storybook/manager-webpack5"] = "^6.4.9";
      packageJson.devDependencies["@storybook/testing-library"] = "^0.0.9"; // TODO - test this...
      packageJson.devDependencies["@storybook/react"] = "^6.4.9";
    }

    // Handle config.includeFontAwesome
    if (config.includeFontAwesome) {
      packageJson.dependencies["@fortawesome/fontawesome-svg-core"] = "^1.2.35";
      packageJson.dependencies["@fortawesome/free-solid-svg-icons"] = "^5.15.3";
      packageJson.dependencies["@fortawesome/react-fontawesome"] = "^0.1.14";
    }

    // Handle config.includeHeroicons
    if (config.includeHeroicons) {
      packageJson.dependencies["@heroicons/react"] = "^1.0.1";
    }

    // TODO - implement this feature
    // TODO - update Navbar component + add stories
    // TODO - update basic page layout
    // TODO - Include basic TailwindCSS theme?
    // TODO - Include custom Storybook theme?
    // TODO - Include MockServiceWorker w/ Storybook setup + example?
    // DOC: https://rafaassad.medium.com/integrate-datadog-with-nextjs-591fe126e339
    // Handle config.includeDatadog
    // if (config.includeDatadog) {
    //   packageJson.dependencies["@datadog/browser-rum"] = "^4.8.1";
    // }

    // Writes package.json
    await runtime.writeFile(
      "package.json",
      JSON.stringify(packageJson, null, 4), // TODO - sort dependencies, devDependencies
      {
        prettify: {
          parser: PrettifyParsers.json,
        },
      }
    );
  },
};

export = Generator;

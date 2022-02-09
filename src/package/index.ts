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
    next: "^12.0.0",
    "next-seo": "^4.19.0",
    react: "^17.0.1",
    "react-dom": "^17.0.1",
  },
  devDependencies: {
    "@babel/core": "^7.16.16",
    "@tailwindcss/postcss7-compat": "^2.0.3",
    "@types/node": "^14.14.28",
    "@types/react": "^17.0.2",
    "@types/react-dom": "^17.0.2",
    autoprefixer: "^10.4.1",
    "babel-loader": "^8.2.3",
    postcss: "^8.4.5",
    "postcss-loader": "^6.2.1",
    tailwindcss: "3.0.0",
    typescript: "^4.3.5",
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
      packageJson.devDependencies["react-test-renderer"] = "^17.0.1";
      packageJson.devDependencies["@types/react-test-renderer"] = "^17.0.1";
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
      packageJson.devDependencies["@storybook/addon-actions"] = "^6.4.14";
      packageJson.devDependencies["@storybook/addon-essentials"] = "^6.4.14";
      packageJson.devDependencies["@storybook/addon-links"] = "^6.4.14";
      packageJson.devDependencies["@storybook/addon-postcss"] = "^2.0.0";
      packageJson.devDependencies["@storybook/builder-webpack5"] = "^6.4.14";
      packageJson.devDependencies["@storybook/manager-webpack5"] = "^6.4.14";
      packageJson.devDependencies["@storybook/react"] = "^6.4.14";
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

    // Writes package.json
    await runtime.writeFile(
      "package.json",
      JSON.stringify(packageJson, null, 4),
      {
        prettify: {
          parser: PrettifyParsers.json,
        },
      }
    );
  },
};

export = Generator;

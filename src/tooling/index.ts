import { GeneratorProps } from "@codotype/core";
import { getConfig } from "../getConfig";

const Generator: GeneratorProps = {
  name: "Nextjs Starter Kit - Tooling files",
  async write({ runtime, project }) {
    // Gets consolidated configuration data
    const config = getConfig({ project });

    // Handle config.includeEslint
    if (config.includeEslint === false) {
      await runtime.renderTemplate({
        src: ".eslintrc.js",
        dest: ".eslintrc.js",
      });
    }

    // Handle config.includeJest
    if (config.includeJest) {
      await runtime.renderTemplate({
        src: "jest.config.js",
        dest: "jest.config.js",
      });
      await runtime.renderTemplate({
        src: "tsconfig.test.json",
        dest: "tsconfig.test.json",
      });
    }

    // Handle config.includePrettier
    if (config.includePrettier) {
      await runtime.renderTemplate({
        src: ".prettierrc.js",
        dest: ".prettierrc.js",
      });

      await runtime.renderTemplate({
        src: ".prettierignore",
        dest: ".prettierignore",
      });
    }

    // Handle config.includeStorybook
    if (config.includeStorybook) {
      // Copies all contents of templates/.storybook into destination root
      await runtime.ensureDir(".storybook");
      await runtime.renderTemplate({
        src: "storybook/main.js",
        dest: ".storybook/main.js",
      });
      await runtime.renderTemplate({
        src: "storybook/preview.js",
        dest: ".storybook/preview.js",
      });
    }

    // Handle config.includeVsCodeDirectory
    if (config.includeVsCodeDirectory) {
      // Copies all contents of templates/vscode into destination root
      await runtime.ensureDir(".vscode");
      await runtime.renderTemplate({
        src: "vscode/extensions.json",
        dest: ".vscode/extensions.json",
      });
      await runtime.renderTemplate({
        src: "vscode/settings.json",
        dest: ".vscode/settings.json",
      });
    }

    // Handle config.includeDependabot
    if (config.includeDependabot) {
      await runtime.ensureDir(".github");
      await runtime.renderTemplate({
        src: "github/dependabot.yml",
        dest: ".github/dependabot.yml",
      });
    }

    // Handle config.includePullRequestTemplate
    if (config.includePullRequestTemplate) {
      await runtime.ensureDir(".github");
      await runtime.renderTemplate({
        src: "github/pull_request_template.md",
        dest: ".github/pull_request_template.md",
      });
    }
  },
};

export = Generator;

import { GeneratorProps } from "@codotype/core";
import { getConfig } from "../getConfig";

const Generator: GeneratorProps = {
  name: "Nextjs Starter Kit - React Components - HomePage",
  async write({ runtime, project }) {
    // Gets consolidated configuration data
    const config = getConfig({ project });

    // Add Homepage directory + component + index.ts
    await runtime.ensureDir("src/components/HomePage");
    await runtime.renderTemplate({
      src: "HomePage/index.ts",
      dest: "src/components/HomePage/index.ts"
    });
    await runtime.renderTemplate({
      src: "HomePage/component.tsx",
      dest: "src/components/HomePage/component.tsx"
    });

    // Handle config.includeJest
    if (config.includeJest) {
      await runtime.ensureDir("src/components/HomePage/__tests__");
      await runtime.renderTemplate({
        src: "HomePage/__tests__/HomePage.tests.tsx",
        dest: "src/components/HomePage/__tests__/HomePage.tests.tsx"
      });
    }

    // Handle config.includeStorybook
    if (config.includeStorybook) {
      await runtime.ensureDir("src/components/HomePage/stories");
      await runtime.renderTemplate({
        src: "HomePage/stories/HomePage.stories.tsx",
        dest: "src/components/HomePage/stories/HomePage.stories.tsx"
      });
    }
  }
};

export = Generator;

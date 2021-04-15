import { GeneratorProps } from "@codotype/core";

const Generator: GeneratorProps = {
  name: "Nextjs Starter Kit - Base",
  async write({ runtime, project }) {
    // Ensures directory structure
    await runtime.ensureDir("src");
    await runtime.ensureDir("src/components");
    await runtime.ensureDir("src/components/HomePage");
    await runtime.ensureDir("src/components/HomePage/__tests__");
    await runtime.ensureDir("src/components/HomePage/stories");
    await runtime.ensureDir("src/components/Navbar");
    await runtime.ensureDir("src/styles");
    await runtime.ensureDir("styles");
    await runtime.ensureDir("pages");
    await runtime.ensureDir("public");
    await runtime.ensureDir(".storybook");

    // Copies all contents of base/templates into destination root
    await runtime.copyDir({ src: "", dest: "" });
  }
};

export = Generator;

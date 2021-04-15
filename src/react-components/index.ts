import { GeneratorProps } from "@codotype/core";

const Generator: GeneratorProps = {
  name: "Nextjs Starter Kit - React Components",
  async write({ runtime }) {
    await runtime.composeWith("./homepage");
  }
};

export = Generator;

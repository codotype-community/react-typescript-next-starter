import { GeneratorProps } from "@codotype/core";

// Defines typed generator constant
const generator: GeneratorProps = {
  name: "Nextjs Starter Kit",
  async write() {
    await this.composeWith("./base");
    await this.composeWith("./package");
    await this.composeWith("./tooling");
    await this.composeWith("./hosting");
    await this.composeWith("./react-components");
  }
};

// exports generator constructor options
export = generator;

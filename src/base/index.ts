import { GeneratorProps } from "@codotype/core";

const Generator: GeneratorProps = {
  name: "Nextjs Starter Kit - Base",
  async write({ runtime }) {
    // Copies all contents of base/templates into destination root
    await runtime.copyDir({
      src: "",
      dest: ""
    });
  }
};

export = Generator;

import { GeneratorProps } from "@codotype/core";
import { getConfig } from "../getConfig";

const Generator: GeneratorProps = {
  name: "Nextjs Starter Kit - env.local files",
  async write({ runtime, project }) {
    // Gets hosting config
    const config = getConfig({ project });
    const googleAnalytics = config.analyticsGoogle;
    // const hotjarAnalytics = config.analyticsHotjar;
    const hotjarAnalytics = false;

    // Short-circuit if .env.local isn't necessary
    if (!hotjarAnalytics && !googleAnalytics) {
      return;
    }

    // Write ENV file
    await runtime.renderTemplate({
      src: "env.local",
      dest: ".env.local.example",
    });
  },
};

export = Generator;

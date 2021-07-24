import { GeneratorProps } from "@codotype/core";
import { getConfig } from "../getConfig";

const Generator: GeneratorProps = {
  name: "Nextjs Starter Kit - Analytics Components",
  async write({ runtime, project }) {
    // Gets hosting config
    const config = getConfig({ project });

    // Handle Google Analytics
    if (config.analyticsGoogle) {
      await runtime.copyDir({
        src: "GoogleAnalyticsScript",
        dest: "src/components/GoogleAnalyticsScript",
      });
    }

    // Handle Hotjar analytics
    // if (config.analyticsHotjar) {
    //   await runtime.copyDir({
    //     src: "HotjarScript",
    //     dest: "src/components/HotjarScript",
    //   });
    // }

    // TODO - add this to .env.local
    // NEXT_GOOGLE_ANALYTICS_PUBLIC_ID=<Google-Analytics-Tracking-ID-Here>
  },
};

export = Generator;

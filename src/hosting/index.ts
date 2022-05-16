import { GeneratorProps } from "@codotype/core";
import { getConfig } from "../getConfig";

// Options:
// "none"
// "vercel"
// "netlify"
// "docker"
const Generator: GeneratorProps = {
  name: "Nextjs Starter Kit - Hosting files",
  async write({ runtime, project }) {
    // Gets hosting config
    const config = getConfig({ project });
    const hostingPlatform = config.hostingPlatform;

    // Handle "none" hosting option
    if (hostingPlatform === "none") {
      return;
    }

    // Handle "docker" hosting option
    if (hostingPlatform === "docker") {
      await runtime.renderTemplate({
        src: "Dockerfile",
        dest: "Dockerfile",
      });
      await runtime.renderTemplate({
        src: ".dockerignore",
        dest: ".dockerignore",
      });
      await runtime.renderTemplate({
        src: "docker-compose.yml",
        dest: "docker-compose.yml",
      });
    }

    // Handle "netlify" hosting option
    if (hostingPlatform === "netlify") {
      await runtime.renderTemplate({
        src: "netlify.toml",
        dest: "netlify.toml",
      });
    }
  },
};

export = Generator;

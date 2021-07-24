import { Project } from "@codotype/core";
import {
  toolingProperty,
  analyticsProperty,
  iconsProperty,
  // seoProperty,
  hostingProperty,
} from "./meta";

export interface Config {
  includeJest: boolean;
  includePrettier: boolean;
  includeEslint: boolean;
  includeStorybook: boolean;
  includeFontAwesome: boolean;
  includeHeroicons: boolean;
  analyticsGoogle: boolean;
  // analyticsHotjar: boolean;
  // seoTwitter: boolean;
  // seoOpengraph: boolean;
  // seoSitemap: boolean;
  // seoJsonLD: boolean;
  hostingPlatform: string;
}

export function getConfig(props: { project: Project }): Config {
  // Pull identifiers from project + metadata
  const config = props.project.configuration.configure;
  const tooling = toolingProperty.identifier;
  const analytics = analyticsProperty.identifier;
  const icons = iconsProperty.identifier;
  // const seo = seoProperty.identifier;
  const hosting = hostingProperty.identifier;

  // Pull tooling properties from project
  const includeJest: boolean = config[tooling]["jest"] || false;
  const includePrettier: boolean = config[tooling]["prettier"] || false;
  const includeEslint: boolean = config[tooling]["eslint"] || false;
  const includeStorybook: boolean = config[tooling]["storybook"] || false;

  // Pull Analyics properties from project
  const analyticsGoogle: boolean =
    config[analytics]["googleAnalytics"] || false;
  // const analyticsHotjar: boolean = config[analytics]["hotjar"] || false;

  // Pull SEO properties from project
  // const seoTwitter: boolean = config[seo]["twitter"] || false;
  // const seoOpengraph: boolean = config[seo]["opengraph"] || false;
  // const seoSitemap: boolean = config[seo]["sitemap"] || false;
  // const seoJsonLD: boolean = config[seo]["jsonLD"] || false;

  // Pull icon properties
  const includeFontAwesome: boolean = config[icons]["fontawesome"] || false;
  const includeHeroicons: boolean = config[icons]["heroicons"] || false;

  // Pull Hosting properties from project
  const hostingPlatform: string = config[hosting]["platform"];

  return {
    includeJest,
    includePrettier,
    includeEslint,
    includeStorybook,
    includeFontAwesome,
    includeHeroicons,
    analyticsGoogle,
    // analyticsHotjar,
    // seoTwitter,
    // seoOpengraph,
    // seoSitemap,
    // seoJsonLD,
    hostingPlatform,
  };
}

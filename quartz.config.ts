import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Bread Wiki",
    pageTitleSuffix: " | Bread Wiki",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "docs.bread.coop",
    ignorePatterns: [".obsidian", "**/readme.md", "**/README.md"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "local",
      cdnCaching: false,
      typography: {
        header: "BreadDisplay",
        body: "BreadBody",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#F6F3EB",                      // Paper main (official background)
          lightgray: "#808080",                  // Grey (neutral borders)
          gray: "#595959",                       // Grey 1 (medium borders)
          darkgray: "#1B201A",                   // Ink 0 (body text)
          dark: "#EA6023",                       // Core Orange #1 (headers/strong text)
          secondary: "#1B201A",                  // Ink 0 (links - subtle, readable)
          tertiary: "#595959",                   // Grey 1 (hover states)
          highlight: "rgba(40, 107, 99, 0.1)",  // Jade transparency (callout accents)
          textHighlight: "rgba(234, 96, 35, 0.15)", // Orange transparency (text selections)
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.WikiPathProcessor(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({
        markdownLinkResolution: "shortest",
        prettyLinks: true,
        openLinksInNewTab: true,
        lazyLoad: true
      }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config

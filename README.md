# Quartz v4

> “[One] who works with the door open gets all kinds of interruptions, but [they] also occasionally gets clues as to what the world is and what might be important.” — Richard Hamming

Quartz is a set of tools that helps you publish your [digital garden](https://jzhao.xyz/posts/networked-thought) and notes as a website for free.
Quartz v4 features a from-the-ground rewrite focusing on end-user extensibility and ease-of-use.

🔗 Read the documentation and get started: https://quartz.jzhao.xyz/

[Join the Discord Community](https://discord.gg/cRFFHYye7t)

## Bread Cooperative Modifications

This repository contains customizations for the Bread Cooperative documentation site:

### Custom Plugins

- **[WikiPathProcessor](docs/plugins/WikiPathProcessor.md)** - Removes `wiki/` prefixes from wikilinks and markdown links during content processing, enabling cleaner link structures after content migration.

### Configuration Changes

- **CrawlLinks**: Enhanced with `prettyLinks`, `openLinksInNewTab`, and `lazyLoad` options
- **Site Configuration**: Customized for `docs.bread.coop` with Bread-specific branding
- **Ignore Patterns**: Configured to exclude readme files and preserve `.obsidian` folder structure
- **[Local Fonts](docs/features/local-fonts.md)**: Implemented custom Bread fonts (BreadDisplay/BreadBody) replacing Google Fonts for brand consistency
- **Brand Colors**: Implemented official BreadCoop design system colors (Paper backgrounds, Core Orange/Jade, Ink text) for visual brand compliance
- **Dark Mode**: Temporarily disabled via commented layout components in `quartz.layout.ts` during light mode color implementation phase
  - **To revert**: Uncomment `{ Component: Component.Darkmode() },` lines in both `defaultContentPageLayout.left` and `defaultListPageLayout.left` sections
  - **Current state**: Dark mode toggle hidden from UI, site operates in light mode only
- **Layout Simplification**: Removed Graph view and Backlinks components from right sidebar in `quartz.layout.ts` for cleaner content-focused layout
  - **Removed**: `Component.Graph()` and `Component.Backlinks()` from `defaultContentPageLayout.right`
  - **Preserved**: Table of Contents as sole right sidebar component
- **Explorer Frontmatter Sorting**: Implemented custom sort order using frontmatter `folderOrder` and `noteOrder` attributes
  - **Modified**: `ContentDetails` interface to include frontmatter data access
  - **Enhanced**: Explorer components with sortFn that respects frontmatter order values
  - **Result**: Folders sort by folderOrder (about=0, solidarity-primitives=1, bread-cooperative=2)
- **Typography and Visual Hierarchy**: Enhanced site navigation and content readability
  - **Logo Integration**: Added Bread logo to site title using `bread-mono.png` from static assets
  - **Font Weight Swap**: Site title now uses heavy weight (900) with orange color, content headings use light weight (400) with dark color
  - **Visual Impact**: Creates prominent site navigation while keeping content headings subtle and readable
- **Social Media Integration**: Added custom social sharing images for key content pages
  - **Manifesto Page**: Added `socialImage: socialImages/manifesto.png` to override default og-image
  - **Voting Power Page**: Added `socialImage: socialImages/voting-power.png` for branded social sharing

## Sponsors

<p align="center">
  <a href="https://github.com/sponsors/jackyzha0">
    <img src="https://cdn.jsdelivr.net/gh/jackyzha0/jackyzha0/sponsorkit/sponsors.svg" />
  </a>
</p>

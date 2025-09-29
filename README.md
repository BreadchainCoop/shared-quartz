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
- **[Google Fonts](https://fonts.google.com)**: Uses Schibsted Grotesk (headers) and Source Sans Pro (body) for optimal cross-platform compatibility
- **Brand Colors**: Implemented official BreadCoop design system colors with recent refinements for improved readability
  - **Color Scheme**: Paper backgrounds (#F6F3EB), Core Orange (#EA6023), Ink text (#1B201A)
  - **Refinements**: Replaced overwhelming teal links with subtle dark ink for better readability
  - **Borders**: Updated from paper tones to neutral gray tones (#808080, #595959) for clearer UI definition
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
- **Callout Customization**: Integrated BreadCoop design system colors throughout callout system
  - **Jade Palette**: Applied jade color variations to primary callout types (`[!note]`, `[!abstract]`, `[!info]`, `[!todo]`, `[!tip]`)
  - **System Colors**: Used System Green (#32A800), System Orange (#CE7F00), and System Red (#DF0B00) for status-based callouts
  - **Brand Consistency**: Replaced default Quartz blue/cyan callout colors with BreadCoop palette while preserving functionality

## Static Assets Management

### Font Configuration
- **Headers**: Schibsted Grotesk loaded from Google Fonts CDN
- **Body Text**: Source Sans Pro loaded from Google Fonts CDN
- **Code**: IBM Plex Mono loaded from Google Fonts CDN
- **Implementation**: CDN delivery with preconnect optimization for performance

### Image Assets (`quartz/static/`)
- **`bread-mono.png`**: Bread Cooperative logo integrated into site title
  - **Usage**: Added to PageTitle component with flexbox alignment
  - **Integration**: Uses `joinSegments()` utility for proper path resolution
  - **Styling**: Height matches font size (1.75rem) with 0.5rem gap spacing
- **`icon.png`**: Site favicon
- **`og-image.png`**: Default social sharing image

### Social Media Assets (`quartz/static/socialImages/`)
- **`manifesto.png`**: Custom social sharing image for manifesto page
- **`voting-power.png`**: Custom social sharing image for voting power documentation
- **Configuration**: Referenced in page frontmatter using `socialImage: socialImages/filename.png`
- **Purpose**: Overrides default og-image for branded social media sharing

### Asset Implementation Notes
- **Path Construction**: All static assets use `joinSegments(baseDir, "static/path")` pattern
- **Font Loading**: Google Fonts CDN with `font-display: swap` for performance
- **Image Optimization**: Assets optimized for web delivery and social media platforms
- **Brand Consistency**: All assets follow Bread Cooperative visual identity guidelines

## Technical Implementation Details

### Component Modifications
- **PageTitle.tsx**: Enhanced with logo integration and proper TypeScript imports
- **ContentDetails Interface**: Extended to include frontmatter data access for Explorer sorting
- **Custom.scss**: Typography scale classes and responsive design improvements

### Plugin Architecture
- **WikiPathProcessor**: Custom transformer plugin using `mdast-util-find-and-replace`
- **Explorer Sorting**: Frontmatter-based sort function respecting `folderOrder` and `noteOrder` attributes
- **Social Images**: Integrated with Quartz CustomOgImages plugin system

### Development Workflow
- **Build Command**: `npx quartz build --serve` for development
- **Asset Management**: Static assets automatically copied to `public/static/` during build
- **Font Loading**: Google Fonts loaded via CDN with browser fallbacks

## Sponsors

<p align="center">
  <a href="https://github.com/sponsors/jackyzha0">
    <img src="https://cdn.jsdelivr.net/gh/jackyzha0/jackyzha0/sponsorkit/sponsors.svg" />
  </a>
</p>

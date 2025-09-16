---
title: WikiPathProcessor
tags:
  - plugin/transformer
  - custom
---

This plugin removes `wiki/` prefixes from wikilinks and markdown links before they are processed by other transformers. This is useful when migrating content from systems that use `wiki/` prefixed paths in their internal linking structure.

> [!note]
> For information on how to add, remove or configure plugins, see the [[configuration#Plugins|Configuration]] page.

> [!important]
> This plugin should be placed **before** `ObsidianFlavoredMarkdown` in the transformers array to ensure wiki/ prefixes are removed before wikilink processing occurs.

## Functionality

The plugin transforms the following link patterns:

| Input Pattern | Output Pattern | Description |
|---------------|----------------|-------------|
| `[[wiki/page]]` | `[[page]]` | Standard wikilinks |
| `[[wiki/page#section]]` | `[[page#section]]` | Wikilinks with anchors |
| `[[wiki/page\|alias]]` | `[[page\|alias]]` | Wikilinks with aliases |
| `![[wiki/image.png]]` | `![[image.png]]` | Embedded wikilinks |
| `[text](wiki/page)` | `[text](page)` | Markdown links |
| `![alt](wiki/image.jpg)` | `![alt](image.jpg)` | Markdown image links |

## Configuration

This plugin requires no configuration options - it has a single purpose of removing `wiki/` prefixes.

```typescript
transformers: [
  Plugin.FrontMatter(),
  Plugin.CreatedModifiedDate(),
  Plugin.SyntaxHighlighting(),
  Plugin.WikiPathProcessor(), // Must be before ObsidianFlavoredMarkdown
  Plugin.ObsidianFlavoredMarkdown(),
  Plugin.CrawlLinks(),
  // ...
]
```

## Technical Details

- Uses `mdast-util-find-and-replace` for context-aware text replacement
- Processes content in the `markdownPlugins` phase before OFM's wikilink conversion
- Regex patterns preserve link anchors (`#section`) and aliases (`|display text`)
- Only matches content outside of code blocks and other protected contexts

## API

- Category: Transformer
- Function name: `Plugin.WikiPathProcessor()`.
- Source: [`quartz/plugins/transformers/wikiPathProcessor.ts`](../quartz/plugins/transformers/wikiPathProcessor.ts).

## Use Cases

This plugin is particularly useful when:
- Migrating from documentation systems that prefix internal links with `wiki/`
- Converting content from systems like MediaWiki or similar platforms
- Cleaning up legacy link structures in imported content
# WikiPathProcessor - Technical Specification

## Purpose
Remove `wiki/` prefix from wikilinks and markdown links before CrawlLinks processes them.

## Implementation

### File: `quartz/plugins/transformers/wikiPathProcessor.ts`

```typescript
import { QuartzTransformerPlugin } from "../types"
import { findAndReplace as mdastFindReplace } from "mdast-util-find-and-replace"

export const WikiPathProcessor: QuartzTransformerPlugin = () => {
  return {
    name: "WikiPathProcessor",
    
    markdownPlugins() {
      return [() => {
        return (tree, file) => {
          mdastFindReplace(tree, [
            // Standard wikilinks: [[wiki/page]] → [[page]]
            [/\[\[wiki\/([^\]|\#]+)(#[^\]|]+)?(\|[^\]]+)?\]\]/g, 
             (_, path, anchor, alias) => `[[${path}${anchor || ''}${alias || ''}]]`],
            
            // Embedded wikilinks: ![[wiki/image]] → ![[image]]
            [/!\[\[wiki\/([^\]|\#]+)(#[^\]|]+)?(\|[^\]]+)?\]\]/g,
             (_, path, anchor, alias) => `![[${path}${anchor || ''}${alias || ''}]]`],
            
            // Markdown links: [text](wiki/page) → [text](page)
            [/\[([^\]]+)\]\(wiki\/([^)]+)\)/g,
             (_, text, path) => `[${text}](${path})`],
            
            // Markdown image links: ![alt](wiki/image) → ![alt](image)
            [/!\[([^\]]*)\]\(wiki\/([^)]+)\)/g,
             (_, alt, path) => `![${alt}](${path})`]
          ])
        }
      }]
    }
  }
}
```

### File: `quartz/plugins/transformers/index.ts`

Add export:
```typescript
export { WikiPathProcessor } from "./wikiPathProcessor"
```

## Configuration

### File: `quartz.config.ts`

Place **before** ObsidianFlavoredMarkdown:

```typescript
transformers: [
  Plugin.FrontMatter(),
  Plugin.CreatedModifiedDate(),
  Plugin.WikiPathProcessor(),  // ← Add here
  Plugin.ObsidianFlavoredMarkdown(),
  Plugin.GitHubFlavoredMarkdown(),
  Plugin.CrawlLinks(),
  // ...
]
```

## Pattern Support

| Input | Output |
|-------|--------|
| `[[wiki/page]]` | `[[page]]` |
| `[[wiki/page#section]]` | `[[page#section]]` |
| `[[wiki/page\|alias]]` | `[[page\|alias]]` |
| `![[wiki/image.png]]` | `![[image.png]]` |
| `[text](wiki/page)` | `[text](page)` |
| `![alt](wiki/image.jpg)` | `![alt](image.jpg)` |

## Technical Notes

- Uses `mdastFindReplace` for context-aware processing (won't match in code blocks)
- Executes in `markdownPlugins` phase before OFM's wikilink conversion
- Regex patterns preserve anchors (`#section`) and aliases (`|display text`)
- No configuration options needed - single-purpose transformer

## References

- [Quartz Plugin Development](https://quartz.jzhao.xyz/advanced/making-plugins)
- [mdast-util-find-and-replace](https://github.com/syntax-tree/mdast-util-find-and-replace)
- [Quartz Transformer Types](https://github.com/jackyzha0/quartz/blob/v4/quartz/plugins/types.ts)
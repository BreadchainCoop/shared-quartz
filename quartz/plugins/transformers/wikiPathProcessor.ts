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
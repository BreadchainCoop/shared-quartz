
# Wiki Directory

This directory contains our public-facing documentation that gets published to the [Bread Cooperative documentation site](https://quartz-bread-coop.netlify.app). Content here represents our official knowledge base and has been reviewed by the team for accuracy and clarity.

## Purpose and Audience

The wiki serves as our primary documentation platform for sharing knowledge with the broader community. Content here should be accessible to newcomers while providing depth for experienced users. All wiki content has progressed through our collaborative review process and represents the team's collective expertise.

Think of the wiki as our public face - content should be polished, accurate, and helpful to anyone trying to understand the Bread Cooperative's work and philosophy.

## Publishing Content

Publishing wiki content to the documentation site requires proper metadata configuration and the Enveloppe plugin for Obsidian.

### Publication Workflow

The publishing workflow previously depended on the Enveloppe plugin for Obsidian, which is currently effected by a bug. Results may be unpredictable and/or broken.

Content can be published manually or by script. Further instructions will be posted here once a reliable publishing workflow has been established.

%% 
Transform wiki content into public documentation through this straightforward process:

1. **Configure Metadata** - Add the required frontmatter fields to enable publication: `publish: true`, `draft: false`, and `share: true`
2. **Publish via Enveloppe** - Use the command "Enveloppe: Upload single current active note" to push content to the live site
3. **Update and Maintain** - Re-run the Enveloppe command after making edits to keep published content current %%

### Content Guidelines

Effective wiki documentation follows consistent patterns that make information easy to find and understand:

- **Use Standard Templates** - Start with templates from `/tools/templates/` to maintain consistent structure
- **Include Complete Metadata** - Follow the specifications in [[tools/fileClasses/readme|FileClasses Documentation]] for proper frontmatter
- **Structure with Clear Headings** - Create logical information hierarchy that supports both reading and scanning
- **Link Related Content** - Use `[[wikilinks]]` to connect related concepts and create knowledge pathways

## Quality Standards

Published documentation should meet these standards before going live:

- Content accuracy verified by subject matter experts
- All internal and external links tested and functional  
- Complete metadata following established schemas
- No sensitive or confidential information included

## Resources

- [[README|Repository Overview]] - Complete setup and contribution guidelines
- [[tools/readme|Content Tools]] - Templates and metadata systems
- [[tools/fileClasses/readme|Metadata Reference]] - Authoritative frontmatter documentation
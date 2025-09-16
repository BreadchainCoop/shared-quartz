# Attachments Directory

This directory stores media files, images, and binary assets that support content throughout the knowledge base. Obsidian automatically saves pasted images and dropped files here, making it the central location for all multimedia content.

## Purpose and Organization

The attachments directory serves as the media library for the entire knowledge base. When you paste images into documents or drag files into Obsidian, they automatically appear here with appropriate filenames that make them easy to locate and manage.

Effective attachment management keeps the knowledge base performant and navigable while ensuring that visual content enhances rather than clutters the documentation experience.

## File Management Best Practices

### Naming Conventions

Use descriptive, meaningful filenames that make content discoverable:
- ✅ `governance-workflow-diagram.png`
- ✅ `quarterly-metrics-2024-q1.pdf`  
- ❌ `Untitled.png`
- ❌ `Screenshot 2024-01-15.png`

### File Format Guidelines

Choose appropriate formats based on content type and intended use:

- **PNG** - Screenshots, diagrams, and images requiring transparency
- **JPG** - Photographs and images where file size matters more than perfect quality
- **SVG** - Vector graphics and logos that need to scale cleanly
- **PDF** - Documents and reports that should maintain formatting

### Optimization and Performance

Keep the knowledge base responsive by managing file sizes effectively:

- **Compress Images** - Use tools like TinyPNG or built-in image compression before adding large images
- **External Hosting** - Consider hosting large videos or extensive media collections outside the repository
- **Git LFS** - For files over 100MB that must be stored in the repository, configure Git LFS to handle them efficiently

## Using Attachments in Content

### Embedding Methods

Different embedding approaches serve different purposes in documentation:

```markdown
# Standard image embed
![Workflow diagram showing the governance process](attachments/governance-workflow.png)

# Direct file embed (opens in Obsidian)
![[attachments/quarterly-report.pdf]]

# Download link for files
[Download the complete dataset](attachments/research-data.zip)
```

### Content Integration

Effective use of attachments enhances understanding without overwhelming the reader. Use visual content to clarify complex concepts, provide evidence for claims, and break up dense text sections.

## Maintenance and Cleanup

### Regular Maintenance

Keep the attachments directory organized and performant through periodic maintenance:

- **Find Orphaned Files** - Use Obsidian's "Find orphaned files" feature to identify attachments no longer referenced in any document
- **Archive Historical Content** - Move outdated but historically significant files to `/archive/attachments/` 
- **Remove Unnecessary Files** - Delete truly unused attachments to keep the directory focused and repository size manageable

### Security and Compliance

Protect sensitive information and respect intellectual property:

- **No Sensitive Data** - Never include passwords, personal information, or confidential data in images or documents
- **Respect Copyright** - Ensure you have rights to use any images, documents, or media you add to the knowledge base
- **Review Before Publishing** - Check that attachments don't contain information that shouldn't be public before publishing wiki content

## Resources

- [Wiki Directory](wiki/readme.md) - Where most attachments get embedded in public documentation  
- [Repository Overview](../README.md) - Complete knowledge base setup and management guidance
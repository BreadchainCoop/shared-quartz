# Font System Audit Report

## Font Files Inventory

### Font File Locations
**Streamlined font storage:**
- `./quartz/static/fonts/` (6 OTF files) - Source location
- `./public/static/fonts/` (6 OTF files) - Build output location

### BreadCoop Font Files
**BreadBody Family:**
- `bread-body-light.otf` (60,436 bytes)
- `bread-body-regular.otf` (61,652 bytes)
- `bread-body-bold.otf` (61,276 bytes)

**BreadDisplay Family:**
- `bread-display-regular.otf` (86,548 bytes)
- `bread-display-bold.otf` (88,384 bytes)
- `bread-display-black.otf` (88,512 bytes)

### External Font Dependencies
- **KaTeX fonts**: 48 math font files (TTF, WOFF, WOFF2)
- **MathJax fonts**: 44 math font files (WOFF)

## Font Configuration Analysis

### Typography Config (`quartz.config.ts:25-29`)
```typescript
typography: {
  header: "BreadDisplay",
  body: "BreadBody",
  code: "IBM Plex Mono",
}
```

### @font-face Declarations (`quartz/styles/custom.scss:7-63`)
**BreadBody Font Faces:**
- Light (300), Regular (400), Bold (700)
- All use `font-display: fallback`
- **Current fix applied**: Regular OTF prioritized over WOFF2

**BreadDisplay Font Faces:**
- Regular (400), Bold (700), Black (900)
- All use `font-display: fallback`

### CSS Variable Mapping (`quartz/util/theme.ts:158-161`)
```css
--titleFont: "BreadDisplay", "Inter", "Source Sans Pro", [system fonts]
--headerFont: "BreadDisplay", "Inter", "Source Sans Pro", [system fonts]
--bodyFont: "BreadBody", "Inter", "Source Sans Pro", [system fonts]
--codeFont: "IBM Plex Mono", [system monospace]
```

## Font Usage Patterns

### Direct font-family References
**Custom SCSS (`quartz/styles/custom.scss`):**
- 6 @font-face declarations use literal family names
- 4 typography classes use CSS variables

**Base SCSS (`quartz/styles/base.scss`):**
- All references use CSS variables (`var(--bodyFont)`, `var(--headerFont)`, `var(--codeFont)`)

**Component SCSS:**
- `explorer.scss`: 2 `var(--headerFont)` references
- `search.scss`: 4 `var(--bodyFont)` + 1 `inherit` references
- `popover.scss`: 1 `var(--bodyFont)` reference
- `mermaid.scss`: 1 `var(--bodyFont)` reference

### Component-Level Font Properties
**PageTitle (`PageTitle.tsx:23`):**
- Uses `var(--titleFont)` (resolves to BreadDisplay)

## Font Loading Strategy

### Local Fonts (`quartz/components/Head.tsx:54-61`)
**Preloaded fonts when `fontOrigin: "local"`:**
- `Bread Body Regular.woff2`
- `Bread Display Regular.woff2`
- `Bread Body Bold.woff2`
- `Bread Display Black.woff2`

### Font Display Strategy
- **All fonts**: `font-display: fallback`
- **Previous strategy**: `font-display: block` (changed in commit 54d3d89)

## Critical Anomalies Found

### WOFF2 Version Inconsistency
**BreadBody Regular WOFF2**: Version 3.0 (problematic on iOS)
**All other WOFF2 files**: Version 1.0 (working correctly)

This version mismatch explains the iOS font scrambling issue affecting only base BreadBody Regular text.

## Font Property Usage

### Documented Properties
- `font-display: fallback` (all @font-face declarations)
- No `text-rendering`, `font-feature-settings`, or `font-variant` properties found
- No additional font optimization properties detected

## Summary
The font system is well-organized with proper CSS variable usage and fallback chains. The critical issue was identified as BreadBody Regular WOFF2 v3.0 incompatibility, which has been addressed by prioritizing OTF format. All other font configurations follow consistent patterns and naming conventions.
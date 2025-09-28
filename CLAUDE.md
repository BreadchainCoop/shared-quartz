# Claude Code Configuration

## Commit Policy
- **NEVER** list Claude as co-author on any commits
- User does not want AI attribution in commit messages
- Only include the Claude Code generation notice if specifically requested

## Project Overview
- **Framework**: Quartz v4 static site generator for Bread Cooperative documentation
- **Branch**: Working on `import` branch (main branch for PRs)
- **Content Source**: Migrated from shared-obsidian repository
- **Primary Directory**: shared-quartz
- **Domain**: docs.bread.coop

## User Working Style & Expectations

### Research-First Methodology
- **ALWAYS** research existing patterns before implementing features
- **NEVER** guess implementation details - follow established Quartz patterns
- Study component structures, CSS patterns, and utilities before coding
- Example: Use `joinSegments()` utility for paths, not string interpolation

### Code Quality Standards
- **NEVER** use `!important` CSS overrides - diagnose and fix properly
- Match CSS specificity patterns from existing codebase
- Follow component styling conventions (embedded CSS vs external SCSS)
- Understand inheritance and specificity before overriding styles

### Commit Organization
- Group commits by functional area, not bundled changes
- Use clear, descriptive commit messages
- Example structure: Color changes → Typography → Content → Documentation

## Technical Architecture Understanding

### Core Configuration Files
- **`quartz.config.ts`**: Central configuration (colors, fonts, plugins, site settings)
- **`quartz.layout.ts`**: Component layout and page structure
- **`quartz/styles/custom.scss`**: Brand-specific styling overrides
- **Component files**: Individual functionality with embedded CSS

### Color System
- Colors defined in `quartz.config.ts` as CSS variables
- Processed by `quartz/util/theme.ts`
- Applied as `:root { --variable: value }` in generated CSS
- BreadCoop design system: Paper backgrounds, Core Orange/Jade, Ink text

### Font System
- Local fonts preferred over CDN (brand consistency)
- Font faces defined in `custom.scss` with `@font-face` declarations
- Typography hierarchy: BreadDisplay (headers), BreadBody (body), IBM Plex Mono (code)
- Font weights: 300 (light), 400 (regular), 700 (bold), 900 (black)
- **iOS Fix**: Uses `font-display: fallback` with proper path resolution and font preloading to prevent iOS WebKit font loading failures

### Path Handling
- **CRITICAL**: Always use `joinSegments(baseDir, "path")` for asset paths
- **NEVER** use string interpolation like `${baseDir}path`
- Import pattern: `import { pathToRoot, joinSegments } from "../util/path"`

## Key Technical Patterns

### Component Styling
```typescript
// Embedded CSS in component files
ComponentName.css = `
.component-class {
  property: value;
}
`
```

### Static Asset References
```typescript
// Correct path construction
<img src={joinSegments(baseDir, "static/image.png")} />

// NOT string interpolation
<img src={`${baseDir}static/image.png`} /> // WRONG
```

### Frontmatter Access
```typescript
// ContentDetails interface modification required for new frontmatter fields
export type ContentDetails = {
  // ... existing fields
  frontmatter?: QuartzPluginData["frontmatter"]
}
```

### CSS Specificity Matching
```scss
// Match existing nested selectors for proper overrides
.search > .search-button {
  background-color: var(--light); // Override color-mix rule
}
```

## Critical Learnings

### Explorer Sorting Implementation
- Required 4-step process: interface modification → linkIndex update → sortFn implementation → component application
- Must follow exact reference documentation patterns
- Failed attempts taught importance of research over guessing

### Social Media Integration
- Use `socialImage: socialImages/filename.png` in frontmatter
- Images stored in `quartz/static/socialImages/`
- Overrides default og-image for branded social sharing

### Typography Best Practices
- Font weight swaps: Use specific selectors for different hierarchy levels
- Color coordination: Site title (orange, heavy) vs content headings (dark, light)
- Visual hierarchy: Prominent navigation, subtle content headings

## Asset Management

### Static Assets Location
- **Fonts**: `quartz/static/fonts/` (BreadDisplay, BreadBody variants)
- **Images**: `quartz/static/` (bread-mono.png logo)
- **Social Images**: `quartz/static/socialImages/` (manifesto.png, voting-power.png)
- **Icons**: `quartz/static/icon.png` (site favicon)

### Logo Integration
- Added to PageTitle component with flexbox alignment
- Height matches font size for visual balance
- Gap spacing for attractive layout
- Path resolved with `joinSegments()` utility

## Debugging Approach

### CSS Issues
1. Identify the actual element causing the problem (not assumptions)
2. Find the specific CSS rule and selector
3. Match or exceed specificity with proper selectors
4. Test changes before assuming they work

### Component Issues
1. Research existing component patterns first
2. Check imports and utility usage
3. Follow TypeScript interfaces exactly
4. Verify path construction patterns

## Future Development Guidelines

### Before Making Changes
1. Read existing code patterns in the target area
2. Check for similar implementations in the codebase
3. Understand the full component/styling hierarchy
4. Plan changes to match established conventions

### When Stuck
1. Research Quartz documentation
2. Study existing component implementations
3. Check for similar patterns in the codebase
4. Ask specific questions rather than guessing

### Testing Changes
1. Always test implementations after making changes
2. Verify paths and asset loading work correctly
3. Check responsive behavior and cross-browser compatibility
4. Confirm changes don't break existing functionality

## Critical Action Guidelines

### STOP AND THINK BEFORE EXECUTING
- **ALWAYS** pause and mentally review the complete action plan before using any tools
- **VERIFY** that the intended action matches the user's actual request
- **DOUBLE-CHECK** file paths, directory locations, and command syntax
- **NEVER** act impulsively or make assumptions about user intent

### Error Recovery Protocol
1. **ACKNOWLEDGE MISTAKES**: Immediately recognize when an action was wrong
2. **STOP EXECUTION**: Don't compound errors with more wrong actions
3. **CLARIFY INTENT**: Ask for clarification if the request is unclear
4. **CORRECT COURSE**: Fix the error with a single, correct action

## Process Management Rules

### Development Server Guidelines
- **DEFAULT PORT**: Always use port 8080 for Quartz development servers unless absolutely necessary
- **SINGLE SERVER**: Only run ONE development server at a time
- **CLEAN SHUTDOWN**: Always kill background processes when done with a session
- **NO PORT CONFLICTS**: Never leave multiple servers running on different ports

### Background Process Management
1. **START**: Only start background processes when specifically needed for testing
2. **MONITOR**: Use BashOutput tool to check process status periodically
3. **CLEANUP**: Use KillShell tool to terminate background processes when done
4. **VERIFY**: Check that processes are properly terminated before ending session

### Port Usage Protocol
- **8080**: Default Quartz development server port
- **AVOID**: Using ports 8081, 8082, etc. unless specifically required
- **CHECK**: Use `netstat` or similar to verify ports are free before starting new servers
- **KILL**: Terminate processes properly using KillShell tool, not system kill commands
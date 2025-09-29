# Updated Local Font Removal Plan (Post-Reset)

## Current State Analysis

**Font files in `quartz/static/fonts/`:**
- 6 .otf files (body light/regular/bold, display regular/bold/black)
- 6 .woff2 files (same variants)
- 6 .css files (individual font declarations with issues)

**Issues found:**
- Individual .css files have inconsistent font-family names
- Individual .css files use `text-rendering: optimizeLegibility` (webkit problems)
- Individual .css files use `font-weight: normal` instead of specific weights

## Step 1: Update Configuration

**File:** `quartz.config.ts`

**Change from:**
```typescript
theme: {
  fontOrigin: "local",
  cdnCaching: false,
  typography: {
    header: "BreadDisplay",
    body: "BreadBody",
    code: "IBM Plex Mono",
  },
}
```

**Change to:**
```typescript
theme: {
  fontOrigin: "googleFonts",
  cdnCaching: true,
  typography: {
    header: "Schibsted Grotesk",
    body: "Source Sans Pro", 
    code: "IBM Plex Mono",
  },
}
```

## Step 2: Remove Custom Font CSS

**File:** `quartz/styles/custom.scss`

**Remove entire font sections (lines 3-64):**
```scss
// =============================================================================
// BREAD BODY FONTS (Body Text)
// =============================================================================

@font-face {
  font-family: 'BreadBody';
  src: url('/static/fonts/Bread Body Light.woff2') format('woff2'),
       url('/static/fonts/Bread Body Light.otf') format('opentype');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'BreadBody';
  src: url('/static/fonts/Bread Body Regular.woff2') format('woff2'),
       url('/static/fonts/Bread Body Regular.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'BreadBody';
  src: url('/static/fonts/Bread Body Bold.woff2') format('woff2'),
       url('/static/fonts/Bread Body Bold.otf') format('opentype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

// =============================================================================
// BREAD DISPLAY FONTS (Headers)
// =============================================================================

@font-face {
  font-family: 'BreadDisplay';
  src: url('/static/fonts/Bread Display Regular.woff2') format('woff2'),
       url('/static/fonts/Bread Display Regular.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'BreadDisplay';
  src: url('/static/fonts/Bread Display Bold.woff2') format('woff2'),
       url('/static/fonts/Bread Display Bold.otf') format('opentype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'BreadDisplay';
  src: url('/static/fonts/Bread Display Black.woff2') format('woff2'),
       url('/static/fonts/Bread Display Black.otf') format('opentype');
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}
```

**Keep all other CSS** (typography classes, callouts, responsive styles, etc.)

## Step 3: Delete Font Files

**Delete entire directory:** `quartz/static/fonts/`

**This removes:**
- All .otf files (6 files)
- All .woff2 files (6 files) 
- All .css files (6 files)
- Total: 18 files deleted

## Step 4: Update Font Weight References

**File:** `quartz/styles/custom.scss`

**Problematic weight references to update:**

**Change `.display-text` class:**
```scss
// From:
font-weight: 900;

// To:
font-weight: 700; // Google Fonts may not have 900 weight
```

**Change `.page-title` class:**
```scss
// From:
font-weight: 900;

// To:
font-weight: 700; // Adjust for Google Fonts availability
```

**Header overrides are already appropriate (400 weight)**

## Step 5: Verify File Structure

**After changes, confirm these files exist:**
- ✅ `quartz.config.ts` (updated)
- ✅ `quartz/styles/custom.scss` (font sections removed)
- ❌ `quartz/static/fonts/` (directory deleted)

## Step 6: Test Build

**Commands:**
```bash
npx quartz build
npx quartz serve
```

**Expected results:**
- No 404 errors for font files
- Google Fonts load from CDN
- Schibsted Grotesk for headers
- Source Sans Pro for body text
- IBM Plex Mono for code (unchanged)

## Expected Font Changes

**Before (Bread fonts):**
- Headers: Custom BreadDisplay font
- Body: Custom BreadBody font
- Code: IBM Plex Mono

**After (Google Fonts):**
- Headers: Schibsted Grotesk (Google Fonts)
- Body: Source Sans Pro (Google Fonts)  
- Code: IBM Plex Mono (Google Fonts)

## Benefits

- ✅ **WebKit compatibility** - No more iOS garbled text
- ✅ **CDN performance** - Fast Google Fonts delivery
- ✅ **Zero maintenance** - No custom font file management
- ✅ **Reliable loading** - Google Fonts handle edge cases
- ✅ **Consistent rendering** - Cross-browser reliability

## Rollback Plan

If needed:
1. `git checkout HEAD -- quartz.config.ts`
2. `git checkout HEAD -- quartz/styles/custom.scss`
3. `git checkout HEAD -- quartz/static/fonts/`
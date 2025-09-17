---
title: Local Fonts
tags:
  - feature/typography
  - custom
---

Quartz supports using local fonts stored in your repository instead of external font services like Google Fonts.

## Configuration

To use local fonts, configure your `quartz.config.ts`:

```typescript
theme: {
  fontOrigin: "local",        // Use local fonts instead of Google Fonts
  cdnCaching: false,          // Disable CDN caching
  typography: {
    header: "CustomHeaderFont",
    body: "CustomBodyFont",
    code: "CustomCodeFont",
  },
}
```

## Font Files

Store your font files in `quartz/static/fonts/`:

```
quartz/static/fonts/
├── MyFont-Regular.woff2
├── MyFont-Regular.otf
├── MyFont-Bold.woff2
└── MyFont-Bold.otf
```

## Font Face Declarations

Add `@font-face` declarations to `quartz/styles/custom.scss`:

```scss
@font-face {
  font-family: 'CustomBodyFont';
  src: url('/static/fonts/MyFont-Regular.woff2') format('woff2'),
       url('/static/fonts/MyFont-Regular.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'CustomBodyFont';
  src: url('/static/fonts/MyFont-Bold.woff2') format('woff2'),
       url('/static/fonts/MyFont-Bold.otf') format('opentype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

## Benefits

- **Self-contained**: No external dependencies or requests
- **Performance**: Fonts load with your site, no extra network calls
- **Privacy**: No tracking from external font services
- **Reliability**: Works offline and without external service availability
- **Brand consistency**: Use custom brand fonts

## Best Practices

- Use WOFF2 format first for modern browsers, with OTF/TTF fallbacks
- Include `font-display: swap` to prevent layout shift
- Optimize font files to minimize size
- Declare all required font weights and styles
- Test font loading across different browsers and connection speeds

## Implementation Example

See `bread-fonts.md` in this repository for a complete implementation example using custom Bread fonts with proper weight mapping and typography refinements.
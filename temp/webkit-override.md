# WebKit Font Rendering Fix - Technical Analysis

## Problem Analysis

### WebKit Font Rendering Issues
WebKit browsers (Safari, iOS browsers) have documented issues with custom web fonts:

1. **Font Loading Race Conditions**: WebKit's font loading mechanism can fail to properly substitute custom fonts, leading to character encoding mismatches
2. **Service Worker Conflicts**: PWA caching can interfere with font loading on iOS WebKit
3. **Memory Management**: iOS WebKit aggressively garbage collects font resources, causing intermittent font loading failures
4. **Character Set Mapping**: Custom fonts may trigger incorrect character encoding interpretation in WebKit's text rendering pipeline

### Specific Issue Symptoms
- Text appears as "Tf q 28- 3136- 3 n jo sf be" instead of readable content
- Only affects body text (headers remain readable)
- Occurs across all iOS browsers (Safari, Chrome, Ecosia)
- Affects users globally (North America, South America, Europe)

## Technical Solution

### WebKit Detection Method
```scss
@supports (-webkit-touch-callout: none) {
  /* WebKit-specific styles */
}
```

**Why this works:**
- `-webkit-touch-callout` is a WebKit-only CSS property
- `@supports` provides feature detection without user-agent sniffing
- Targets all WebKit browsers: Safari (macOS/iOS), Chrome on iOS, iOS WKWebView

### CSS Variable Override Strategy
```scss
@supports (-webkit-touch-callout: none) {
  :root {
    --bodyFont: -apple-system, system-ui, sans-serif;
    --headerFont: -apple-system, system-ui, sans-serif;
    --codeFont: ui-monospace, 'SF Mono', Monaco, Consolas, monospace;
  }
}
```

**Technical justification:**
1. **CSS Specificity**: `:root` selector has same specificity as existing declarations
2. **Source Order**: Later declarations override earlier ones with equal specificity
3. **Variable Inheritance**: CSS custom properties cascade normally through DOM
4. **Font Stack Reliability**: System fonts bypass WebKit's custom font loading pipeline

### System Font Benefits
- **Native Rendering**: System fonts use optimized platform rendering
- **Zero Loading Time**: No network requests or font parsing
- **Memory Efficient**: OS-managed font resources
- **Character Set Complete**: Full Unicode support guaranteed

## Implementation

### File Location
Add to: `quartz/styles/custom.scss`

### Complete Fix
```scss
// WebKit font rendering fix for iOS garbled text issue
// Targets all WebKit browsers to bypass custom font loading bugs
@supports (-webkit-touch-callout: none) {
  :root {
    --bodyFont: -apple-system, system-ui, sans-serif;
    --headerFont: -apple-system, system-ui, sans-serif;
    --codeFont: ui-monospace, 'SF Mono', Monaco, Consolas, monospace;
  }
}
```

### Fallback Safety
- Non-WebKit browsers continue using custom fonts
- If override fails, existing fonts remain active
- No functional impact on site operation

## Browser Coverage

**Affected (will use system fonts):**
- Safari (macOS, iOS)
- Chrome (iOS)
- Firefox (iOS)
- All iOS WKWebView-based browsers

**Unaffected (keeps custom fonts):**
- Chrome (Windows, macOS, Android)
- Firefox (Windows, macOS, Android)
- Edge (Windows, macOS)

## Expected Results

1. **iOS users**: Readable system fonts, no garbled text
2. **Desktop users**: Continue seeing custom Bread fonts
3. **Performance**: Faster font loading on WebKit
4. **Maintenance**: Zero ongoing maintenance required
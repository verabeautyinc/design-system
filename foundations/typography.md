# Typography

Typography is the primary vehicle for Vera's voice — calm authority expressed through careful type choices. Our system prioritizes legibility, hierarchy, and the quiet confidence of generous whitespace.

---

## Font Families

### Primary — Inter

**Inter** is our primary typeface across all platforms. Its open, neutral letterforms project clinical clarity while maintaining warmth through subtle humanist details. Designed specifically for screens, it excels at every size from captions to display.

- **Source:** [Google Fonts](https://fonts.google.com/specimen/Inter) / [rsms.me/inter](https://rsms.me/inter)
- **License:** SIL Open Font License
- **Variable font:** Yes (recommended for web/mobile)
- **Weights:** 9 (Thin through Black)

| Weight | Value | Token | Usage |
|--------|-------|-------|-------|
| Thin | 100 | `font-thin` | Decorative display only (48px+) |
| ExtraLight | 200 | `font-extralight` | Large display text (36px+) |
| Light | 300 | `font-light` | Display and title text (24px+) |
| Regular | 400 | `font-regular` | Body text, default weight |
| Medium | 500 | `font-medium` | Emphasized body, subheadlines |
| SemiBold | 600 | `font-semibold` | Headlines, buttons, labels |
| Bold | 700 | `font-bold` | Strong emphasis, navigation |
| ExtraBold | 800 | `font-extrabold` | Hero headlines, marketing |
| Black | 900 | `font-black` | Display impact (limited use) |

### Display Accent — Cormorant Garamond

For premium marketing moments — hero headlines, editorial content, and brand storytelling — **Cormorant Garamond** adds a layer of luxury refinement. Use sparingly.

- **Source:** [Google Fonts](https://fonts.google.com/specimen/Cormorant+Garamond)
- **License:** SIL Open Font License
- **Weights used:** Light (300), Regular (400), SemiBold (600)
- **Usage:** Display text only (32px+). Never for UI elements or body text.

### Korean — Pretendard

For Korean-language content, **Pretendard** mirrors Inter's proportions and tone while providing native Korean glyph support.

- **Source:** [cactus.tistory.com/306](https://cactus.tistory.com/306)
- **License:** SIL Open Font License
- **Weights:** Matches Inter 1:1 (100–900)

### Monospace — JetBrains Mono

For treatment codes, appointment IDs, data tables, and any content requiring fixed-width alignment.

- **Source:** [Google Fonts](https://fonts.google.com/specimen/JetBrains+Mono)
- **License:** SIL Open Font License
- **Weights used:** Regular (400), Medium (500), Bold (700)

### Font Stack (CSS)

```css
/* Primary */
--font-sans: 'Inter', 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Display */
--font-display: 'Cormorant Garamond', 'Georgia', serif;

/* Monospace */
--font-mono: 'JetBrains Mono', 'SF Mono', 'Consolas', monospace;
```

### React Native

```typescript
// Use expo-google-fonts or custom font loading
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
```

---

## Type Scale

Vera's type scale follows Apple HIG naming conventions with sizes optimized for each breakpoint. All values are in `px` with `rem` equivalents (base 16px).

### Mobile (375px viewport)

| Style | Size | Rem | Line Height | Letter Spacing | Weight |
|-------|------|-----|-------------|----------------|--------|
| Display | 34px | 2.125 | 40px (1.18) | -0.4px | Light 300 |
| Headline | 28px | 1.75 | 34px (1.21) | -0.3px | SemiBold 600 |
| Title 1 | 22px | 1.375 | 28px (1.27) | -0.2px | SemiBold 600 |
| Title 2 | 20px | 1.25 | 26px (1.30) | -0.1px | SemiBold 600 |
| Title 3 | 17px | 1.0625 | 24px (1.41) | 0px | SemiBold 600 |
| Body | 17px | 1.0625 | 26px (1.53) | 0px | Regular 400 |
| Body (emphasis) | 17px | 1.0625 | 26px (1.53) | 0px | SemiBold 600 |
| Callout | 16px | 1.0 | 22px (1.38) | 0px | Regular 400 |
| Subheadline | 15px | 0.9375 | 22px (1.47) | 0px | Medium 500 |
| Footnote | 13px | 0.8125 | 18px (1.38) | 0px | Regular 400 |
| Caption 1 | 12px | 0.75 | 16px (1.33) | 0.1px | Regular 400 |
| Caption 2 | 11px | 0.6875 | 14px (1.27) | 0.2px | Medium 500 |

### Tablet (768px viewport)

| Style | Size | Line Height | Letter Spacing | Weight |
|-------|------|-------------|----------------|--------|
| Display | 40px | 48px (1.20) | -0.5px | Light 300 |
| Headline | 32px | 38px (1.19) | -0.4px | SemiBold 600 |
| Title 1 | 26px | 32px (1.23) | -0.2px | SemiBold 600 |
| Title 2 | 22px | 28px (1.27) | -0.1px | SemiBold 600 |
| Title 3 | 18px | 24px (1.33) | 0px | SemiBold 600 |
| Body | 17px | 26px (1.53) | 0px | Regular 400 |
| Body (emphasis) | 17px | 26px (1.53) | 0px | SemiBold 600 |
| Callout | 16px | 22px (1.38) | 0px | Regular 400 |
| Subheadline | 15px | 22px (1.47) | 0px | Medium 500 |
| Footnote | 13px | 18px (1.38) | 0px | Regular 400 |
| Caption 1 | 12px | 16px (1.33) | 0.1px | Regular 400 |
| Caption 2 | 11px | 14px (1.27) | 0.2px | Medium 500 |

### Desktop (1440px viewport)

| Style | Size | Line Height | Letter Spacing | Weight |
|-------|------|-------------|----------------|--------|
| Display | 48px | 56px (1.17) | -0.6px | Light 300 |
| Headline | 36px | 44px (1.22) | -0.4px | SemiBold 600 |
| Title 1 | 28px | 36px (1.29) | -0.3px | SemiBold 600 |
| Title 2 | 24px | 30px (1.25) | -0.2px | SemiBold 600 |
| Title 3 | 20px | 26px (1.30) | -0.1px | SemiBold 600 |
| Body | 17px | 28px (1.65) | 0px | Regular 400 |
| Body (emphasis) | 17px | 28px (1.65) | 0px | SemiBold 600 |
| Callout | 16px | 24px (1.50) | 0px | Regular 400 |
| Subheadline | 15px | 22px (1.47) | 0px | Medium 500 |
| Footnote | 13px | 18px (1.38) | 0px | Regular 400 |
| Caption 1 | 12px | 16px (1.33) | 0.1px | Regular 400 |
| Caption 2 | 11px | 14px (1.27) | 0.2px | Medium 500 |

---

## Font Pairing Strategy

### Principle: One Voice, Two Registers

Inter handles 95% of all typography. Cormorant Garamond appears only for **premium brand moments** — think of it as Vera "dressing up."

| Context | Font | Example |
|---------|------|---------|
| **All UI** | Inter | Buttons, labels, navigation, forms, cards |
| **Body content** | Inter | Treatment descriptions, reviews, articles |
| **Headlines (product)** | Inter SemiBold/Bold | Section headers, page titles |
| **Headlines (marketing)** | Cormorant Garamond | Hero banners, landing pages, email headers |
| **Data** | JetBrains Mono | Appointment IDs, prices, treatment codes |
| **Korean content** | Pretendard | All Korean text mirrors Inter hierarchy |

### Pairing Rules

1. **Never mix Inter and Cormorant in the same text block** — they live in separate hierarchical zones
2. **Cormorant is for display only** — minimum 32px, maximum 2 instances per screen
3. **Data in monospace** — any string the user might need to copy, compare, or reference
4. **One font weight per element** — never apply two weights to the same component

---

## Accessibility

### Minimum Sizes

| Context | Minimum Size | Recommended |
|---------|-------------|-------------|
| Body text | 16px | 17px |
| Secondary text | 13px | 15px |
| Captions/labels | 11px | 12px |
| Touch target labels | 14px | 16px |
| Button text | 14px | 16px |

### Line Length

| Context | Min | Ideal | Max |
|---------|-----|-------|-----|
| Body text | 45 characters | 65 characters | 75 characters |
| Headlines | — | — | 30 characters |
| Captions | — | — | 50 characters |

### Dynamic Type Support

On iOS/Android, respect the user's system text size preference. Map Vera styles to system Dynamic Type sizes:

| Vera Style | iOS Dynamic Type | Android sp |
|------------|-----------------|------------|
| Display | `.largeTitle` | 34sp |
| Headline | `.title1` | 28sp |
| Title 1 | `.title2` | 22sp |
| Title 2 | `.title3` | 20sp |
| Title 3 | `.headline` | 17sp |
| Body | `.body` | 17sp |
| Callout | `.callout` | 16sp |
| Subheadline | `.subheadline` | 15sp |
| Footnote | `.footnote` | 13sp |
| Caption 1 | `.caption1` | 12sp |
| Caption 2 | `.caption2` | 11sp |

### Color Contrast for Text

| Text Style | Minimum Contrast | Target Contrast |
|------------|-----------------|-----------------|
| Body text | 4.5:1 (AA) | 7:1 (AAA) |
| Large text (18px+ or 14px+ bold) | 3:1 (AA) | 4.5:1 (AAA) |
| Placeholder text | 3:1 | 4.5:1 |
| Disabled text | No minimum | 3:1 recommended |

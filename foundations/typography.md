# Typography

Typography is the primary vehicle for Vera's voice — calm authority expressed through careful type choices. Our system prioritizes legibility, hierarchy, and the quiet confidence of generous whitespace.

---

## Font Families

### Primary — Geist

**Geist** is our primary typeface across all platforms. A modern geometric sans-serif by Vercel, it provides excellent readability at every size with a clean, contemporary feel that bridges clinical clarity and warmth.

- **Source:** [Google Fonts](https://fonts.google.com/specimen/Geist) / [vercel.com/font](https://vercel.com/font)
- **License:** SIL Open Font License
- **Variable font:** Yes (recommended for web/mobile)
- **Weights:** 9 (Thin through Black)

| Weight     | Value | Token             | Usage                           |
| ---------- | ----- | ----------------- | ------------------------------- |
| Thin       | 100   | `font-thin`       | Decorative display only (48px+) |
| ExtraLight | 200   | `font-extralight` | Large display text (36px+)      |
| Light      | 300   | `font-light`      | Display and title text (24px+)  |
| Regular    | 400   | `font-regular`    | Body text, default weight       |
| Medium     | 500   | `font-medium`     | Emphasized body, subheadlines   |
| SemiBold   | 600   | `font-semibold`   | Headlines, buttons, labels      |
| Bold       | 700   | `font-bold`       | Strong emphasis, navigation     |
| ExtraBold  | 800   | `font-extrabold`  | Hero headlines, marketing       |
| Black      | 900   | `font-black`      | Display impact (limited use)    |

### Display Accent — Cormorant Garamond

For premium marketing moments — hero headlines, editorial content, and brand storytelling — **Cormorant Garamond** adds a layer of luxury refinement. Use sparingly.

- **Source:** [Google Fonts](https://fonts.google.com/specimen/Cormorant+Garamond)
- **License:** SIL Open Font License
- **Weights used:** Light (300), Regular (400), SemiBold (600)
- **Usage:** Display text only (32px+). Never for UI elements or body text.

### Wordmark — Vera Custom

A proprietary typeface used **exclusively** for the "vera" wordmark and logo. Not available for general use.

- **Source:** Custom (internal asset)
- **License:** Proprietary — Vera Beauty Inc.
- **File:** `VeraDisplay.ttf`
- **Usage:** Logo and wordmark only. Never for headlines, body text, or UI elements.

### Korean — Pretendard

For Korean-language **body and UI content**, **Pretendard** mirrors Geist's proportions and tone while providing native Korean glyph support.

- **Source:** [cactus.tistory.com/306](https://cactus.tistory.com/306)
- **License:** SIL Open Font License
- **Weights:** Matches Geist 1:1 (100–900)

### Korean Display — Arita Buri

For Korean **brand moments** — Gwallee callouts, 관리 wordmarks, manifesto copy — **Arita Buri** is the Korean pairing for Cormorant Garamond. It carries the heritage character Pretendard deliberately omits.

Arita Buri (부리 = _serif_ in Korean) was designed by Ahn Sang-soo's studio and gifted to Korean design culture by Amorepacific. Positioned as "for elegant, sophisticated modern women" — it aligns precisely with Vera's MAWFIA audience and with the Gwallee thesis of heritage-as-signature-not-costume.

The two-tier Korean system mirrors the Latin one: Pretendard:Geist :: Arita Buri:Cormorant Garamond. Body text in one, brand moments in the other.

- **Source:** [taevel02/typeface-arita](https://github.com/taevel02/typeface-arita) (Amorepacific gift — free commercial use)
- **Weights used:** Light (300) — pairs with Cormorant 300 italic
- **Usage:** Display text only (18px+). Never for UI elements or body text. Used only for Korean glyphs in brand contexts — non-Korean characters fall through to Cormorant Garamond via the `--font-display` stack.

### Monospace — Geist Mono

For treatment codes, appointment IDs, data tables, and any content requiring fixed-width alignment. Geist Mono pairs naturally with Geist as they share the same design DNA.

- **Source:** [Google Fonts](https://fonts.google.com/specimen/Geist+Mono) / [vercel.com/font](https://vercel.com/font)
- **License:** SIL Open Font License
- **Variable font:** Yes
- **Weights used:** Regular (400), Medium (500), Bold (700)

### Font Stack (CSS)

```css
/* Primary */
--font-sans:
  "Geist", "Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI",
  sans-serif;

/* Display Accent (Latin + Korean brand moments) */
--font-display: "Cormorant Garamond", "Arita Buri", "Georgia", serif;

/* Wordmark (logo only) */
--font-vera: "Vera Custom", sans-serif;

/* Monospace */
--font-mono: "Geist Mono", "SF Mono", "Consolas", monospace;
```

### React Native

```typescript
// Geist is not yet available in expo-google-fonts
// Use custom font loading via expo-font
import * as Font from "expo-font";

await Font.loadAsync({
  "Geist-Regular": require("../assets/fonts/Geist-Regular.ttf"),
  "Geist-Medium": require("../assets/fonts/Geist-Medium.ttf"),
  "Geist-SemiBold": require("../assets/fonts/Geist-SemiBold.ttf"),
  "Geist-Bold": require("../assets/fonts/Geist-Bold.ttf"),
});
```

---

## Type Scale

Vera's type scale follows Apple HIG naming conventions with sizes optimized for each breakpoint. All values are in `px` with `rem` equivalents (base 16px).

### Mobile (375px viewport)

| Style           | Size | Rem    | Line Height | Letter Spacing | Weight       |
| --------------- | ---- | ------ | ----------- | -------------- | ------------ |
| Display         | 34px | 2.125  | 40px (1.18) | -0.4px         | Light 300    |
| Headline        | 28px | 1.75   | 34px (1.21) | -0.3px         | SemiBold 600 |
| Title 1         | 22px | 1.375  | 28px (1.27) | -0.2px         | SemiBold 600 |
| Title 2         | 20px | 1.25   | 26px (1.30) | -0.1px         | SemiBold 600 |
| Title 3         | 17px | 1.0625 | 24px (1.41) | 0px            | SemiBold 600 |
| Body            | 17px | 1.0625 | 26px (1.53) | 0px            | Regular 400  |
| Body (emphasis) | 17px | 1.0625 | 26px (1.53) | 0px            | SemiBold 600 |
| Callout         | 16px | 1.0    | 22px (1.38) | 0px            | Regular 400  |
| Subheadline     | 15px | 0.9375 | 22px (1.47) | 0px            | Medium 500   |
| Footnote        | 13px | 0.8125 | 18px (1.38) | 0px            | Regular 400  |
| Caption 1       | 12px | 0.75   | 16px (1.33) | 0.1px          | Regular 400  |
| Caption 2       | 11px | 0.6875 | 14px (1.27) | 0.2px          | Medium 500   |

### Tablet (768px viewport)

| Style           | Size | Line Height | Letter Spacing | Weight       |
| --------------- | ---- | ----------- | -------------- | ------------ |
| Display         | 40px | 48px (1.20) | -0.5px         | Light 300    |
| Headline        | 32px | 38px (1.19) | -0.4px         | SemiBold 600 |
| Title 1         | 26px | 32px (1.23) | -0.2px         | SemiBold 600 |
| Title 2         | 22px | 28px (1.27) | -0.1px         | SemiBold 600 |
| Title 3         | 18px | 24px (1.33) | 0px            | SemiBold 600 |
| Body            | 17px | 26px (1.53) | 0px            | Regular 400  |
| Body (emphasis) | 17px | 26px (1.53) | 0px            | SemiBold 600 |
| Callout         | 16px | 22px (1.38) | 0px            | Regular 400  |
| Subheadline     | 15px | 22px (1.47) | 0px            | Medium 500   |
| Footnote        | 13px | 18px (1.38) | 0px            | Regular 400  |
| Caption 1       | 12px | 16px (1.33) | 0.1px          | Regular 400  |
| Caption 2       | 11px | 14px (1.27) | 0.2px          | Medium 500   |

### Desktop (1440px viewport)

| Style           | Size | Line Height | Letter Spacing | Weight       |
| --------------- | ---- | ----------- | -------------- | ------------ |
| Display         | 48px | 56px (1.17) | -0.6px         | Light 300    |
| Headline        | 36px | 44px (1.22) | -0.4px         | SemiBold 600 |
| Title 1         | 28px | 36px (1.29) | -0.3px         | SemiBold 600 |
| Title 2         | 24px | 30px (1.25) | -0.2px         | SemiBold 600 |
| Title 3         | 20px | 26px (1.30) | -0.1px         | SemiBold 600 |
| Body            | 17px | 28px (1.65) | 0px            | Regular 400  |
| Body (emphasis) | 17px | 28px (1.65) | 0px            | SemiBold 600 |
| Callout         | 16px | 24px (1.50) | 0px            | Regular 400  |
| Subheadline     | 15px | 22px (1.47) | 0px            | Medium 500   |
| Footnote        | 13px | 18px (1.38) | 0px            | Regular 400  |
| Caption 1       | 12px | 16px (1.33) | 0.1px          | Regular 400  |
| Caption 2       | 11px | 14px (1.27) | 0.2px          | Medium 500   |

---

## Font Pairing Strategy

### Principle: One Voice, Two Registers

Geist handles 95% of all typography. Cormorant Garamond appears only for **premium brand moments** — think of it as Vera "dressing up." The Vera Custom font is reserved exclusively for the logo wordmark.

| Context                   | Font                | Example                                                              |
| ------------------------- | ------------------- | -------------------------------------------------------------------- |
| **All UI**                | Geist               | Buttons, labels, navigation, forms, cards                            |
| **Body content**          | Geist               | Treatment descriptions, reviews, articles                            |
| **Headlines (product)**   | Geist SemiBold/Bold | Section headers, page titles                                         |
| **Headlines (marketing)** | Cormorant Garamond  | Hero banners, landing pages, email headers                           |
| **Logo / Wordmark**       | Vera Custom         | "vera" wordmark only                                                 |
| **Data**                  | Geist Mono          | Appointment IDs, prices, treatment codes                             |
| **Korean content**        | Pretendard          | All Korean body / UI text mirrors Geist hierarchy                    |
| **Korean brand moments**  | Arita Buri          | Gwallee callouts, 관리 wordmarks, manifesto copy — mirrors Cormorant |

### Pairing Rules

1. **Never mix Geist and Cormorant in the same text block** — they live in separate hierarchical zones
2. **Cormorant is for display only** — minimum 32px, maximum 2 instances per screen
3. **Vera Custom is for the logo only** — never use it for any other text
4. **Data in monospace** — any string the user might need to copy, compare, or reference
5. **One font weight per element** — never apply two weights to the same component

---

## Accessibility

### Minimum Sizes

| Context             | Minimum Size | Recommended |
| ------------------- | ------------ | ----------- |
| Body text           | 16px         | 17px        |
| Secondary text      | 13px         | 15px        |
| Captions/labels     | 11px         | 12px        |
| Touch target labels | 14px         | 16px        |
| Button text         | 14px         | 16px        |

### Line Length

| Context   | Min           | Ideal         | Max           |
| --------- | ------------- | ------------- | ------------- |
| Body text | 45 characters | 65 characters | 75 characters |
| Headlines | —             | —             | 30 characters |
| Captions  | —             | —             | 50 characters |

### Dynamic Type Support

On iOS/Android, respect the user's system text size preference. Map Vera styles to system Dynamic Type sizes:

| Vera Style  | iOS Dynamic Type | Android sp |
| ----------- | ---------------- | ---------- |
| Display     | `.largeTitle`    | 34sp       |
| Headline    | `.title1`        | 28sp       |
| Title 1     | `.title2`        | 22sp       |
| Title 2     | `.title3`        | 20sp       |
| Title 3     | `.headline`      | 17sp       |
| Body        | `.body`          | 17sp       |
| Callout     | `.callout`       | 16sp       |
| Subheadline | `.subheadline`   | 15sp       |
| Footnote    | `.footnote`      | 13sp       |
| Caption 1   | `.caption1`      | 12sp       |
| Caption 2   | `.caption2`      | 11sp       |

### Color Contrast for Text

| Text Style                       | Minimum Contrast | Target Contrast |
| -------------------------------- | ---------------- | --------------- |
| Body text                        | 4.5:1 (AA)       | 7:1 (AAA)       |
| Large text (18px+ or 14px+ bold) | 3:1 (AA)         | 4.5:1 (AAA)     |
| Placeholder text                 | 3:1              | 4.5:1           |
| Disabled text                    | No minimum       | 3:1 recommended |

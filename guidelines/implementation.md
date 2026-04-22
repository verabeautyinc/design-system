# Implementation Guide

A developer reference for implementing the Vera Design System across our three platforms: Next.js (vbi), React Native Expo (mobile), and Hono API (response formatting).

---

## Setup

### Web (Next.js / vbi)

#### Install Fonts

Geist, Geist Mono, and Cormorant Garamond are loaded via `next/font/google`. Vera Custom (wordmark) and Arita Buri (Korean display pairing for Cormorant) are loaded via `next/font/local`.

```typescript
// app/layout.tsx
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});
const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});
const veraCustom = localFont({
  src: "./fonts/VeraDisplay.ttf",
  variable: "--font-vera-custom",
  display: "swap",
});
const aritaBuri = localFont({
  src: "./fonts/Arita-buriL.woff2",
  variable: "--font-arita-buri",
  weight: "300",
  style: "normal",
  display: "swap",
});
```

Apply all five `.variable` classes to the root `<html>` element so `--font-display` can resolve across scripts:

```tsx
<html className={`${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.variable} ${veraCustom.variable} ${aritaBuri.variable}`}>
```

Source the Arita Buri Light woff2 from [taevel02/typeface-arita](https://github.com/taevel02/typeface-arita) (Amorepacific gift, free commercial use). Only the Hangul + basic Latin file is needed — non-Korean glyphs fall through to Cormorant via the `--font-display` stack.

#### Tailwind CSS v4 Configuration

With Tailwind v4, design tokens are configured via CSS custom properties. Import the design tokens into your global stylesheet:

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  /* Colors — Primary */
  --color-primary-50: #fef2f2;
  --color-primary-100: #fde3e3;
  --color-primary-200: #fccbcb;
  --color-primary-300: #f9a8a8;
  --color-primary-400: #f07878;
  --color-primary-500: #d85959;
  --color-primary-600: #c44242;
  --color-primary-700: #a33434;
  --color-primary-800: #872d2d;
  --color-primary-900: #722b2b;
  --color-primary-950: #3e1212;

  /* Colors — Neutral (Stone) */
  --color-neutral-0: #ffffff;
  --color-neutral-50: #fafaf9;
  --color-neutral-100: #f5f5f3;
  --color-neutral-200: #e7e5e4;
  --color-neutral-300: #d6d3d1;
  --color-neutral-400: #a8a29e;
  --color-neutral-500: #78716c;
  --color-neutral-600: #57534e;
  --color-neutral-700: #44403c;
  --color-neutral-800: #292524;
  --color-neutral-900: #1c1917;
  --color-neutral-950: #0c0a09;

  /* Colors — Semantic */
  --color-success-50: #f0fdf4;
  --color-success-100: #dcfce7;
  --color-success-500: #16a34a;
  --color-success-700: #15803d;
  --color-success-900: #14532d;

  --color-warning-50: #fefce8;
  --color-warning-100: #fef9c3;
  --color-warning-500: #ca8a04;
  --color-warning-700: #a16207;
  --color-warning-900: #713f12;

  --color-error-50: #fef2f2;
  --color-error-100: #fee2e2;
  --color-error-500: #ef4444;
  --color-error-700: #b91c1c;
  --color-error-900: #7f1d1d;

  --color-info-50: #eff6ff;
  --color-info-100: #dbeafe;
  --color-info-500: #3b82f6;
  --color-info-700: #1d4ed8;
  --color-info-900: #1e3a8a;

  /* Typography */
  --font-sans:
    "Geist", "Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  --font-display: "Cormorant Garamond", "Arita Buri", "Georgia", serif;
  --font-mono: "Geist Mono", "SF Mono", "Consolas", monospace;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;

  /* Shadows (warm-tinted) */
  --shadow-xs: 0 1px 2px rgba(28, 25, 23, 0.05);
  --shadow-sm:
    0 1px 3px rgba(28, 25, 23, 0.08), 0 1px 2px rgba(28, 25, 23, 0.04);
  --shadow-md:
    0 4px 6px rgba(28, 25, 23, 0.07), 0 2px 4px rgba(28, 25, 23, 0.04);
  --shadow-lg:
    0 10px 15px rgba(28, 25, 23, 0.08), 0 4px 6px rgba(28, 25, 23, 0.04);
  --shadow-xl:
    0 20px 25px rgba(28, 25, 23, 0.1), 0 8px 10px rgba(28, 25, 23, 0.05);

  /* Z-Index */
  --z-base: 0;
  --z-raised: 10;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-overlay: 300;
  --z-modal: 400;
  --z-toast: 500;
  --z-tooltip: 600;

  /* Breakpoints */
  --breakpoint-xs: 0px;
  --breakpoint-sm: 375px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1440px;
  --breakpoint-3xl: 1920px;
}
```

### Mobile (React Native / Expo)

#### Theme Constants

```typescript
// constants/theme.ts

export const colors = {
  primary: {
    50: "#FEF2F2",
    100: "#FDE3E3",
    200: "#FCCBCB",
    300: "#F9A8A8",
    400: "#F07878",
    500: "#D85959",
    600: "#C44242",
    700: "#A33434",
    800: "#872D2D",
    900: "#722B2B",
    950: "#3E1212",
  },
  neutral: {
    0: "#FFFFFF",
    50: "#FAFAF9",
    100: "#F5F5F3",
    200: "#E7E5E4",
    300: "#D6D3D1",
    400: "#A8A29E",
    500: "#78716C",
    600: "#57534E",
    700: "#44403C",
    800: "#292524",
    900: "#1C1917",
    950: "#0C0A09",
  },
  success: { 50: "#F0FDF4", 100: "#DCFCE7", 500: "#16A34A", 700: "#15803D" },
  warning: { 50: "#FEFCE8", 100: "#FEF9C3", 500: "#CA8A04", 700: "#A16207" },
  error: { 50: "#FEF2F2", 100: "#FEE2E2", 500: "#EF4444", 700: "#B91C1C" },
  info: { 50: "#EFF6FF", 100: "#DBEAFE", 500: "#3B82F6", 700: "#1D4ED8" },
} as const;

export const spacing = {
  0: 0,
  0.5: 2,
  1: 4,
  1.5: 6,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
  24: 96,
  32: 128,
} as const;

export const radius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  "2xl": 24,
  full: 9999,
} as const;

export const typography = {
  display: {
    fontSize: 34,
    lineHeight: 40,
    fontWeight: "300" as const,
    letterSpacing: -0.4,
  },
  headline: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "600" as const,
    letterSpacing: -0.3,
  },
  title1: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "600" as const,
    letterSpacing: -0.2,
  },
  title2: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "600" as const,
    letterSpacing: -0.1,
  },
  title3: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "600" as const,
    letterSpacing: 0,
  },
  body: {
    fontSize: 17,
    lineHeight: 26,
    fontWeight: "400" as const,
    letterSpacing: 0,
  },
  bodyEmphasis: {
    fontSize: 17,
    lineHeight: 26,
    fontWeight: "600" as const,
    letterSpacing: 0,
  },
  callout: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "400" as const,
    letterSpacing: 0,
  },
  subheadline: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "500" as const,
    letterSpacing: 0,
  },
  footnote: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "400" as const,
    letterSpacing: 0,
  },
  caption1: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "400" as const,
    letterSpacing: 0.1,
  },
  caption2: {
    fontSize: 11,
    lineHeight: 14,
    fontWeight: "500" as const,
    letterSpacing: 0.2,
  },
} as const;
```

---

## Component Mapping

### Existing Libraries

We build on top of these existing dependencies:

| Platform | Library           | Usage                          |
| -------- | ----------------- | ------------------------------ |
| Web      | shadcn/ui         | Base component primitives      |
| Web      | Radix UI          | Accessible headless components |
| Web      | Tailwind CSS v4   | Styling                        |
| Mobile   | React Native core | Base components                |
| Mobile   | Expo              | Platform APIs                  |

### Mapping Design System → shadcn/ui

When implementing a Vera component, start with the shadcn/ui base and apply our tokens:

| Vera Component | shadcn/ui Base      | Customization                      |
| -------------- | ------------------- | ---------------------------------- |
| Button         | `Button`            | Apply Vera variants, sizes, colors |
| Text Field     | `Input`             | Add label, helper, error states    |
| Select         | `Select`            | Apply Vera styling                 |
| Toggle         | `Switch`            | Apply Vera colors and sizes        |
| Checkbox       | `Checkbox`          | Apply Vera colors                  |
| Modal          | `Dialog`            | Apply Vera sizing, animation       |
| Toast          | `Sonner` or `Toast` | Apply Vera styling, positioning    |
| Alert          | `Alert`             | Apply Vera variants                |
| Card           | `Card`              | Apply Vera radius, shadow, padding |
| Table          | `Table`             | Apply Vera row heights, colors     |
| Accordion      | `Accordion`         | Apply Vera styling                 |
| Tooltip        | `Tooltip`           | Apply Vera colors, delay           |
| Badge          | `Badge`             | Apply Vera variants                |

---

## Accessibility Checklist

Every component implementation must pass:

### Keyboard Navigation

- [ ] All interactive elements focusable via Tab
- [ ] Logical tab order (follows visual layout)
- [ ] Focus ring visible (2px Primary-500, 2px offset)
- [ ] Escape closes overlays (modals, dropdowns, tooltips)
- [ ] Enter/Space activates buttons and controls
- [ ] Arrow keys navigate within groups (radio, tabs, menus)

### Screen Reader

- [ ] Semantic HTML elements (`<button>`, `<nav>`, `<main>`, `<h1>`–`<h6>`)
- [ ] ARIA labels on icon-only elements
- [ ] `aria-live` regions for dynamic content updates
- [ ] `aria-expanded` on expandable controls
- [ ] `aria-invalid` and `aria-describedby` on error fields
- [ ] Meaningful `alt` text on informational images

### Visual

- [ ] Color contrast meets WCAG AA (4.5:1 text, 3:1 UI elements)
- [ ] Meaning never conveyed by color alone
- [ ] Text resizable up to 200% without loss of content
- [ ] Focus indicators always visible during keyboard navigation
- [ ] Animations respect `prefers-reduced-motion`

### Touch (Mobile)

- [ ] All tap targets minimum 44×44px
- [ ] Adequate spacing between adjacent targets (8px minimum)
- [ ] Swipe gestures have alternative button controls
- [ ] Haptic feedback for significant interactions

---

## Naming Conventions

### CSS Classes (Tailwind)

Use semantic Tailwind classes that map to design tokens:

```html
<button class="bg-primary-500 text-white rounded-md px-4 py-2 font-semibold">
  Book Now
</button>
```

### Component Props

Follow consistent prop naming across all components:

```typescript
// Variants
variant: "primary" | "secondary" | "outline" | "ghost" | "destructive" | "link";
size: "sm" | "md" | "lg" | "xl";

// States
disabled: boolean;
loading: boolean;
error: string | undefined;

// Common
className: string; // Web only
style: ViewStyle; // Mobile only
testID: string; // Mobile testing
```

### File Structure

```
components/
├── ui/                    # Primitive components (Button, Input, Card)
│   ├── button.tsx
│   ├── input.tsx
│   └── ...
├── composed/              # Composed components (SearchField, StatCard)
│   ├── search-field.tsx
│   └── ...
└── patterns/              # Full patterns (EmptyState, ConfirmDialog)
    ├── empty-state.tsx
    └── ...
```

---

## Dark Mode

### Web (Next.js)

Use Tailwind's dark mode with class strategy:

```html
<!-- Dark mode classes -->
<div
  class="bg-neutral-0 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50"
>
  <button class="bg-primary-500 dark:bg-primary-500 text-white">
    Same button in both modes
  </button>
</div>
```

### Mobile (React Native)

Use `useColorScheme()` hook:

```typescript
import { useColorScheme } from "react-native";

const colorScheme = useColorScheme();
const isDark = colorScheme === "dark";

const backgroundColor = isDark ? colors.neutral[900] : colors.neutral[0];
const textColor = isDark ? colors.neutral[50] : colors.neutral[900];
```

---

## Animation Guidelines

### Web

Use CSS transitions for simple state changes, Framer Motion for complex animations:

```css
/* Simple transitions */
.vera-transition {
  transition-property: color, background-color, border-color, box-shadow;
  transition-duration: 150ms;
  transition-timing-function: ease-in-out;
}
```

### Mobile

Use React Native Reanimated for performant animations:

```typescript
import Animated, { withSpring, withTiming } from "react-native-reanimated";

// Button press
const scaleValue = withSpring(0.97, { damping: 15, stiffness: 150 });

// Toggle slide
const translateX = withTiming(isOn ? 20 : 0, { duration: 200 });
```

### Motion Preferences

Always check and respect reduced motion:

```css
/* Web */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

```typescript
// Mobile
import { AccessibilityInfo } from "react-native";
const [reduceMotion, setReduceMotion] = useState(false);
AccessibilityInfo.isReduceMotionEnabled().then(setReduceMotion);
```

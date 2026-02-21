# Layout & Grid

Vera's layout system creates consistent spatial rhythm across all platforms. Built on a 12-column responsive grid, it adapts gracefully from desktop dashboards to mobile treatment cards.

---

## Breakpoints

| Name | Token | Min Width | Target Device |
|------|-------|-----------|---------------|
| `xs` | `breakpoint-xs` | 0px | Small phones |
| `sm` | `breakpoint-sm` | 375px | iPhone SE, standard phones |
| `md` | `breakpoint-md` | 768px | iPad Mini, tablets (portrait) |
| `lg` | `breakpoint-lg` | 1024px | iPad Pro, tablets (landscape) |
| `xl` | `breakpoint-xl` | 1280px | Small laptops |
| `2xl` | `breakpoint-2xl` | 1440px | Desktop (design target) |
| `3xl` | `breakpoint-3xl` | 1920px | Large monitors |

### Design Targets

We design at three primary widths, then verify at all breakpoints:

| Target | Width | Columns | Primary Use |
|--------|-------|---------|-------------|
| **Mobile** | 375px | 4 | Phone app, mobile web |
| **Tablet** | 768px | 8 | Tablet app, narrow desktop |
| **Desktop** | 1440px | 12 | Full web experience |

---

## 12-Column Grid

### Desktop (1440px)

```
┌──────────────────────────────────────────────────────────────────┐
│ ← 80px margin →                              ← 80px margin →    │
│   ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐│
│   │  │ │  │ │  │ │  │ │  │ │  │ │  │ │  │ │  │ │  │ │  │ │  ││
│   │  │ │  │ │  │ │  │ │  │ │  │ │  │ │  │ │  │ │  │ │  │ │  ││
│   └──┘ └──┘ └──┘ └──┘ └──┘ └──┘ └──┘ └──┘ └──┘ └──┘ └──┘ └──┘│
│       24px gutters between columns                               │
└──────────────────────────────────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Viewport | 1440px |
| Columns | 12 |
| Column width | 82.67px (fluid) |
| Gutter | 24px |
| Margin (left/right) | 80px |
| Content width | 1280px |
| Max content width | 1280px |

### Tablet (768px)

```
┌──────────────────────────────────────┐
│ ← 32px →                ← 32px →    │
│   ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐│
│   │  │ │  │ │  │ │  │ │  │ │  │ │  │ │  ││
│   └──┘ └──┘ └──┘ └──┘ └──┘ └──┘ └──┘ └──┘│
│           20px gutters                     │
└──────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Viewport | 768px |
| Columns | 8 |
| Column width | 68px (fluid) |
| Gutter | 20px |
| Margin (left/right) | 32px |
| Content width | 704px |

### Mobile (375px)

```
┌──────────────────┐
│ ← 16px →← 16px →│
│  ┌──┐ ┌──┐ ┌──┐ ┌──┐│
│  │  │ │  │ │  │ │  ││
│  └──┘ └──┘ └──┘ └──┘│
│     16px gutters     │
└──────────────────┘
```

| Property | Value |
|----------|-------|
| Viewport | 375px |
| Columns | 4 |
| Column width | 74.5px (fluid) |
| Gutter | 16px |
| Margin (left/right) | 16px |
| Content width | 343px |

---

## Grid Summary Table

| Breakpoint | Columns | Gutter | Margin | Content Max |
|------------|---------|--------|--------|-------------|
| Mobile (375px) | 4 | 16px | 16px | 343px |
| Tablet (768px) | 8 | 20px | 32px | 704px |
| Desktop (1440px) | 12 | 24px | 80px | 1280px |
| Large (1920px) | 12 | 24px | auto (centered) | 1280px |

---

## Content Width Patterns

Common column-span patterns for consistent layouts:

### Desktop (12 columns)

| Pattern | Span | Width | Use Case |
|---------|------|-------|----------|
| Full width | 12 | 1280px | Hero sections, full-bleed images |
| Wide content | 10 | 1058px | Article body with sidebar offset |
| Standard content | 8 | 706px | Forms, article body, settings |
| Narrow content | 6 | 522px | Auth forms, modals, focused tasks |
| Sidebar | 3 | 298px | Navigation, filters |
| Card (third) | 4 | 406px | Card grids, feature blocks |

### Tablet (8 columns)

| Pattern | Span | Use Case |
|---------|------|----------|
| Full width | 8 | Page content |
| Standard | 6 | Forms, content |
| Half | 4 | Side-by-side cards |

### Mobile (4 columns)

| Pattern | Span | Use Case |
|---------|------|----------|
| Full width | 4 | Nearly all content |
| Half | 2 | Avatar + text, icon grids |

---

## Safe Areas

### iOS Notch & Dynamic Island

```
┌─────────────────────┐
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ ← Status bar: 54px (Dynamic Island) / 47px (notch)
│                     │
│                     │
│     Content Area    │
│                     │
│                     │
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ ← Home indicator: 34px
└─────────────────────┘
```

| Area | iPhone (notch) | iPhone (Dynamic Island) | iPhone SE |
|------|---------------|------------------------|-----------|
| Top safe area | 47px | 59px | 20px |
| Bottom safe area | 34px | 34px | 0px |
| Left safe area (landscape) | 44px | 44px | 0px |
| Right safe area (landscape) | 44px | 44px | 0px |

### Android

| Area | Value |
|------|-------|
| Status bar | 24dp (varies by device) |
| Navigation bar (gesture) | 16dp–48dp |
| Navigation bar (3-button) | 48dp |

### Implementation

```typescript
// React Native — always use SafeAreaView or useSafeAreaInsets
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const insets = useSafeAreaInsets();
// Note: SafeAreaView is not supported on Android — always use useSafeAreaInsets
```

```css
/* Web — use env() for notched browsers */
padding-top: env(safe-area-inset-top);
padding-bottom: env(safe-area-inset-bottom);
padding-left: env(safe-area-inset-left);
padding-right: env(safe-area-inset-right);
```

---

## Layout Patterns

### Page Shell — Desktop

```
┌──────────────────────────────────────────────┐
│  Header (64px height, full width)            │
├────────┬─────────────────────────────────────┤
│        │                                     │
│ Sidebar│         Main Content                │
│ (280px)│         (fluid)                     │
│        │                                     │
│        │                                     │
│        │                                     │
├────────┴─────────────────────────────────────┤
│  Footer (optional)                           │
└──────────────────────────────────────────────┘
```

### Page Shell — Mobile

```
┌──────────────────┐
│  Header (56px)   │
├──────────────────┤
│                  │
│  Main Content    │
│  (full width)    │
│                  │
│                  │
│                  │
├──────────────────┤
│  Tab Bar (83px)  │
│  (incl. safe)    │
└──────────────────┘
```

### Z-Index Scale

Consistent layering prevents z-index wars:

| Level | Value | Usage |
|-------|-------|-------|
| Base | `0` | Normal content flow |
| Raised | `10` | Cards, elevated elements |
| Dropdown | `100` | Dropdowns, popovers |
| Sticky | `200` | Sticky headers, floating buttons |
| Overlay | `300` | Backdrop overlays |
| Modal | `400` | Modals, dialogs |
| Toast | `500` | Toast notifications |
| Tooltip | `600` | Tooltips |
| Maximum | `9999` | System-critical overlays |

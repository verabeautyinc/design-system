# Navigation Components

Navigation components provide consistent wayfinding across all Vera platforms. They should feel invisible — users should always know where they are without thinking about navigation itself.

---

## Header / Navbar

The primary horizontal navigation bar at the top of every screen.

### Anatomy

```
┌─────────────────────────────────────────────────────────────────────┐
│  [Logo]    [Nav Item] [Nav Item] [Nav Item]    [Search] [Avatar ●] │
│  ↑          ↑                                   ↑        ↑         │
│  Brand      Primary nav links                   Actions  User menu │
└─────────────────────────────────────────────────────────────────────┘
```

| Part | Description |
|------|-------------|
| Brand/Logo | Vera wordmark or icon, links to home |
| Nav Items | Primary navigation links |
| Actions | Search, notifications, utility icons |
| User Menu | Avatar that opens profile dropdown |

### Variants

| Variant | Description | Use When |
|---------|-------------|----------|
| **Standard** | Solid background, full nav items | Default for all authenticated pages |
| **Transparent** | No background, overlays hero content | Landing page hero sections |
| **Compact** | Reduced height, fewer items | Scrolled state (sticky) |
| **Mobile** | Logo + hamburger menu | All screens < 768px |

### States

| State | Appearance |
|-------|-----------|
| Default | Neutral-0 background, shadow-xs |
| Scrolled/Sticky | Neutral-0 background, shadow-sm, compact height |
| Nav item — default | Neutral-700 text, no underline |
| Nav item — hover | Primary-500 text |
| Nav item — active (current page) | Primary-500 text, 2px bottom border |
| Nav item — focus | Focus ring |

### Specifications

| Property | Desktop | Mobile |
|----------|---------|--------|
| Height | 64px | 56px |
| Height (compact/scrolled) | 48px | 48px |
| Logo height | 28px | 24px |
| Nav item font | Body / SemiBold 600 | — |
| Nav item spacing | 32px gap | — |
| Horizontal padding | 80px (matches page margin) | 16px |
| Background | Neutral-0 | Neutral-0 |
| Border bottom | none (use shadow) | none |
| Shadow | shadow-xs | shadow-xs |
| Z-index | 200 (sticky) | 200 |

### Accessibility

- `<nav>` landmark with `aria-label="Main navigation"`
- Active page marked with `aria-current="page"`
- Mobile menu toggle: `aria-expanded`, `aria-controls`
- Skip-to-content link as first focusable element
- All nav items keyboard-accessible via Tab

### Usage Guidelines

**Do:**
- Keep primary nav items to 5 or fewer
- Use clear, concise labels (1-2 words)
- Highlight the current page/section

**Don't:**
- Put more than 2 action icons on the right
- Use dropdowns in the header on mobile
- Make the header taller than 64px on desktop

---

## Tab Bar (Bottom Navigation)

Mobile-only bottom navigation for primary app sections.

### Anatomy

```
┌────────────────────────────────────────────────────┐
│                                                    │
│   [Icon]      [Icon]      [Icon]      [Icon]      │
│   Label       Label       Label       Label        │
│                                                    │
│████████████████████████████████████████████████████│ ← Safe area
└────────────────────────────────────────────────────┘
```

| Part | Description |
|------|-------------|
| Icon | 24×24px SF Symbol or custom icon |
| Label | Tab name, Caption 2 (11px) |
| Badge | Optional notification dot or count |
| Safe area | Bottom safe area padding (34px on notched iPhones) |

### States

| State | Icon | Label | Background |
|-------|------|-------|-----------|
| Default | Neutral-400 | Neutral-400 | Transparent |
| Selected | Primary-500 | Primary-500 | Transparent |
| Pressed | Primary-600 | Primary-600 | Primary-50 |
| Badge | Red dot (8px) or count badge | — | — |

### Specifications

| Property | Value |
|----------|-------|
| Total height | 49px + safe area (34px) = 83px |
| Tab width | Equal distribution (25% each for 4 tabs) |
| Icon size | 24×24px |
| Label font | Caption 2 / Medium 500 (11px) |
| Icon-to-label gap | 4px |
| Touch target | Full tab width × 49px (minimum 44px height) |
| Background | Neutral-0 with shadow-sm (top border) |
| Border top | 1px Neutral-200 |
| Max tabs | 5 |

### Accessibility

- `role="tablist"` on container
- `role="tab"` on each item
- `aria-selected="true"` on active tab
- `aria-label` on each tab (full name if label is abbreviated)
- Badge content announced: `aria-label="Messages, 3 unread"`
- Tab key navigates between tabs, Space/Enter activates

### Usage Guidelines

**Do:**
- Limit to 4–5 tabs
- Use recognizable icons with labels
- Keep labels to one word when possible

**Don't:**
- Use a tab bar on tablet or desktop (use Sidebar instead)
- Hide the tab bar during scroll
- Put actions (like "compose") in the tab bar — use a FAB instead

---

## Sidebar

Vertical navigation panel for desktop and tablet layouts (Reception dashboard, admin views).

### Anatomy

```
┌──────────────────────┐
│  [Logo]              │
│                      │
│  ● Nav Group Label   │
│    [icon] Nav Item   │
│    [icon] Nav Item   │←── active indicator
│    [icon] Nav Item   │
│                      │
│  ● Nav Group Label   │
│    [icon] Nav Item   │
│    [icon] Nav Item   │
│                      │
│                      │
│                      │
│  ──────────────────  │
│  [avatar] User Name  │
│           Settings ▸ │
└──────────────────────┘
```

| Part | Description |
|------|-------------|
| Logo | Brand mark at top |
| Nav Group | Optional section label (Footnote, uppercase) |
| Nav Item | Icon + text label, full-width hit area |
| Active Indicator | Left border accent (3px Primary-500) |
| User Section | Bottom-anchored user info and settings |
| Collapse Toggle | Minimize to icon-only mode |

### Variants

| Variant | Width | Content | Use When |
|---------|-------|---------|----------|
| **Expanded** | 280px | Icon + label | Default desktop state |
| **Collapsed** | 64px | Icon only (with tooltip) | User preference or narrow viewport |
| **Overlay** | 280px | Full, overlays content | Tablet (opens on demand) |

### States

| State | Appearance |
|-------|-----------|
| Nav item — default | Neutral-600 icon, Neutral-700 text |
| Nav item — hover | Neutral-100 background, Neutral-900 text |
| Nav item — active | Primary-50 background, Primary-500 icon, Primary-700 text, 3px left border Primary-500 |
| Nav item — focus | Focus ring |
| Group label | Neutral-400 text, Footnote uppercase |

### Specifications

| Property | Expanded | Collapsed |
|----------|----------|-----------|
| Width | 280px | 64px |
| Logo area height | 64px (matches header) | 64px |
| Nav item height | 40px | 40px |
| Nav item padding | 12px left, 12px right | centered |
| Icon size | 20×20px | 20×20px |
| Icon-to-text gap | 12px | — |
| Font | Callout / Regular 400 | — |
| Active font | Callout / Medium 500 | — |
| Group label font | Footnote / Medium 500, uppercase | — |
| Group gap | 24px | 24px |
| Background | Neutral-50 | Neutral-50 |
| Border right | 1px Neutral-200 | 1px Neutral-200 |

### Accessibility

- `<nav>` landmark with `aria-label="Sidebar navigation"`
- `aria-current="page"` on active item
- Collapsed mode: tooltips on hover/focus with item labels
- Collapse toggle: `aria-label="Collapse sidebar"` / `aria-label="Expand sidebar"`
- Group labels: `role="group"` with `aria-labelledby`

---

## Breadcrumbs

Hierarchical path indicator showing the user's current location within the site structure.

### Anatomy

```
Home  /  Treatments  /  Botox  /  Provider Name
 ↑         ↑            ↑           ↑
link      link         link     current (plain text)
```

| Part | Description |
|------|-------------|
| Link | Clickable ancestor page |
| Separator | `/` character (Neutral-300) |
| Current | Non-linked current page label |

### States

| State | Appearance |
|-------|-----------|
| Link — default | Neutral-500, underline on hover |
| Link — hover | Primary-500, underlined |
| Link — focus | Focus ring |
| Current page | Neutral-900, no underline, not clickable |
| Separator | Neutral-300, non-interactive |

### Specifications

| Property | Value |
|----------|-------|
| Font | Footnote / Regular 400 (13px) |
| Separator padding | 8px left, 8px right |
| Link color | Neutral-500 |
| Current color | Neutral-900 |
| Container padding | 0 (inherits page margins) |
| Vertical position | 16px below header, 16px above page title |

### Accessibility

- `<nav>` with `aria-label="Breadcrumb"`
- `<ol>` for ordered list semantics
- Current page: `aria-current="page"`
- Separators are decorative (`aria-hidden="true"`)

### Usage Guidelines

**Do:**
- Show on pages 2+ levels deep
- Truncate with ellipsis if more than 4 levels
- Match labels to actual page titles

**Don't:**
- Show breadcrumbs on the homepage
- Use breadcrumbs on mobile (use a back button instead)
- Include the current page as a link

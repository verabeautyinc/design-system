# Data Display Components

Data display components present information clearly and consistently. They should make complex data feel approachable — never overwhelming.

---

## Card

The fundamental content container. Cards group related information into scannable, interactive units.

### Anatomy

```
┌──────────────────────────────────────┐
│  ┌──────────────────────────────┐    │
│  │       Image / Media          │    │ ← Media area (optional)
│  └──────────────────────────────┘    │
│                                      │
│  Overline text                       │ ← Overline (optional)
│  Card Title                          │ ← Title
│  Body text with description that     │ ← Description (optional)
│  can span multiple lines.            │
│                                      │
│  [Tag]  [Tag]                        │ ← Tags (optional)
│                                      │
│  ─────────────────────────────────   │ ← Divider (optional)
│  [Action]              [Action]      │ ← Actions (optional)
└──────────────────────────────────────┘
```

| Part | Description |
|------|-------------|
| Container | Outer wrapper with background, radius, shadow |
| Media area | Image, video, or gradient — top or left position |
| Overline | Category or type label (Caption 1, uppercase) |
| Title | Primary content title (Title 3 / SemiBold) |
| Description | Supporting text (Callout / Regular) |
| Tags | Categorization badges |
| Divider | Optional separator before actions |
| Actions | Buttons or links at the bottom |

### Variants

| Variant | Description | Use Case |
|---------|-------------|----------|
| **Standard** | Elevated with shadow | Default container |
| **Outlined** | 1px border, no shadow | Dense lists, dashboard widgets |
| **Flat** | No border or shadow | On colored backgrounds |
| **Interactive** | Entire card is clickable | Treatment listings, provider cards |
| **Compact** | Reduced padding, horizontal layout | Search results, compact lists |

### States (Interactive Variant)

| State | Appearance |
|-------|-----------|
| Default | shadow-sm |
| Hover | shadow-md, translate Y -1px |
| Active | shadow-xs, translate Y 0px |
| Focus | focus ring (2px Primary-500) |
| Disabled | opacity 0.5, no interactions |
| Loading | Skeleton overlay |

### Specifications

| Property | Mobile | Desktop |
|----------|--------|---------|
| Padding | 16px | 24px |
| Border radius | 12px | 12px |
| Shadow (standard) | shadow-sm | shadow-sm |
| Background | Neutral-0 | Neutral-0 |
| Overline font | Caption 1, Medium 500, uppercase, Neutral-500 | Same |
| Title font | Title 3 / SemiBold 600 | Title 3 / SemiBold 600 |
| Description font | Callout / Regular 400, Neutral-600 | Same |
| Content gap | 8px between elements | 8px |
| Image aspect ratio | 16:9 or 4:3 | 16:9 or 4:3 |
| Image border radius | 8px (if inset) or flush with card top | Same |
| Max cards per row | 1 (mobile), 2 (tablet), 3 (desktop) | — |
| Card gap | 16px | 24px |

### Accessibility

- Interactive cards: use `<a>` or `<button>` as the wrapper (never `<div onclick>`)
- `aria-label` or `aria-labelledby` pointing to the title
- Ensure all content inside is reachable via keyboard
- If card has multiple links, use a single primary link with card-level click area

---

## Table

Structured data display in rows and columns.

### Anatomy

```
┌──────────────────────────────────────────────────────────────┐
│  Column A ▼        Column B          Column C      Column D  │ ← Header
├──────────────────────────────────────────────────────────────┤
│  Cell A1           Cell B1           Cell C1       Cell D1   │ ← Row
│  Cell A2           Cell B2           Cell C2       Cell D2   │
│  Cell A3           Cell B3           Cell C3       Cell D3   │
├──────────────────────────────────────────────────────────────┤
│  ← 1 2 3 ... 10 →                           Showing 1–10   │ ← Footer
└──────────────────────────────────────────────────────────────┘
```

| Part | Description |
|------|-------------|
| Header | Column labels, optional sort indicators |
| Row | Data row, alternating backgrounds optional |
| Cell | Individual data point |
| Footer | Pagination, row count |

### Specifications

| Property | Value |
|----------|-------|
| Header font | Subheadline / Medium 500, Neutral-500 |
| Cell font | Callout / Regular 400, Neutral-700 |
| Row height | 48px (compact), 56px (standard), 64px (comfortable) |
| Cell padding | 12px horizontal, 8px vertical |
| Header background | Neutral-50 |
| Row background | Neutral-0 (even), Neutral-50 (odd) — optional striping |
| Row border-bottom | 1px Neutral-200 |
| Hover row | Neutral-100 background |
| Selected row | Primary-50 background, 2px Primary-500 left border |
| Sort indicator | ▲/▼ icon, 12px, Neutral-400 (inactive), Primary-500 (active) |
| Border radius | 8px (outer container) |
| Shadow | shadow-xs |
| Responsive | Horizontal scroll on mobile, or collapse to card layout |

### States

| State | Appearance |
|-------|-----------|
| Default | Striped or uniform rows |
| Row hover | Neutral-100 background |
| Row selected | Primary-50 background with left accent |
| Sorting | Active column header in Primary-500 |
| Loading | Skeleton rows |
| Empty | Empty state illustration + message |

### Accessibility

- Use `<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>` semantics
- `scope="col"` on header cells
- Sortable columns: `aria-sort="ascending"` / `"descending"` / `"none"`
- Selectable rows: `role="checkbox"` or `aria-selected`
- Caption via `<caption>` or `aria-label` on `<table>`
- Keyboard: Tab to navigate, Enter to sort/select

---

## List

Vertical arrangement of related items.

### Variants

| Variant | Description | Use Case |
|---------|-------------|----------|
| **Simple** | Text only | Settings menus |
| **Icon** | Icon + text | Navigation lists |
| **Two-line** | Title + subtitle | Treatment lists |
| **Three-line** | Title + subtitle + description | Review lists |
| **Avatar** | Avatar + text | Provider/user lists |

### Anatomy (Two-line)

```
┌──────────────────────────────────────────────────┐
│  [Avatar]  Title text                    [Meta]  │
│            Subtitle text                         │
├──────────────────────────────────────────────────┤
│  [Avatar]  Title text                    [Meta]  │
│            Subtitle text                         │
└──────────────────────────────────────────────────┘
```

### Specifications

| Property | Value |
|----------|-------|
| Item height | 44px (single-line), 56px (two-line), 72px (three-line) |
| Padding | 16px horizontal |
| Avatar size | 40px (two-line), 48px (three-line) |
| Avatar-to-text gap | 12px |
| Title font | Callout / Medium 500 |
| Subtitle font | Footnote / Regular 400, Neutral-500 |
| Meta font | Footnote / Regular 400, Neutral-400 |
| Divider | 1px Neutral-200, inset from left by avatar width + gap |
| Hover | Neutral-50 background |
| Active | Neutral-100 background |
| Selected | Primary-50 background, Primary-500 left border (3px) |

### Accessibility

- Use `<ul>` / `<ol>` with `<li>` elements
- Interactive lists: use `role="listbox"` with `role="option"`
- `aria-selected` for selected items
- Keyboard: Arrow keys to navigate, Enter to select

---

## Stat / Metric

Prominent display of a single key value with context.

### Anatomy

```
┌──────────────────────┐
│  Label               │
│  1,247               │ ← Large number
│  +12.3% ▲            │ ← Trend (optional)
└──────────────────────┘
```

### Specifications

| Property | Value |
|----------|-------|
| Label font | Footnote / Medium 500, Neutral-500, uppercase |
| Value font | Display / Light 300 (mobile: 34px, desktop: 48px) |
| Value color | Neutral-900 |
| Trend font | Subheadline / Medium 500 |
| Trend (positive) | Success-700, ▲ icon |
| Trend (negative) | Error-700, ▼ icon |
| Trend (neutral) | Neutral-500, — icon |
| Padding | 16px (mobile), 24px (desktop) |
| Background | Neutral-0 |
| Border radius | 12px |

---

## Badge / Tag

Small label for categorization, status, or count.

### Variants

| Variant | Example | Use Case |
|---------|---------|----------|
| **Status** | ● Active | Provider status, booking state |
| **Category** | Botox | Treatment categories |
| **Count** | 12 | Notification counts |
| **Removable** | Botox ✕ | Applied filters |

### Specifications

| Property | Value |
|----------|-------|
| Height | 22px (small), 26px (medium) |
| Padding | 4px 8px (small), 6px 10px (medium) |
| Border radius | radius-full (pill) |
| Font | Caption 1 / Medium 500 (small), Footnote / Medium 500 (medium) |
| Gap (icon/remove) | 4px |
| Remove button | 12px ✕ icon |

### Color Variants

| Intent | Background | Text |
|--------|-----------|------|
| Default | Neutral-100 | Neutral-700 |
| Primary | Primary-100 | Primary-700 |
| Success | Success-100 | Success-700 |
| Warning | Warning-100 | Warning-700 |
| Error | Error-100 | Error-700 |

### Accessibility

- Removable tags: `aria-label="Remove [tag name]"` on close button
- Status badges: include text, not just color dot
- Count badges: `aria-label="[N] notifications"` on parent

---

## Accordion

Collapsible content sections for progressive disclosure.

### Anatomy

```
┌──────────────────────────────────────────────────┐
│  Accordion Item Title                        [▾] │
├──────────────────────────────────────────────────┤
│  Expanded content area with details,             │
│  descriptions, or nested components.             │
└──────────────────────────────────────────────────┘
│  Collapsed Item Title                        [▸] │
├──────────────────────────────────────────────────┤
│  Collapsed Item Title                        [▸] │
└──────────────────────────────────────────────────┘
```

### Specifications

| Property | Value |
|----------|-------|
| Header height | 48px minimum |
| Header padding | 16px |
| Header font | Callout / SemiBold 600 |
| Chevron | 16px, Neutral-400, rotates 90° on expand |
| Content padding | 16px (0 top — flush with header) |
| Border | 1px Neutral-200 between items |
| Animation | Height: 300ms ease-in-out, chevron: 200ms |
| Allow multiple open | Configurable (default: yes) |

### Accessibility

- `<button>` for header with `aria-expanded`
- `aria-controls` linking to content panel `id`
- Content panel: `role="region"` with `aria-labelledby`
- Enter/Space toggles expansion

---

## Tooltip

Small contextual popup providing additional information on hover/focus.

### Specifications

| Property | Value |
|----------|-------|
| Background | Neutral-800 |
| Text color | White |
| Font | Caption 1 / Regular 400 |
| Padding | 6px 10px |
| Border radius | 6px |
| Max width | 240px |
| Shadow | shadow-md |
| Arrow | 6px triangle pointing to trigger |
| Delay (show) | 400ms |
| Delay (hide) | 200ms |
| Animation | Fade in 150ms |
| Position | Auto (prefer top, fallback to bottom/left/right) |

### Accessibility

- Trigger: `aria-describedby` pointing to tooltip `id`
- Tooltip: `role="tooltip"`
- Show on focus (not just hover) for keyboard users
- Escape to dismiss
- Never put interactive elements inside tooltips

---

## Divider

Visual separator between content sections.

### Variants

| Variant | Use |
|---------|-----|
| **Full-width** | Between page sections |
| **Inset** | Between list items (indented past avatar/icon) |
| **Middle** | Centered, shorter than container |

### Specifications

| Property | Value |
|----------|-------|
| Thickness | 1px |
| Color | Neutral-200 |
| Inset (left) | 68px (avatar + gap) or 48px (icon + gap) |
| Middle margin | 24px from each side |
| Vertical spacing | 0 (set by parent container) |

### Accessibility

- `role="separator"` or `<hr>` element
- `aria-orientation="horizontal"` (default) or `"vertical"`
- Decorative dividers: `aria-hidden="true"`

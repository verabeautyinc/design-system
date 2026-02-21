# Spacing System

Vera uses an 8px base unit to create consistent, harmonious spacing throughout the interface. Every margin, padding, and gap should use a value from this scale.

---

## Spacing Scale

| Token | Value | Rem | Visual | Usage |
|-------|-------|-----|--------|-------|
| `space-0` | 0px | 0 | | No spacing |
| `space-0.5` | 2px | 0.125 | `▪` | Hairline adjustments (icon alignment, border offsets) |
| `space-1` | 4px | 0.25 | `▪▪` | Tight spacing (inline icon gaps, tag padding) |
| `space-1.5` | 6px | 0.375 | `▪▪▪` | Compact elements (badge padding, small gaps) |
| `space-2` | 8px | 0.5 | `▪▪▪▪` | **Base unit** — element internal padding, icon margins |
| `space-3` | 12px | 0.75 | `▪▪▪▪▪▪` | Tight grouping (form field gaps, list item padding) |
| `space-4` | 16px | 1.0 | `▪▪▪▪▪▪▪▪` | Standard padding (cards, inputs, buttons) |
| `space-5` | 20px | 1.25 | `▪▪▪▪▪▪▪▪▪▪` | Comfortable padding (larger cards, section inner) |
| `space-6` | 24px | 1.5 | `▪▪▪▪▪▪▪▪▪▪▪▪` | Grid gutters (desktop), group separation |
| `space-8` | 32px | 2.0 | `▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪` | Section padding, major element separation |
| `space-10` | 40px | 2.5 | `▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪` | Large section gaps |
| `space-12` | 48px | 3.0 | ` ` | Major section breaks, modal padding |
| `space-16` | 64px | 4.0 | ` ` | Page-level section separation |
| `space-20` | 80px | 5.0 | ` ` | Page margins (desktop) |
| `space-24` | 96px | 6.0 | ` ` | Hero section spacing |
| `space-32` | 128px | 8.0 | ` ` | Maximum vertical breathing room |

---

## Usage Guidelines

### space-0.5 (2px) — Micro Adjustments
- Optical alignment corrections
- Border offset from text
- Sub-pixel precision (use sparingly)

### space-1 (4px) — Tight Spacing
- Gap between inline icon and text
- Horizontal padding inside tags/badges
- Spacing between radio/checkbox and label

```
┌─────────────┐
│ ✓ [4px] Label│
└─────────────┘
```

### space-1.5 (6px) — Compact Elements
- Vertical padding inside small badges
- Gap between stacked inline elements
- Small chip padding

### space-2 (8px) — Base Unit
- Minimum padding inside interactive elements
- Gap between tightly related items
- Icon container padding
- Vertical gap between form label and input

```
Label
[8px]
┌──────────────────────┐
│  Input field          │
└──────────────────────┘
```

### space-3 (12px) — Tight Grouping
- Horizontal padding inside inputs and buttons
- Gap between list items in a compact list
- Spacing between avatar and username

```
┌──────────────────────────┐
│ [12px] Button text [12px]│
└──────────────────────────┘
```

### space-4 (16px) — Standard Padding
- Card inner padding (mobile)
- Page margin (mobile)
- Grid gutter (mobile)
- Gap between form fields
- Standard list item vertical padding

```
┌──────────────────────────┐
│                          │
│ [16px]              [16px]│
│    Card content          │
│ [16px]              [16px]│
│                          │
└──────────────────────────┘
```

### space-5 (20px) — Comfortable Padding
- Card inner padding (tablet)
- Grid gutter (tablet)
- Gap between sibling cards

### space-6 (24px) — Group Separation
- Grid gutter (desktop)
- Card inner padding (desktop)
- Separation between content groups
- Gap between heading and first paragraph

```
Section Title
[24px]
First paragraph of content that belongs
to this section...
```

### space-8 (32px) — Section Padding
- Vertical padding within major sections
- Gap between a section heading and its subgroups
- Tablet page margins

```
════════════════════════════
[32px]
  Section content here
[32px]
════════════════════════════
```

### space-12 (48px) — Major Section Breaks
- Vertical spacing between page-level sections
- Modal body padding (desktop)
- Separation between unrelated content groups

### space-16 (64px) — Page-Level Separation
- Spacing between major page zones (hero → features → testimonials)
- Top padding below fixed header
- Footer separation from content

### space-20 (80px) — Page Margins
- Desktop page left/right margins
- Large vertical breathing room in marketing pages

### space-24 (96px) — Hero Spacing
- Vertical padding in hero sections
- Landing page section breaks

### space-32 (128px) — Maximum Breathing Room
- Used only in marketing/editorial contexts
- Hero section vertical padding on large screens
- Maximum vertical separation

---

## Spatial Concepts

### 1. Internal Padding
Space inside a container, between its edge and its content.

```
┌────────────────────────────┐
│ ┈┈┈┈ padding ┈┈┈┈         │
│ ┈                      ┈   │
│ ┈    Content area      ┈   │
│ ┈                      ┈   │
│ ┈┈┈┈ padding ┈┈┈┈         │
└────────────────────────────┘
```

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Button | 12px h, 8px v | 12px h, 8px v | 16px h, 10px v |
| Card | 16px | 20px | 24px |
| Input field | 12px h, 10px v | 12px h, 10px v | 16px h, 12px v |
| Modal | 16px | 24px | 32px |
| Page | 16px | 32px | 80px |

### 2. Gap (Between Siblings)
Space between related elements at the same level.

```
┌──────┐  [gap]  ┌──────┐  [gap]  ┌──────┐
│ Card │         │ Card │         │ Card │
└──────┘         └──────┘         └──────┘
```

| Context | Gap |
|---------|-----|
| Icon + text (inline) | 4px–8px |
| Form fields (vertical) | 16px |
| Card grid | 16px (mobile), 20px (tablet), 24px (desktop) |
| List items | 8px–12px |
| Section heading + content | 24px |
| Button group (horizontal) | 8px–12px |

### 3. Separation (Between Groups)
Space between unrelated or loosely related content groups.

```
╔══════════════════════╗
║   Section A          ║
╚══════════════════════╝
        [separation]
╔══════════════════════╗
║   Section B          ║
╚══════════════════════╝
```

| Context | Separation |
|---------|-----------|
| Related sections | 32px–48px |
| Unrelated sections | 48px–64px |
| Page-level zones | 64px–96px |
| Marketing sections | 96px–128px |

---

## Touch Targets

Minimum interactive element sizes for reliable touch input:

| Platform | Minimum Size | Recommended |
|----------|-------------|-------------|
| iOS | 44×44pt | 48×48pt |
| Android | 48×48dp | 48×48dp |
| Web | 44×44px | 48×48px |

Even if a button is visually smaller, its **tap target** must meet these minimums. Use invisible padding to extend the hit area.

```
         Visual element
              ┌──┐
      ┌───────│••│───────┐
      │       └──┘       │
      │   44×44 min tap  │
      │   target area    │
      └──────────────────┘
```

---

## Consistent Spacing Checklist

When designing or reviewing a screen:

- [ ] All spacing values are from the scale (no arbitrary values)
- [ ] Related elements are closer together than unrelated elements (proximity principle)
- [ ] Page margins match the breakpoint specification
- [ ] Card padding is consistent across all cards on the same screen
- [ ] Touch targets meet platform minimums
- [ ] Spacing increases proportionally at larger breakpoints
- [ ] Vertical rhythm is maintained (consistent baseline alignment)

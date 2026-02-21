# Components Overview

Vera's component library is built for consistency, accessibility, and developer efficiency. Every component follows the same structural principles.

---

## Component Inventory

| Category | Components | Count |
|----------|-----------|-------|
| [Navigation](./navigation.md) | Header, Tab Bar, Sidebar, Breadcrumbs | 4 |
| [Inputs](./inputs.md) | Button, Text Field, Textarea, Search Field, Select/Dropdown, Toggle, Checkbox, Radio Button, Slider, Date Picker | 10 |
| [Feedback](./feedback.md) | Alert, Toast, Modal/Dialog, Progress Indicator, Skeleton Screen | 5 |
| [Data Display](./data-display.md) | Card, Table, List, Stat/Metric, Badge/Tag, Accordion, Tooltip, Divider | 8 |
| [Media](./media.md) | Avatar, Image Container, Video Player, Gallery/Carousel | 4 |
| **Total** | | **31** |

---

## Component Design Principles

### 1. Single Responsibility
Each component does one thing well. A Button triggers actions. A Card contains content. If a component needs to do two things, it should be composed from two components.

### 2. Composable by Default
Components are building blocks, not page templates. A Card doesn't know if it holds a treatment or a review — it provides structure, and content fills it.

### 3. State-Complete
Every interactive component must define all possible states:

| State | Description | Required For |
|-------|-------------|-------------|
| Default | Resting state, no interaction | All components |
| Hover | Mouse pointer over element | All interactive (web) |
| Active/Pressed | Currently being clicked/tapped | All interactive |
| Focus | Keyboard focus visible | All interactive |
| Disabled | Cannot be interacted with | All interactive |
| Loading | Awaiting data or action completion | Buttons, inputs, cards |
| Error | Validation or system error | Inputs, forms |
| Empty | No data available | Lists, tables, cards |

### 4. Accessible by Default
- All interactive elements are keyboard-navigable
- All components include appropriate ARIA attributes
- Color is never the sole indicator of state
- Focus rings are always visible during keyboard navigation
- Minimum touch targets: 44×44px

---

## Shared Specifications

### Border Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| `radius-none` | 0px | Sharp edges (tables, dividers) |
| `radius-sm` | 4px | Tags, badges, small chips |
| `radius-md` | 8px | Buttons, inputs, small cards |
| `radius-lg` | 12px | Cards, modals, dropdowns |
| `radius-xl` | 16px | Large cards, bottom sheets |
| `radius-2xl` | 24px | Pills, floating actions |
| `radius-full` | 9999px | Circles (avatars, toggles) |

### Shadow Scale

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-none` | `none` | Flat elements |
| `shadow-xs` | `0 1px 2px rgba(28,25,23,0.05)` | Subtle lift (inputs, tags) |
| `shadow-sm` | `0 1px 3px rgba(28,25,23,0.08), 0 1px 2px rgba(28,25,23,0.04)` | Cards, dropdowns |
| `shadow-md` | `0 4px 6px rgba(28,25,23,0.07), 0 2px 4px rgba(28,25,23,0.04)` | Elevated cards, popovers |
| `shadow-lg` | `0 10px 15px rgba(28,25,23,0.08), 0 4px 6px rgba(28,25,23,0.04)` | Modals, floating elements |
| `shadow-xl` | `0 20px 25px rgba(28,25,23,0.10), 0 8px 10px rgba(28,25,23,0.05)` | Large overlays |

> Shadows use warm neutral rgba values (not pure black) to maintain Vera's warm aesthetic.

### Focus Ring

All interactive elements share a consistent focus ring:

```css
/* Standard focus ring */
outline: 2px solid #D85959;
outline-offset: 2px;

/* High-contrast mode */
outline: 2px solid currentColor;
outline-offset: 2px;
```

- Focus ring appears **only** during keyboard navigation (`:focus-visible`)
- Never suppress focus indicators
- Focus ring color: Primary 500 (`#D85959`) in light mode, Primary 400 (`#F07878`) in dark mode

### Transition Defaults

| Property | Duration | Easing |
|----------|----------|--------|
| Color, background, border | 150ms | `ease-in-out` |
| Transform (scale, translate) | 200ms | `ease-out` |
| Opacity | 200ms | `ease-in-out` |
| Shadow | 200ms | `ease-in-out` |
| Width, height | 300ms | `ease-in-out` |

### Interaction Feedback

| Action | Feedback |
|--------|----------|
| Button press | Scale to 0.97, darken background |
| Toggle | Slide with 200ms spring animation |
| Card tap (mobile) | Subtle opacity change (0.7) |
| Link hover | Underline appears, color darkens |
| Delete/destructive | Confirm dialog before execution |

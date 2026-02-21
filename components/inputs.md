# Input Components

Input components capture user data and trigger actions. Every input must be accessible, responsive, and provide clear feedback on interaction and validation state.

---

## Button

The primary interactive element for triggering actions.

### Anatomy

```
┌──────────────────────────────────┐
│  [Icon]  Label Text  [Icon]     │
│   ↑                    ↑        │
│  Leading icon      Trailing icon │
│  (optional)        (optional)    │
└──────────────────────────────────┘
```

| Part | Description |
|------|-------------|
| Label | Action text (required) |
| Leading icon | Optional icon before label (16×16px) |
| Trailing icon | Optional icon after label (16×16px) |
| Container | Background fill with border-radius |

### Variants

#### 1. Primary
Solid coral background. For the single most important action on a screen.

| State | Background | Text | Border |
|-------|-----------|------|--------|
| Default | Primary-500 `#D85959` | White | none |
| Hover | Primary-400 `#F07878` | White | none |
| Active | Primary-600 `#C44242` | White | none |
| Disabled | Neutral-200 | Neutral-400 | none |
| Loading | Primary-500 (with spinner) | Hidden (spinner) | none |

#### 2. Secondary
Neutral background. For secondary actions alongside a Primary button.

| State | Background | Text | Border |
|-------|-----------|------|--------|
| Default | Neutral-100 | Neutral-800 | none |
| Hover | Neutral-200 | Neutral-900 | none |
| Active | Neutral-300 | Neutral-900 | none |
| Disabled | Neutral-100 | Neutral-400 | none |
| Loading | Neutral-100 (with spinner) | Hidden | none |

#### 3. Outline
Transparent with border. For tertiary actions or when you need a lighter visual weight.

| State | Background | Text | Border |
|-------|-----------|------|--------|
| Default | Transparent | Neutral-700 | 1px Neutral-300 |
| Hover | Neutral-50 | Neutral-900 | 1px Neutral-400 |
| Active | Neutral-100 | Neutral-900 | 1px Neutral-500 |
| Disabled | Transparent | Neutral-400 | 1px Neutral-200 |

#### 4. Ghost
No background or border. For inline actions, toolbars, and dense interfaces.

| State | Background | Text | Border |
|-------|-----------|------|--------|
| Default | Transparent | Neutral-600 | none |
| Hover | Neutral-100 | Neutral-900 | none |
| Active | Neutral-200 | Neutral-900 | none |
| Disabled | Transparent | Neutral-400 | none |

#### 5. Destructive
Red background for delete, cancel, or irreversible actions. Always requires confirmation.

| State | Background | Text | Border |
|-------|-----------|------|--------|
| Default | Error-700 `#B91C1C` | White | none |
| Hover | Error-600 `#DC2626` | White | none |
| Active | Error-800 `#991B1B` | White | none |
| Disabled | Neutral-200 | Neutral-400 | none |

#### 6. Link
Styled as text link. For navigation or low-emphasis actions within content.

| State | Background | Text | Border |
|-------|-----------|------|--------|
| Default | Transparent | Primary-500 | none (underline) |
| Hover | Transparent | Primary-600 | none (underline) |
| Active | Transparent | Primary-700 | none (underline) |
| Disabled | Transparent | Neutral-400 | none |

### Sizes

| Size | Height | Padding (h) | Font | Icon Size | Border Radius |
|------|--------|-------------|------|-----------|---------------|
| Small | 32px | 12px | Footnote / Medium 500 | 14px | radius-md (8px) |
| Medium | 40px | 16px | Callout / SemiBold 600 | 16px | radius-md (8px) |
| Large | 48px | 20px | Body / SemiBold 600 | 18px | radius-md (8px) |
| XLarge | 56px | 24px | Body / SemiBold 600 | 20px | radius-lg (12px) |

### Specifications

| Property | Value |
|----------|-------|
| Min width | 64px |
| Icon-to-text gap | 8px |
| Border radius | 8px (sm/md/lg), 12px (xl) |
| Transition | background 150ms ease, transform 200ms ease |
| Press feedback (mobile) | scale(0.97) |
| Loading spinner | 16px (sm), 18px (md), 20px (lg/xl) |
| Full-width variant | width: 100% (for mobile forms) |

### Accessibility

- Semantic `<button>` element (never `<div>` or `<a>` for actions)
- `aria-label` when icon-only (no visible text)
- `aria-disabled="true"` for disabled state (not `disabled` attribute, to keep focusable)
- `aria-busy="true"` during loading
- Loading state: screen reader announces "Loading" via `aria-live`
- Keyboard: Enter or Space to activate
- Focus ring: 2px Primary-500, 2px offset

### Usage Guidelines

**Do:**
- Use one Primary button per screen/section
- Use verbs: "Book Now," "Save Changes," "Sign In"
- Provide loading feedback for async actions

**Don't:**
- Use more than 3 button variants in one view
- Put two Primary buttons side by side
- Use Ghost buttons for critical actions
- Disable buttons without explaining why (use tooltip)

---

## Text Field

Single-line text input for names, emails, search queries, etc.

### Anatomy

```
Label (optional)
┌─────────────────────────────────────────┐
│ [Icon]  Placeholder / Value    [Clear]  │
└─────────────────────────────────────────┘
Helper text or error message (optional)
```

| Part | Description |
|------|-------------|
| Label | Descriptive label above input (recommended) |
| Leading icon | Optional context icon (search, email) |
| Input area | Text entry region |
| Clear button | Optional "×" to clear value |
| Helper text | Guidance text below input |
| Error message | Validation feedback (replaces helper) |

### States

| State | Border | Background | Label | Helper |
|-------|--------|-----------|-------|--------|
| Default | 1px Neutral-300 | Neutral-0 | Neutral-700 | Neutral-500 |
| Hover | 1px Neutral-400 | Neutral-0 | Neutral-700 | Neutral-500 |
| Focus | 2px Primary-500 | Neutral-0 | Primary-500 | Neutral-500 |
| Filled | 1px Neutral-300 | Neutral-0 | Neutral-700 | Neutral-500 |
| Error | 2px Error-700 | Error-50 | Error-700 | Error-700 |
| Disabled | 1px Neutral-200 | Neutral-100 | Neutral-400 | Neutral-400 |
| Read-only | none | Neutral-50 | Neutral-700 | — |

### Specifications

| Property | Value |
|----------|-------|
| Height | 44px (mobile), 40px (desktop) |
| Padding | 12px horizontal, 10px vertical |
| Border radius | 8px |
| Font | Body / Regular 400 |
| Placeholder color | Neutral-400 |
| Label spacing | 8px below label, above input |
| Helper spacing | 4px below input |
| Leading icon | 20px, Neutral-400, 12px right margin |
| Max width | 100% of parent (respect grid) |

### Accessibility

- `<label>` element associated via `htmlFor`/`id`
- `aria-describedby` pointing to helper/error text
- `aria-invalid="true"` on error
- `aria-required="true"` for required fields
- Error messages announced by screen reader via `aria-live="polite"`
- Clear button: `aria-label="Clear input"`

---

## Textarea

Multi-line text input for descriptions, reviews, notes.

### Specifications

| Property | Value |
|----------|-------|
| Min height | 88px (3 lines) |
| Max height | 240px (auto-grow), then scroll |
| Padding | 12px |
| Border radius | 8px |
| Resize | Vertical only (web), auto-grow (mobile) |
| Character count | Bottom-right, Footnote, Neutral-400 |

All states and accessibility match Text Field.

---

## Search Field

Specialized text input for search with instant feedback.

### Anatomy

```
┌──────────────────────────────────────────┐
│  🔍  Search treatments, providers...  ✕  │
└──────────────────────────────────────────┘
```

### Specifications

| Property | Value |
|----------|-------|
| Height | 44px (mobile), 40px (desktop) |
| Border radius | radius-full (9999px) — pill shape |
| Background | Neutral-100 (default), Neutral-0 (focus) |
| Border | none (default), 2px Primary-500 (focus) |
| Search icon | 20px, Neutral-400 |
| Padding | 12px left (after icon), 12px right |

---

## Select / Dropdown

Displays a list of options for single selection.

### Anatomy

```
Label
┌──────────────────────────────────────────┐
│  Selected value                      [▾] │
└──────────────────────────────────────────┘

Opened:
┌──────────────────────────────────────────┐
│  Selected value                      [▴] │
├──────────────────────────────────────────┤
│  Option 1                            ✓   │
│  Option 2                                │
│  Option 3                                │
│  Option 4                                │
└──────────────────────────────────────────┘
```

### States

| State | Border | Chevron |
|-------|--------|---------|
| Default | 1px Neutral-300 | Neutral-400 |
| Hover | 1px Neutral-400 | Neutral-500 |
| Open/Focus | 2px Primary-500 | Primary-500 |
| Disabled | 1px Neutral-200 | Neutral-300 |
| Error | 2px Error-700 | Error-700 |

### Specifications

| Property | Value |
|----------|-------|
| Trigger height | 44px (mobile), 40px (desktop) |
| Border radius | 8px |
| Dropdown max-height | 240px (scrollable) |
| Dropdown shadow | shadow-md |
| Option height | 40px |
| Option padding | 12px horizontal |
| Option hover | Neutral-100 background |
| Selected option | Primary-500 checkmark, Primary-50 background |
| Dropdown offset | 4px below trigger |

### Accessibility

- Use `<select>` for simple cases, custom with `role="listbox"` for complex
- `aria-expanded` on trigger
- `aria-selected` on selected option
- Arrow keys navigate options
- Type-ahead: typing letters jumps to matching option
- Escape closes dropdown

---

## Toggle / Switch

Binary on/off control for settings and preferences.

### Anatomy

```
Off:  ┌───────────┐
      │ ○         │  Label
      └───────────┘

On:   ┌───────────┐
      │         ● │  Label
      └───────────┘
```

| Part | Description |
|------|-------------|
| Track | Background container (changes color on/off) |
| Thumb | Circular indicator that slides |
| Label | Descriptive text to the right |

### States

| State | Track | Thumb |
|-------|-------|-------|
| Off | Neutral-300 | White, shadow-xs |
| Off — Hover | Neutral-400 | White, shadow-xs |
| On | Primary-500 | White, shadow-xs |
| On — Hover | Primary-400 | White, shadow-xs |
| Disabled — Off | Neutral-200 | Neutral-100 |
| Disabled — On | Primary-200 | White |
| Focus | + focus ring on track | — |

### Specifications

| Property | Value |
|----------|-------|
| Track width | 44px |
| Track height | 24px |
| Track border radius | radius-full |
| Thumb diameter | 20px |
| Thumb offset | 2px from track edge |
| Animation | 200ms spring easing |
| Label gap | 12px |
| Touch target | 44×44px minimum |

### Accessibility

- `role="switch"` with `aria-checked`
- `aria-label` or visible label
- Space to toggle
- Announce state change: "On" / "Off"

---

## Checkbox

Multi-select control for forms and filters.

### Anatomy

```
┌──┐
│✓ │  Label text
└──┘
```

### States

| State | Box | Check | Label |
|-------|-----|-------|-------|
| Unchecked | 1px Neutral-300, Neutral-0 fill | Hidden | Neutral-700 |
| Unchecked — Hover | 1px Neutral-400, Neutral-50 fill | Hidden | Neutral-900 |
| Checked | Primary-500 fill | White ✓ | Neutral-700 |
| Checked — Hover | Primary-400 fill | White ✓ | Neutral-900 |
| Indeterminate | Primary-500 fill | White — (dash) | Neutral-700 |
| Disabled | Neutral-200 fill | Neutral-400 ✓ | Neutral-400 |
| Error | Error-700 border | — | Error-700 |
| Focus | + focus ring | — | — |

### Specifications

| Property | Value |
|----------|-------|
| Box size | 18×18px |
| Border radius | 4px |
| Check icon | 12px stroke, 2px weight |
| Label gap | 8px |
| Touch target | 44×44px |
| Animation | Check scales in 150ms ease-out |

### Accessibility

- Native `<input type="checkbox">` or `role="checkbox"`
- `aria-checked`: `true`, `false`, or `mixed` (indeterminate)
- Labels via `<label>` element
- Space to toggle
- Group with `role="group"` and `aria-labelledby` for related checkboxes

---

## Radio Button

Single-select control within a group of mutually exclusive options.

### Anatomy

```
◉  Option A (selected)
○  Option B
○  Option C
```

### States

| State | Circle | Dot | Label |
|-------|--------|-----|-------|
| Unselected | 1px Neutral-300, Neutral-0 fill | Hidden | Neutral-700 |
| Unselected — Hover | 1px Neutral-400, Neutral-50 fill | Hidden | Neutral-900 |
| Selected | 2px Primary-500 | Primary-500, 8px | Neutral-700 |
| Selected — Hover | 2px Primary-400 | Primary-400, 8px | Neutral-900 |
| Disabled | Neutral-200 | Neutral-300 | Neutral-400 |
| Focus | + focus ring | — | — |

### Specifications

| Property | Value |
|----------|-------|
| Circle diameter | 18px |
| Inner dot diameter | 8px |
| Border radius | radius-full |
| Label gap | 8px |
| Option gap (vertical) | 12px |
| Touch target | 44×44px |

### Accessibility

- `role="radiogroup"` on container with `aria-labelledby`
- `role="radio"` with `aria-checked` on each option
- Arrow keys navigate within group
- Tab moves to/from the group (not between options)

---

## Slider

Continuous or stepped value selection along a range.

### Anatomy

```
                  Label: Value
────────────●═══════════════════
 ↑          ↑                 ↑
min       thumb              max
```

| Part | Description |
|------|-------------|
| Track | Horizontal bar showing range |
| Fill | Colored portion from min to current value |
| Thumb | Draggable circular handle |
| Label | Optional current value display |
| Min/Max | Optional range labels at ends |

### States

| State | Track | Fill | Thumb |
|-------|-------|------|-------|
| Default | Neutral-200 | Primary-500 | White, 2px Primary-500 border, shadow-xs |
| Hover | Neutral-200 | Primary-400 | White, scale 1.1 |
| Active/Dragging | Neutral-200 | Primary-500 | Primary-100, scale 1.2 |
| Disabled | Neutral-200 | Neutral-300 | Neutral-200 |
| Focus | Neutral-200 | Primary-500 | + focus ring |

### Specifications

| Property | Value |
|----------|-------|
| Track height | 4px |
| Track border radius | radius-full |
| Thumb diameter | 20px |
| Thumb touch target | 44×44px |
| Fill border radius | radius-full |
| Label font | Callout / Medium 500 |

### Accessibility

- `role="slider"` with `aria-valuemin`, `aria-valuemax`, `aria-valuenow`
- `aria-valuetext` for human-readable value (e.g., "$250")
- Arrow keys: ±1 step, Page Up/Down: ±10 steps
- Label via `aria-labelledby`

---

## Date Picker

Date selection for appointment booking and filtering.

### Specifications

| Property | Value |
|----------|-------|
| Trigger | Text field with calendar icon |
| Calendar width | 280px (single month) |
| Day cell size | 36×36px |
| Selected day | Primary-500 fill, white text |
| Today | Primary-100 fill, Primary-700 text |
| Disabled dates | Neutral-300 text |
| Range selection | Primary-100 fill between start/end |
| Border radius | radius-lg (12px) |
| Shadow | shadow-lg |
| Animation | Fade in 200ms |

### Accessibility

- `role="dialog"` for calendar popup
- `aria-label="Choose date"`
- Arrow keys navigate days
- Month navigation via buttons
- Selected date announced
- Keyboard: Escape closes, Enter selects

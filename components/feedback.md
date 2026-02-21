# Feedback Components

Feedback components communicate system status, results, and guidance. They must be clear, timely, and accessible — the user should never wonder "did that work?"

---

## Alert / Banner

Persistent inline message for important contextual information.

### Anatomy

```
┌──────────────────────────────────────────────────────────┐
│  [Icon]  Alert title (optional)                    [✕]   │
│          Alert message text with details.                │
│          [Action Link] (optional)                        │
└──────────────────────────────────────────────────────────┘
```

| Part | Description |
|------|-------------|
| Icon | Status icon (info, success, warning, error) — 20px |
| Title | Optional bold header (Body / SemiBold) |
| Message | Descriptive text (Callout / Regular) |
| Action | Optional text link for resolution |
| Dismiss | Optional close button |

### Variants

| Variant | Background | Border-left | Icon Color | Text Color |
|---------|-----------|-------------|-----------|-----------|
| **Info** | Info-50 `#EFF6FF` | 3px Info-700 | Info-700 | Neutral-800 |
| **Success** | Success-50 `#F0FDF4` | 3px Success-700 | Success-700 | Neutral-800 |
| **Warning** | Warning-50 `#FEFCE8` | 3px Warning-700 | Warning-700 | Neutral-800 |
| **Error** | Error-50 `#FEF2F2` | 3px Error-700 | Error-700 | Neutral-800 |

### Specifications

| Property | Value |
|----------|-------|
| Padding | 16px |
| Border radius | 8px |
| Icon size | 20×20px |
| Icon-to-content gap | 12px |
| Title font | Body / SemiBold 600 |
| Message font | Callout / Regular 400 |
| Title-to-message gap | 4px |
| Dismiss button | 20×20px, Neutral-400, Ghost style |
| Max width | 100% of container |

### States

| State | Behavior |
|-------|---------|
| Default | Visible, static |
| Dismissing | Fade out 200ms + slide up |
| Dismissed | Removed from DOM or hidden |

### Accessibility

- `role="alert"` for errors (assertive), `role="status"` for info/success (polite)
- Dismiss button: `aria-label="Dismiss alert"`
- Icon: `aria-hidden="true"` (meaning conveyed by text)
- Do not use color alone — always include an icon and descriptive text

### Usage Guidelines

**Do:**
- Place at the top of the relevant section or form
- Include a clear action when the user can resolve the issue
- Use inline alerts for form-level validation errors

**Don't:**
- Stack more than 2 alerts on a single screen
- Use alerts for transient success messages (use Toast instead)
- Use Warning or Error for informational content

---

## Toast / Notification

Temporary, non-blocking message that confirms an action or reports a transient event.

### Anatomy

```
┌─────────────────────────────────────────────────┐
│  [Icon]  Toast message text            [Undo]   │
└─────────────────────────────────────────────────┘
```

| Part | Description |
|------|-------------|
| Icon | Status icon (16px) |
| Message | Concise text (Body / Regular) |
| Action | Optional undo or view link |

### Variants

| Variant | Background | Icon | Use Case |
|---------|-----------|------|----------|
| **Neutral** | Neutral-800 | — | Generic confirmations |
| **Success** | Neutral-800 | Success-400 ✓ | "Booking confirmed" |
| **Error** | Neutral-800 | Error-400 ✗ | "Failed to save" |
| **Info** | Neutral-800 | Info-400 ℹ | "New message received" |

### Specifications

| Property | Value |
|----------|-------|
| Position | Bottom-center (mobile), bottom-right (desktop) |
| Width | Auto (min 240px, max 480px) |
| Padding | 12px horizontal, 10px vertical |
| Border radius | 8px |
| Background | Neutral-800 |
| Text color | White |
| Shadow | shadow-lg |
| Icon size | 16px |
| Icon-to-text gap | 8px |
| Z-index | 500 |
| Animation in | Slide up + fade in, 300ms ease-out |
| Animation out | Fade out, 200ms ease-in |
| Auto-dismiss | 4000ms (default), 6000ms (with action) |
| Max stack | 3 toasts visible simultaneously |
| Stack gap | 8px between stacked toasts |

### States

| State | Behavior |
|-------|---------|
| Entering | Slides up from below viewport edge |
| Visible | Static, timer running |
| Hovered | Timer paused |
| Exiting | Fades out, below toasts slide up |

### Accessibility

- `role="status"` with `aria-live="polite"`
- Auto-dismiss pauses on hover and focus
- Keyboard: Tab to focus, Escape to dismiss
- Action link is focusable
- Never use toasts for critical errors that require user action — use Alert or Modal

### Usage Guidelines

**Do:**
- Keep messages under 10 words
- Use for confirmations: "Changes saved," "Booking confirmed"
- Provide "Undo" for reversible destructive actions

**Don't:**
- Show more than 3 toasts simultaneously
- Use for errors that need user action
- Include links to other pages (use Alert instead)
- Show toasts for every minor interaction

---

## Modal / Dialog

Focused overlay that demands user attention for a specific task or decision.

### Anatomy

```
┌───────────────────────── Backdrop ─────────────────────────┐
│                                                            │
│     ┌──────────────────────────────────────────┐           │
│     │  Title                            [✕]    │ ← Header  │
│     ├──────────────────────────────────────────┤           │
│     │                                          │           │
│     │  Body content area                       │ ← Body    │
│     │  (text, forms, or custom content)        │           │
│     │                                          │           │
│     ├──────────────────────────────────────────┤           │
│     │              [Secondary]  [Primary]      │ ← Footer  │
│     └──────────────────────────────────────────┘           │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

| Part | Description |
|------|-------------|
| Backdrop | Semi-transparent overlay (Neutral-950 at 50% opacity) |
| Header | Title + optional close button |
| Body | Scrollable content area |
| Footer | Action buttons (right-aligned) |

### Variants

| Variant | Width | Use Case |
|---------|-------|----------|
| **Small** | 400px | Confirmations, simple prompts |
| **Medium** | 560px | Forms, detailed content |
| **Large** | 720px | Complex forms, data tables |
| **Full (mobile)** | 100% viewport | All modals on mobile |

### Specifications

| Property | Desktop | Mobile |
|----------|---------|--------|
| Width | 400/560/720px | 100% (minus 32px margin) |
| Max height | 80vh | 90vh |
| Border radius | 12px | 12px (top only on mobile bottom sheet) |
| Background | Neutral-0 | Neutral-0 |
| Shadow | shadow-xl | shadow-xl |
| Header padding | 24px | 16px |
| Body padding | 24px (0 top if header present) | 16px |
| Footer padding | 16px 24px | 16px |
| Footer border-top | 1px Neutral-200 | 1px Neutral-200 |
| Backdrop | Neutral-950 / 50% opacity | Neutral-950 / 50% opacity |
| Z-index | 400 | 400 |
| Enter animation | Scale from 0.95, fade in, 200ms | Slide up from bottom, 300ms |
| Exit animation | Scale to 0.95, fade out, 150ms | Slide down, 200ms |

### States

| State | Behavior |
|-------|---------|
| Opening | Backdrop fades in, modal scales/slides in |
| Open | Content interactive, body scrolls if overflow |
| Closing | Modal scales/slides out, backdrop fades out |
| Closed | Removed from DOM, focus returns to trigger |

### Accessibility

- `role="dialog"` with `aria-modal="true"`
- `aria-labelledby` pointing to title
- `aria-describedby` pointing to body content (if descriptive)
- Focus trapped inside modal while open
- First focusable element receives focus on open
- Escape key closes (unless destructive confirmation)
- Close button: `aria-label="Close dialog"`
- On close, focus returns to the element that opened the modal

### Usage Guidelines

**Do:**
- Use for tasks requiring focus (confirmations, forms, critical decisions)
- Provide a clear escape route (close button, Escape key, backdrop click)
- Put the primary action on the right, secondary on the left

**Don't:**
- Nest modals inside modals
- Use for content that should be on its own page
- Block dismissal for non-critical modals
- Launch modals without user-initiated trigger

---

## Progress Indicator

Communicates that work is happening and optionally how much remains.

### Variants

#### Spinner (Indeterminate)
Circular rotating indicator for unknown duration.

```
    ◠
   ◜ ◝     ← Spinning animation
    ◡
```

| Size | Diameter | Stroke | Use Case |
|------|----------|--------|----------|
| Small | 16px | 2px | Inline (buttons, inputs) |
| Medium | 24px | 2.5px | Section loading |
| Large | 40px | 3px | Page-level loading |
| XLarge | 64px | 4px | Full-page initial load |

| Property | Value |
|----------|-------|
| Color | Primary-500 (on light), Primary-300 (on dark) |
| Track color | Neutral-200 |
| Animation | Rotate 360° in 1000ms, linear, infinite |
| Stroke linecap | Round |

#### Progress Bar (Determinate)
Horizontal bar showing percentage completion.

```
Label                                    75%
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░
```

| Property | Value |
|----------|-------|
| Height | 4px (slim), 8px (standard) |
| Border radius | radius-full |
| Track color | Neutral-200 |
| Fill color | Primary-500 |
| Fill animation | Width transition 300ms ease-in-out |
| Label font | Footnote / Medium 500 |
| Label position | Above right (percentage), or below center (status text) |

### Accessibility

- Spinner: `role="status"` with `aria-label="Loading"`
- Progress bar: `role="progressbar"`, `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`
- `aria-valuetext` for human-readable status ("Uploading photo 3 of 5")

---

## Skeleton Screen

Placeholder UI that represents the shape of incoming content, reducing perceived load time.

### Principles

1. **Mirror the actual layout** — skeleton shapes should match the content they replace
2. **Use subtle animation** — gentle shimmer left-to-right, never pulsing or flashing
3. **Show immediately** — display skeleton within 100ms of navigation

### Shapes

| Shape | Use For | Border Radius |
|-------|---------|---------------|
| Rectangle | Text lines, images, cards | 4px |
| Circle | Avatars | radius-full |
| Rounded rectangle | Buttons, tags | 8px |

### Specifications

| Property | Value |
|----------|-------|
| Base color | Neutral-200 |
| Shimmer highlight | Neutral-100 |
| Shimmer animation | Linear gradient sweep, left to right, 1500ms, infinite |
| Text line height | 12px |
| Text line gap | 8px |
| Text line width | 100%, 80%, 60% (varying to look natural) |
| Avatar skeleton | 40px circle |
| Card skeleton | Matches card dimensions |

### Animation CSS

```css
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.skeleton {
  background: linear-gradient(
    90deg,
    var(--neutral-200) 25%,
    var(--neutral-100) 50%,
    var(--neutral-200) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
}
```

### Accessibility

- `aria-hidden="true"` on skeleton elements
- `aria-busy="true"` on the container being loaded
- Screen reader: announce "Loading [section name]" via `aria-live` region
- When content loads: remove `aria-busy`, announce "Content loaded"

### Usage Guidelines

**Do:**
- Use for any content that takes >200ms to load
- Match skeleton shapes to actual content layout
- Show 3–5 skeleton items for lists (not the full expected count)

**Don't:**
- Use skeletons for actions (buttons, forms) — use spinners instead
- Animate with pulsing opacity (causes motion sensitivity issues)
- Show skeletons for more than 10 seconds — switch to error state

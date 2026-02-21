# Feedback Patterns

Consistent feedback patterns build user confidence. Every action should have a clear, proportional response.

---

## Feedback Hierarchy

Match feedback intensity to action significance:

| Action Significance | Feedback Type | Duration | Example |
|--------------------|---------------|----------|---------|
| **Micro** (toggle, select) | Visual state change | Instant | Toggle color change |
| **Minor** (save, update) | Toast notification | 4s auto-dismiss | "Changes saved" |
| **Major** (booking, payment) | Success page/modal | Persistent until dismissed | Booking confirmation |
| **Critical** (delete, cancel) | Confirmation dialog | Blocks until resolved | "Delete this booking?" |

---

## Success Patterns

### Inline Success
For minor actions within the current context.

```
✓ Changes saved                              [auto-dismiss 4s]
```

- Toast position: bottom-center (mobile), bottom-right (desktop)
- Duration: 4000ms
- Icon: Success checkmark (16px)
- Optional "Undo" action for reversible changes

### Page-Level Success
For major completions that end a flow (booking confirmed, account created).

```
┌──────────────────────────────────────┐
│                                      │
│              ✓                        │
│      (animated checkmark)            │
│                                      │
│      Booking Confirmed               │
│                                      │
│      Your appointment with           │
│      Dr. Kim is set for              │
│      March 15, 2026 at 2:00 PM      │
│                                      │
│      ┌──────────────────────┐        │
│      │  Appointment Details │        │
│      │  Treatment: Botox    │        │
│      │  Provider: Dr. Kim   │        │
│      │  Location: Gangnam   │        │
│      │  Cost: $378          │        │
│      └──────────────────────┘        │
│                                      │
│   [Add to Calendar]  [View Booking]  │
│                                      │
└──────────────────────────────────────┘
```

### Specifications

| Property | Value |
|----------|-------|
| Checkmark animation | Draw-in stroke, 600ms ease-out, scale 1.0→1.1→1.0 |
| Checkmark size | 64px |
| Checkmark color | Success-500 |
| Title font | Headline / SemiBold 600 |
| Details card | Outlined card variant |
| Primary action | "View Booking" |
| Secondary action | "Add to Calendar" |
| Page transition | Fade in from center, 400ms |

---

## Error Patterns

### Field-Level Error
Validation errors on specific form fields.

```
Email
┌──────────────────────────────────────┐
│  invalid-email                       │ ← Error border (2px Error-700)
└──────────────────────────────────────┘
  ⚠ Please enter a valid email address   ← Error message (Error-700)
```

**Rules:**
- Show on blur (when user leaves field) or on submit
- Never show errors while the user is still typing
- Clear error when user begins correcting the field
- Error message replaces helper text
- Icon + text (never color alone)

### Form-Level Error
Validation errors affecting the entire form.

```
┌──────────────────────────────────────────────────────┐
│  ⚠  Please fix 2 errors below                       │ ← Alert (Error variant)
└──────────────────────────────────────────────────────┘

 [Field with error highlighted]
 [Field with error highlighted]
```

**Rules:**
- Alert banner at top of form
- Scroll to first error field
- Focus first error field
- Count of errors in banner text
- Each error field shows its specific error message

### System Error
Server errors, network failures, unexpected problems.

```
┌──────────────────────────────────────┐
│                                      │
│        (error illustration)          │
│                                      │
│     Something went wrong             │
│     We couldn't complete your        │
│     request. Please try again.       │
│                                      │
│     [Try Again]                      │
│                                      │
│     Error code: VB-5001              │ ← Technical detail (Footnote, Neutral-400)
│                                      │
└──────────────────────────────────────┘
```

**Rules:**
- Never expose raw error messages or stack traces
- Provide a clear action (retry, go back, contact support)
- Include error code for support reference
- Log full error to Sentry

### Toast Error
For non-blocking errors (failed background sync, minor API failure).

```
✗ Failed to save. Please try again.                   [Retry]
```

- Duration: 6000ms (longer than success, includes action)
- Include "Retry" action when applicable
- Max 1 error toast visible at a time

---

## Loading Patterns

### Skeleton Loading
For initial page/section loads where layout is known.

**When:** Page load, tab switch, data fetch
**Duration:** Display immediately (within 100ms of navigation)
**Transition:** Crossfade from skeleton to content (200ms)

### Spinner Loading
For actions with unknown layout or short duration.

**When:** Button actions, form submissions, inline updates
**Duration:** Show after 200ms delay (avoid flash for fast responses)
**Placement:** Centered in the area being loaded, or inside the trigger button

### Progress Loading
For long operations where progress is measurable.

**When:** File uploads, multi-step processing
**Display:** Progress bar with percentage
**Include:** Estimated time remaining if calculable
**Allow:** Cancel button for user control

### Pull-to-Refresh (Mobile)
**Animation:** Custom spinner at top of scroll view
**Threshold:** 80px pull distance
**Spinner:** Vera branded spinner (Primary-500)
**Feedback:** Haptic on threshold + on refresh complete

### Optimistic Updates
For actions where we expect success (likes, saves, toggles).

**Pattern:**
1. Update UI immediately
2. Send request in background
3. If success: no further action needed
4. If failure: revert UI + show error toast

**Use for:** Favorites, likes, read status, simple toggles
**Never for:** Payments, bookings, destructive actions

---

## Empty State Patterns

### First-Use Empty
When the user hasn't created any content yet. Tone: encouraging and helpful.

```
Illustration style: Light, inviting
Title: "Your journey starts here"
Description: Actionable guidance
CTA: Primary action to get started
```

### No-Results Empty
When a search or filter returns nothing. Tone: helpful and suggestive.

```
Illustration style: Neutral, supportive
Title: "No results for [query]"
Description: Suggestions to broaden search
CTA: Clear filters / Browse all
```

### Error Empty
When content fails to load. Tone: apologetic and actionable.

```
Illustration style: Muted, calm
Title: "Couldn't load [content]"
Description: Brief explanation + what to try
CTA: Retry button
```

---

## Confirmation Patterns

### Non-Destructive Confirmation
For significant but reversible actions.

**Pattern:** Toast with "Undo" (no modal needed)
**Example:** "Review submitted. [Undo]"

### Destructive Confirmation
For irreversible actions.

**Pattern:** Modal dialog with explicit confirmation

```
┌───────────────────────────────────────┐
│                                       │
│  Cancel this booking?                 │
│                                       │
│  This will cancel your appointment    │
│  with Dr. Kim on March 15. This      │
│  action cannot be undone.             │
│                                       │
│     [Keep Booking]  [Cancel Booking]  │
│                                       │
└───────────────────────────────────────┘
```

**Rules:**
- Title is a question describing the action
- Body explains consequences
- Primary button is the safe option ("Keep Booking")
- Destructive button uses Destructive variant
- Never default focus to the destructive action
- For critical destructive actions (delete account), require typing confirmation text

# Page Templates

Page templates define the structural layout and content hierarchy for common page types. They ensure consistency across flows while allowing content flexibility.

---

## Landing Page

Public-facing page for marketing, SEO, and conversion.

### Structure

```
┌──────────────────────────────────────────────────────────────┐
│  [Logo]         Treatments  Providers  Pricing      [CTA]   │ ← Transparent Header
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                                                              │
│            Hero Headline (Cormorant Garamond)                │
│            Subtitle text                                     │
│            [Primary CTA]    [Secondary CTA]                  │
│                                                              │
│            Hero image / illustration                         │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│   Social Proof Bar: "Trusted by 10,000+ women"              │
│   [Logo] [Logo] [Logo] [Logo]                                │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                    Section Title                             │
│                    Section subtitle                          │
│                                                              │
│   ┌──────────┐   ┌──────────┐   ┌──────────┐               │
│   │ Feature  │   │ Feature  │   │ Feature  │               │
│   │ Card 1   │   │ Card 2   │   │ Card 3   │               │
│   └──────────┘   └──────────┘   └──────────┘               │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│   Testimonial Section (carousel or grid)                     │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌──────────────────────────────────────────────────┐      │
│   │         CTA Banner                                │      │
│   │         "Age beautifully, backed by science."     │      │
│   │         [Get Started]                             │      │
│   └──────────────────────────────────────────────────┘      │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│  Footer: Links | Social | Legal | © 2026 Vera Beauty Inc.   │
└──────────────────────────────────────────────────────────────┘
```

### Specifications

| Section | Vertical Padding | Content Width |
|---------|-----------------|---------------|
| Hero | 96px top, 64px bottom | 8 columns (centered) |
| Social Proof | 48px | 10 columns |
| Feature Section | 96px | 10 columns |
| Testimonials | 96px | 10 columns |
| CTA Banner | 80px | 8 columns |
| Footer | 48px top, 32px bottom | 10 columns |

### Guidelines
- Header starts transparent over hero, becomes solid on scroll
- Hero: One headline, one subtitle, max 2 CTAs
- Maximum 5 sections between hero and footer
- Each section has a clear heading and purpose
- Mobile: All sections stack vertically, full-width

---

## Dashboard

Authenticated view for the Reception platform — provider analytics, bookings, and management.

### Structure

```
┌──────────────────────────────────────────────────────────────┐
│  Header (64px)                                               │
├──────────┬───────────────────────────────────────────────────┤
│          │  Page Title                           [Action]    │
│          │                                                   │
│ Sidebar  │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐           │
│ (280px)  │  │ Stat │ │ Stat │ │ Stat │ │ Stat │           │
│          │  └──────┘ └──────┘ └──────┘ └──────┘           │
│          │                                                   │
│          │  ┌────────────────────┐ ┌────────────────┐       │
│          │  │                    │ │                │       │
│          │  │  Chart / Main      │ │  Side Panel    │       │
│          │  │  Content           │ │  (Activity)    │       │
│          │  │                    │ │                │       │
│          │  └────────────────────┘ └────────────────┘       │
│          │                                                   │
│          │  ┌────────────────────────────────────────┐       │
│          │  │  Table / List                          │       │
│          │  │  (Recent bookings, etc.)               │       │
│          │  └────────────────────────────────────────┘       │
└──────────┴───────────────────────────────────────────────────┘
```

### Specifications

| Area | Width | Padding |
|------|-------|---------|
| Sidebar | 280px (collapsible to 64px) | — |
| Main content | Fluid (remaining) | 32px |
| Stat cards | 4 across (equal width) | 24px gap |
| Chart area | 8 columns | — |
| Side panel | 4 columns | — |
| Table | Full main width | — |

### Guidelines
- Page title includes breadcrumbs above and action button right-aligned
- Stat cards: max 4 per row, show trend indicators
- Main content area scrolls independently of sidebar
- Mobile: Sidebar becomes overlay, stats stack 2×2

---

## Settings

User preferences and account management.

### Structure

```
┌──────────────────────────────────────────────────────────────┐
│  Header                                                      │
├──────────┬───────────────────────────────────────────────────┤
│          │                                                   │
│ Settings │  Section Title                                    │
│ Nav      │  Section description text.                        │
│          │                                                   │
│ • Profile│  ┌────────────────────────────────────────┐       │
│ • Account│  │  Label            [Input field]        │       │
│ • Notifs │  │  Label            [Input field]        │       │
│ • Privacy│  │  Label            [Toggle]             │       │
│ • Billing│  │  Label            [Select ▾]           │       │
│          │  └────────────────────────────────────────┘       │
│          │                                                   │
│          │            [Cancel]  [Save Changes]               │
│          │                                                   │
└──────────┴───────────────────────────────────────────────────┘
```

### Specifications

| Property | Value |
|----------|-------|
| Settings nav width | 240px (desktop), full-width tabs (mobile) |
| Content max width | 640px |
| Section gap | 48px |
| Form field gap | 16px |
| Label width | 160px (desktop inline), full-width (mobile stacked) |
| Action buttons | Right-aligned, sticky on mobile |

### Guidelines
- Group related settings into sections with clear headings
- Use toggles for on/off preferences, select for multi-option
- Save button disabled until changes are made
- Destructive settings (delete account) at the bottom, separated by divider

---

## Profile

User or provider profile display.

### Structure

```
┌──────────────────────────────────────────────────────────────┐
│  Header                                                      │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌──────────────────────────────────────────────────┐      │
│   │  [Avatar XXL]                                     │      │
│   │  User Name                        [Edit Profile]  │      │
│   │  @username · Location                             │      │
│   │  Bio text here...                                 │      │
│   │  [Stat] [Stat] [Stat]                            │      │
│   └──────────────────────────────────────────────────┘      │
│                                                              │
│   [Tab: Posts] [Tab: Reviews] [Tab: Treatments]              │
│   ─────────────────────────────────────────────────          │
│                                                              │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐                 │
│   │ Content  │  │ Content  │  │ Content  │                 │
│   │ Card     │  │ Card     │  │ Card     │                 │
│   └──────────┘  └──────────┘  └──────────┘                 │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Specifications

| Property | Value |
|----------|-------|
| Avatar size | XXLarge (120px) |
| Name font | Headline / SemiBold 600 |
| Username/location | Subheadline / Regular 400, Neutral-500 |
| Bio max lines | 3 (expandable) |
| Stats | Inline, Footnote label + Title 3 value |
| Tab bar | Sticky below profile header |
| Content grid | 1 col (mobile), 2 col (tablet), 3 col (desktop) |

---

## Checkout

Multi-step booking and payment flow.

### Structure

```
┌──────────────────────────────────────────────────────────────┐
│  [← Back]  Logo  Step 1 ── Step 2 ── Step 3                │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌────────────────────────┐  ┌──────────────────────┐       │
│  │                        │  │  Order Summary       │       │
│  │  Step Content          │  │                      │       │
│  │  (form fields,         │  │  Treatment: Botox    │       │
│  │   selections,          │  │  Provider: Dr. Kim   │       │
│  │   confirmations)       │  │  Date: Mar 15, 2026  │       │
│  │                        │  │  ──────────────────  │       │
│  │                        │  │  Subtotal: $350      │       │
│  │                        │  │  Tax: $28            │       │
│  │                        │  │  Total: $378         │       │
│  │                        │  │                      │       │
│  │  [Back]  [Continue]    │  │  [Book Now]          │       │
│  └────────────────────────┘  └──────────────────────┘       │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Specifications

| Property | Value |
|----------|-------|
| Step indicator | Horizontal, numbered circles connected by line |
| Active step | Primary-500 circle, SemiBold label |
| Completed step | Primary-500 filled circle with ✓ |
| Future step | Neutral-300 circle, Regular label |
| Form area width | 7 columns (desktop) |
| Summary panel width | 4 columns (desktop), sticky |
| Summary panel | Fixed on scroll (desktop), bottom sheet (mobile) |
| Price font | Title 3 / SemiBold 600 (total), Callout (line items) |
| CTA button | Full-width Primary, XLarge |

### Guidelines
- Maximum 4 steps
- Each step validates before allowing progression
- Summary always visible (side panel desktop, collapsible bottom mobile)
- Show progress clearly — users should know how many steps remain
- Allow back navigation without losing data
- Final step: show complete summary before confirming

# User Flows

Standard interaction patterns for common user journeys. These flows define the expected sequence, feedback, and error handling for critical paths.

---

## Onboarding

First-time user experience after account creation.

### Flow

```
Sign Up → Skin Profile → Goals → Personalization → Home
```

### Steps

| Step | Content | Required |
|------|---------|----------|
| 1. Welcome | Brand intro, value proposition | — |
| 2. Skin Profile | Skin type, concerns, MST selection | Yes |
| 3. Goals | Treatment interests, priorities | Yes |
| 4. Personalization | Notification preferences, location | No (skippable) |
| 5. Complete | "Your profile is ready" + guided first action | — |

### Patterns

- **Progress indicator**: Horizontal step dots at top
- **Skip option**: "Skip for now" link on optional steps (Neutral-500 text, right-aligned)
- **Back navigation**: Always available (except step 1)
- **Data persistence**: Save each step immediately (don't lose progress on crash)
- **Completion**: Animated transition to home with subtle celebration (confetti discouraged — use a gentle fade/scale)

### Specifications

| Property | Value |
|----------|-------|
| Layout | Single column, centered, 6-column max width |
| Step transition | Slide left (forward), slide right (back), 300ms |
| Input spacing | 24px between form groups |
| CTA position | Bottom of viewport (sticky on mobile) |
| CTA text | "Continue" (not "Next") |
| Skip text | Subheadline / Regular 400, Neutral-500 |
| Progress dots | 8px, 12px gap, Primary-500 active |

---

## Authentication

Sign in and sign up flow using Clerk phone/OTP.

### Sign In Flow

```
Phone Input → OTP Verification → Authenticated
```

### Sign Up Flow

```
Phone Input → OTP Verification → Name Entry → Onboarding
```

### Patterns

- **Phone input**: Single field with country code selector
- **OTP**: 6-digit code input with auto-advance between digits
- **Auto-submit**: Submit automatically when all 6 digits entered
- **Resend**: "Resend code" link, available after 30s countdown
- **Error**: Inline error below OTP field ("Invalid code. Please try again.")
- **Biometric**: Offer FaceID/TouchID on subsequent logins

### OTP Field Specifications

| Property | Value |
|----------|-------|
| Digit boxes | 6 × 44px wide, 56px tall |
| Gap | 8px |
| Font | JetBrains Mono / SemiBold 600, Title 2 (22px) |
| Border | 2px Neutral-300 (default), 2px Primary-500 (focused) |
| Error border | 2px Error-700 |
| Border radius | 8px |
| Auto-advance | Focus moves to next box on digit entry |
| Backspace | Clears current digit, moves focus to previous |
| Paste support | Distribute pasted 6-digit code across boxes |

---

## Search

Content discovery for treatments, providers, and clinics.

### Flow

```
Search Field Focus → Recent/Suggested → Type Query → Live Results → Select Result
```

### Patterns

- **Instant search**: Results appear after 300ms debounce
- **Recent searches**: Show last 5 searches on focus (before typing)
- **Suggestions**: AI-powered suggestions as user types
- **Categories**: Filter tabs below search (All, Treatments, Providers, Clinics)
- **No results**: Helpful message + alternative suggestions

### Search Results Specifications

| Property | Value |
|----------|-------|
| Results container | Full-width overlay (mobile), dropdown (desktop) |
| Result item height | 56px (compact), 72px (with thumbnail) |
| Highlight | Bold matching text in result |
| Category tabs | Horizontal scroll, pill-shaped, below search field |
| Max results shown | 8 (before "View all N results" link) |
| Loading | Skeleton items (3) during fetch |
| Debounce | 300ms from last keystroke |

### Empty State

```
┌──────────────────────────────────┐
│                                  │
│       🔍 (muted icon)           │
│                                  │
│   No results for "query"         │
│   Try different keywords or      │
│   browse our categories.         │
│                                  │
│   [Browse Treatments]            │
│                                  │
└──────────────────────────────────┘
```

---

## Filtering

Narrowing results by specific criteria (treatment type, price range, location, skin tone compatibility).

### Patterns

#### Desktop: Sidebar Filters

```
┌──────────────┬───────────────────────────────────────┐
│              │  Results (24)              [Sort ▾]    │
│ Filters      │                                       │
│              │  ┌──────┐ ┌──────┐ ┌──────┐          │
│ Treatment ▾  │  │ Card │ │ Card │ │ Card │          │
│ ☐ Botox     │  └──────┘ └──────┘ └──────┘          │
│ ☐ Filler    │                                       │
│ ☐ Laser     │  ┌──────┐ ┌──────┐ ┌──────┐          │
│              │  │ Card │ │ Card │ │ Card │          │
│ Price ▾      │  └──────┘ └──────┘ └──────┘          │
│ $0 ───●── $1k│                                       │
│              │                                       │
│ Skin Tone ▾  │                                       │
│ MST 01-10    │                                       │
│              │                                       │
│ [Clear All]  │                                       │
└──────────────┴───────────────────────────────────────┘
```

#### Mobile: Bottom Sheet Filters

- "Filter" button opens full-screen bottom sheet
- Applied filter count shown on button badge
- "Apply" and "Clear All" at bottom of sheet

### Specifications

| Property | Value |
|----------|-------|
| Filter sidebar width | 240px (desktop) |
| Filter group gap | 24px |
| Filter group label | Subheadline / SemiBold 600 |
| Checkbox/radio gap | 12px |
| Active filter badge | Primary-500, count inside pill |
| Applied filters bar | Horizontal row of removable tags above results |
| Tag style | Removable badge (Badge component) |
| Results count | Subheadline / Regular 400, Neutral-500 |
| Sort dropdown | Right-aligned above results grid |

---

## Empty States

What users see when there's no content to display.

### Structure

```
┌──────────────────────────────────────┐
│                                      │
│        [Illustration / Icon]         │
│                                      │
│        Title (what's empty)          │
│        Description (what to do)      │
│                                      │
│        [Primary Action]              │
│                                      │
└──────────────────────────────────────┘
```

### Variants

| Context | Title | Description | Action |
|---------|-------|-------------|--------|
| No bookings | No bookings yet | Discover treatments and book your first appointment. | Browse Treatments |
| No messages | No messages | Start a conversation with a provider. | Find Providers |
| No search results | No results found | Try different keywords or adjust your filters. | Clear Filters |
| No reviews | No reviews yet | Be the first to share your experience. | Write a Review |
| No favorites | Nothing saved | Save treatments and providers you're interested in. | Explore |
| Error/offline | Something went wrong | We couldn't load this page. Check your connection and try again. | Retry |

### Specifications

| Property | Value |
|----------|-------|
| Illustration size | 120×120px (max) |
| Illustration style | Line art, Neutral-300 + Primary-200 accent |
| Title font | Title 2 / SemiBold 600 |
| Description font | Body / Regular 400, Neutral-500 |
| Max width | 320px (centered) |
| Vertical position | 33% from top of available space |
| Action button | Primary / Medium size |
| Text alignment | Center |
| Spacing | 16px between illustration/title, 8px title/description, 24px description/action |

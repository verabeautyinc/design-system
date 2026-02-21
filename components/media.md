# Media Components

Media components handle visual content — images, video, avatars, and galleries. They must load gracefully, adapt to different aspect ratios, and respect users who prefer reduced motion.

---

## Avatar

Circular image representing a user, provider, or bot.

### Anatomy

```
  ┌─────┐
  │     │
  │  AB │  ← Initials fallback
  │     │
  └─────┘
     ●     ← Status indicator (optional)
```

| Part | Description |
|------|-------------|
| Image | User photo, circular crop |
| Initials | Fallback when no image (first + last initial) |
| Status dot | Online/offline indicator (optional) |
| Badge | Verification checkmark (optional) |

### Sizes

| Size | Diameter | Font | Status Dot | Use Case |
|------|----------|------|-----------|----------|
| XSmall | 24px | Caption 2 (11px) | 6px | Inline mentions, dense lists |
| Small | 32px | Caption 1 (12px) | 8px | Compact lists, comments |
| Medium | 40px | Footnote (13px) | 10px | List items, chat |
| Large | 56px | Callout (16px) | 12px | Profile headers, cards |
| XLarge | 80px | Title 2 (22px) | 14px | Profile pages |
| XXLarge | 120px | Title 1 (28px) | 16px | Profile edit, onboarding |

### States

| State | Appearance |
|-------|-----------|
| Image loaded | Circular photo |
| Loading | Skeleton circle with shimmer |
| No image | Initials on Primary-100 background, Primary-700 text |
| Error | Default person icon on Neutral-200 background |
| Online | Green-500 dot, bottom-right |
| Offline | Neutral-300 dot, bottom-right |
| Verified | Primary-500 checkmark badge, bottom-right |

### Specifications

| Property | Value |
|----------|-------|
| Border radius | radius-full (circle) |
| Border (group) | 2px Neutral-0 (white ring for overlapping avatars) |
| Status dot position | Bottom-right, overlapping edge by 2px |
| Status dot border | 2px Neutral-0 ring |
| Initials background | Primary-100 |
| Initials color | Primary-700 |
| Fallback icon | 60% of avatar diameter |
| Group overlap | -8px margin-left per avatar |
| Group max | Show 3–4 + "+N" counter |

### Accessibility

- `alt` text: person's name, or `""` if decorative
- Status: `aria-label="Online"` or `aria-label="Offline"` (never color alone)
- Avatar group: `aria-label="5 team members"` on container
- Verified badge: `aria-label="Verified provider"`

---

## Image Container

Responsive image wrapper with loading states and aspect ratio control.

### Anatomy

```
┌──────────────────────────────────────┐
│                                      │
│                                      │
│            Image Content             │
│                                      │
│                                      │
└──────────────────────────────────────┘
  Optional caption text below
```

### Aspect Ratios

| Ratio | Value | Use Case |
|-------|-------|----------|
| Square | 1:1 | Treatment thumbnails, before/after |
| Portrait | 3:4 | Provider photos, profile images |
| Landscape | 4:3 | Treatment cards, clinic photos |
| Wide | 16:9 | Hero images, video thumbnails |
| Free | auto | User-uploaded content |

### States

| State | Appearance |
|-------|-----------|
| Loading | Neutral-200 background with shimmer |
| Loaded | Image with fade-in (200ms) |
| Error | Neutral-100 background, broken image icon, retry button |
| Placeholder | Neutral-100 with camera icon |

### Specifications

| Property | Value |
|----------|-------|
| Border radius | 8px (default), 12px (card-level), 0 (full-bleed) |
| Object fit | `cover` (default), `contain` (logos, diagrams) |
| Background (loading) | Neutral-200 |
| Caption font | Footnote / Regular 400, Neutral-500 |
| Caption spacing | 8px above |
| Lazy loading | All images below the fold |
| Blur-up placeholder | 20px blurred thumbnail → full resolution |
| Max file size display | Warn at >5MB, block at >20MB |

### Accessibility

- Meaningful images: descriptive `alt` text
- Decorative images: `alt=""` and `aria-hidden="true"`
- Before/after images: `aria-label="Before treatment"` / `"After treatment"`
- Caption: associated via `<figcaption>` within `<figure>`

---

## Video Player

Embedded video with playback controls for treatment demos, provider introductions, and educational content.

### Anatomy

```
┌──────────────────────────────────────────┐
│                                          │
│                                          │
│               ▶ (play)                   │
│                                          │
│                                          │
├──────────────────────────────────────────┤
│  ▶  0:45 ━━━━━━━━━●━━━━━ 2:30  🔊  ⛶  │
└──────────────────────────────────────────┘
```

| Part | Description |
|------|-------------|
| Video area | Main content area with poster image |
| Play button overlay | Large centered play button on poster |
| Controls bar | Bottom playback controls |
| Play/Pause | Toggle playback |
| Timeline | Scrubber with current position |
| Time display | Current time / duration (JetBrains Mono) |
| Volume | Mute toggle + slider |
| Fullscreen | Expand to fullscreen |

### States

| State | Appearance |
|-------|-----------|
| Poster | Static thumbnail with large play button overlay |
| Loading | Poster + spinner overlay |
| Playing | Video content, controls auto-hide after 3s |
| Paused | Video content, controls visible |
| Ended | Poster with replay button |
| Error | Error message with retry option |
| Buffering | Progress spinner, semi-transparent overlay |

### Specifications

| Property | Value |
|----------|-------|
| Aspect ratio | 16:9 (default), responsive |
| Border radius | 12px |
| Controls height | 44px |
| Play button (overlay) | 64px circle, Neutral-0 / 80% opacity, play icon 24px |
| Controls background | Linear gradient, transparent → Neutral-950/60% |
| Timeline track | 4px, Neutral-0/30% |
| Timeline fill | Primary-500 |
| Timeline thumb | 12px circle, white |
| Time font | JetBrains Mono / Regular 400, Caption 1 |
| Icon size (controls) | 20px |
| Auto-hide controls | 3s after last interaction |
| Volume slider width | 80px |

### Accessibility

- Native `<video>` element with controls fallback
- `aria-label="Video: [title]"`
- Keyboard: Space (play/pause), Arrow keys (seek ±5s), M (mute), F (fullscreen)
- Captions: always provide if dialogue present
- Respect `prefers-reduced-motion`: disable autoplay

---

## Gallery / Carousel

Horizontal scrolling collection of images or cards.

### Anatomy

```
         ┌──────┐ ┌──────┐ ┌──────┐ ┌──
[◀]      │  1   │ │  2   │ │  3   │ │ 4    [▶]
         └──────┘ └──────┘ └──────┘ └──

                  ● ○ ○ ○               ← Pagination dots
```

| Part | Description |
|------|-------------|
| Items | Array of images or cards |
| Navigation arrows | Previous/Next buttons (desktop only) |
| Pagination dots | Position indicators |
| Swipe area | Touch-swipeable region (mobile) |

### Variants

| Variant | Behavior | Use Case |
|---------|----------|----------|
| **Snap** | Snaps to each item | Before/after photos |
| **Free scroll** | Continuous horizontal scroll | Treatment cards |
| **Full-bleed** | One item visible, swipe to next | Onboarding slides |

### Specifications

| Property | Desktop | Mobile |
|----------|---------|--------|
| Navigation arrows | Visible on hover | Hidden (swipe only) |
| Arrow size | 40px circle | — |
| Arrow position | Vertically centered, -20px outside | — |
| Arrow background | Neutral-0, shadow-md | — |
| Pagination dots | 8px, 12px gap | 6px, 8px gap |
| Active dot | Primary-500, 1.5× width (pill) | Same |
| Inactive dot | Neutral-300 | Same |
| Snap behavior | scroll-snap-type: x mandatory | Same |
| Item gap | 16px (mobile), 24px (desktop) | — |
| Swipe threshold | — | 50px horizontal |
| Animation | 300ms ease-out | Same |

### Accessibility

- `role="region"` with `aria-label="Image gallery"` or `aria-roledescription="carousel"`
- Each item: `role="group"` with `aria-label="Slide N of M"`
- Arrows: `aria-label="Previous"` / `aria-label="Next"`
- Dots: `role="tablist"` with `role="tab"` per dot
- Keyboard: Arrow keys navigate items
- Respect `prefers-reduced-motion`: disable scroll animations
- Auto-play: never auto-advance without user control and pause button

### Usage Guidelines

**Do:**
- Limit to 8 items maximum
- Show partial next item to hint at scrollability
- Provide alternative access (link to "View all")

**Don't:**
- Auto-play without a visible pause control
- Use carousels for critical content (users often miss slides)
- Nest carousels inside carousels
- Use for fewer than 3 items (show them all instead)

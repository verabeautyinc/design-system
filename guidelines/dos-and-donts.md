# Do's and Don'ts

Concrete examples of design decisions that align with Vera's principles — and common mistakes to avoid.

---

## 1. Color: Use Coral for Action, Not Decoration

**Do:** Use Primary Coral (`#D85959`) for a single primary CTA button and active navigation indicators. Let the rest of the page breathe in neutrals and white.

```
┌──────────────────────────────────┐
│                                  │
│  Book Your Consultation          │
│  Description in Neutral-600...   │
│                                  │
│  ┌────────────────────────┐      │
│  │   Get Started          │ ←── Primary Coral, clear focal point
│  └────────────────────────┘      │
│                                  │
└──────────────────────────────────┘
```

**Don't:** Splash coral across backgrounds, multiple buttons, headings, and decorative elements. When everything is emphasized, nothing is.

```
┌──────────────────────────────────┐
│ ██████ CORAL BACKGROUND █████████│
│                                  │
│  CORAL HEADING TEXT              │
│  Description with coral links... │
│                                  │
│  [Coral Button] [Coral Button]   │
│                                  │
└──────────────────────────────────┘
```

---

## 2. Typography: One Font, Clear Hierarchy

**Do:** Use Geist at different weights and sizes to create hierarchy. SemiBold for headings, Regular for body, Medium for labels.

```
Botox Treatment Overview          ← Title 2 / SemiBold 600

A neuromodulator that temporarily  ← Body / Regular 400
relaxes muscles to smooth wrinkles.

Duration: 30 minutes              ← Subheadline / Medium 500
Recovery: None                    ← Subheadline / Medium 500
```

**Don't:** Mix fonts unnecessarily, use bold everywhere, or rely on color/size alone without weight variation.

```
𝕭𝖔𝖙𝖔𝖝 𝕿𝖗𝖊𝖆𝖙𝖒𝖊𝖓𝖙 𝕺𝖛𝖊𝖗𝖛𝖎𝖊𝖜   ← Decorative font
**A NEUROMODULATOR THAT...**       ← All caps, all bold
Duration: 30 minutes               ← Identical weight, only size differs
RECOVERY: None                     ← Random caps
```

---

## 3. Spacing: Consistent Rhythm Over Pixel-Perfect Art

**Do:** Use spacing scale values consistently. Related items are closer together, unrelated items have more space.

```
Section Title
[24px gap]                        ← Related group separator
Card content with 16px padding
[16px gap]                        ← Between sibling cards
Card content with 16px padding
[48px gap]                        ← Between sections
Next Section Title
```

**Don't:** Eyeball spacing, use inconsistent values, or compress everything to "fit more on screen."

```
Section Title
[10px]
Card content (8px padding)
[5px]
Card (12px padding)
[7px]
Next Section Title
```

---

## 4. Feedback: Proportional to Importance

**Do:** Use toast for minor confirmations, full-page success for major completions, and modals only for decisions that require attention.

```
Toggle saved  → Toast (auto-dismiss, 4s)
Photo uploaded → Toast with preview
Booking confirmed → Full confirmation page
Delete account → Modal with typed confirmation
```

**Don't:** Use the same feedback pattern for everything. Modals for every action cause fatigue. No feedback at all causes anxiety.

```
Toggle saved → Modal: "Are you sure?" [OK]     ← Overkill
Booking confirmed → Toast: "Booked" (4s)        ← Insufficient
Photo uploaded → Nothing happens                 ← Anxiety-inducing
```

---

## 5. Empty States: Guide, Don't Abandon

**Do:** Provide helpful context, a clear next step, and a welcoming illustration. Make the empty state an invitation.

```
┌──────────────────────────────────┐
│                                  │
│    (simple line illustration)    │
│                                  │
│    No saved treatments yet       │
│    Explore treatments and tap    │
│    the heart to save favorites.  │
│                                  │
│    [Explore Treatments]          │
│                                  │
└──────────────────────────────────┘
```

**Don't:** Show a blank screen, a generic "no data" message, or a technical error-style empty state.

```
┌──────────────────────────────────┐
│                                  │
│                                  │
│    No items found.               │
│                                  │
│                                  │
│                                  │
└──────────────────────────────────┘
```

---

## 6. Inclusive Imagery: Real People, Real Diversity

**Do:** Show diverse ages (35–55+), ethnicities, and skin types. Use natural lighting. Keep skin texture visible. Represent the full Monk Skin Tone scale in marketing.

**Don't:** Use only one ethnicity or age group. Over-retouch skin to remove all texture. Default to the lightest skin tone. Use stock photos that feel generic or staged.

---

## 7. Language: Empower, Don't Prescribe

**Do:**

| Context | Good |
|---------|------|
| Treatment CTA | "See what's possible" |
| Results | "Your personalized plan" |
| Before/after | "Your progress" |
| Skin concern | "Areas of focus" |

**Don't:**

| Context | Bad |
|---------|-----|
| Treatment CTA | "Fix your wrinkles now" |
| Results | "What you need to fix" |
| Before/after | "Before / After (fixed)" |
| Skin concern | "Problem areas" |

---

## 8. Touch Targets: Generous, Not Cramped

**Do:** Make all interactive elements at least 44×44px touch targets, even if the visible element is smaller. Add invisible padding to extend the hit area.

```
┌───────────────────────┐
│                       │
│  ┌─────────────────┐  │ ← 44px touch target
│  │  Small button   │  │ ← 32px visible
│  └─────────────────┘  │
│                       │
└───────────────────────┘
```

**Don't:** Make text links, icons, or close buttons too small to tap accurately. Don't place small targets adjacent to each other.

```
[x][edit][share][★]  ← Impossible to tap accurately on mobile
```

---

## 9. Loading States: Show Structure, Not Spinners

**Do:** Use skeleton screens that mirror the actual content layout. Users perceive skeleton loading as faster than spinners.

```
┌──────────────────────────────────┐
│  ░░░░░░░░░░░░░  (shimmer)       │
│  ░░░░░░░░░░░░░░░░░░░            │
│  ░░░░░░░░░░░                    │
│                                  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░   │
│  ░░░░░░░░░░░░░░░░░░░            │
└──────────────────────────────────┘
```

**Don't:** Show a centered spinner on a blank white page for initial content loads. This gives no indication of what's coming and feels slower.

```
┌──────────────────────────────────┐
│                                  │
│                                  │
│            ◠ (spinning)          │
│                                  │
│                                  │
└──────────────────────────────────┘
```

---

## 10. Accessibility: Design for Everyone, Always

**Do:**
- Use color AND icons/text to convey meaning (never color alone)
- Include visible focus rings for keyboard navigation
- Write descriptive alt text for meaningful images
- Test all text against WCAG AA contrast ratios
- Respect `prefers-reduced-motion` for animations

**Don't:**
- Rely on red/green distinction for error/success (colorblind users can't distinguish)
- Remove focus outlines for "cleaner" aesthetics
- Use `alt=""` on informational images
- Use light gray text on white backgrounds
- Auto-play animations or videos without user control

```
Good: ✓ Verified (green text + checkmark icon + text label)
Bad:  ● (green dot with no label — meaningless to colorblind and screen reader users)
```

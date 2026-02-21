# Design Principles

Three core principles guide every design decision at Vera. When in conflict, they resolve in order: Clarity > Trust > Beauty.

---

## 1. Clarity Over Decoration

> Remove everything that doesn't serve the user. What remains becomes beautiful.

Good design at Vera is measured by what's absent, not what's present. Every element on screen must earn its place by serving a clear purpose — informing, guiding, or enabling action.

### In Practice

**Information hierarchy**: Every screen has exactly one primary action and one focal point. If you can't identify them instantly, the design isn't clear enough.

**Whitespace is a feature**: Generous spacing signals luxury and reduces cognitive load. Our audience is making decisions about medical procedures — they need breathing room to think.

**Progressive disclosure**: Show only what's needed now. Treatment details, provider credentials, pricing breakdowns — reveal complexity in layers, not all at once.

### Example: Treatment Card

**Principle applied:**
```
┌──────────────────────────────┐
│  [Treatment photo]           │
│                              │
│  Botox — Forehead            │
│  From $250 · 30 min          │
│  ★ 4.8 (124 reviews)        │
│                              │
│  [View Details]              │
└──────────────────────────────┘
```
The card shows only what's needed to decide whether to learn more: what it is, what it costs, how long it takes, and whether others recommend it. Provider details, clinical studies, before/after photos — those come when the user asks for them.

**Principle violated:**
```
┌──────────────────────────────┐
│  [Photo] [Photo] [Photo]    │
│  ★★★★★ TOP RATED!!!         │
│  BOTOX — FOREHEAD LINES     │
│  $250-$600 | 15-45 min      │
│  Dr. Kim · Dr. Park · +3    │
│  FDA Approved · Since 2002  │
│  124 reviews · 98% recommend│
│  [Book Now] [Save] [Share]  │
│  MST 1-7 · Minimal downtime │
└──────────────────────────────┘
```
Too much information competing for attention. The user can't quickly scan and decide.

---

## 2. Trust Through Consistency

> Every pixel reinforces clinical authority. Inconsistency erodes confidence.

Our users are entrusting us with decisions about their appearance and health. Trust isn't built through flashy design — it's built through predictable, reliable experiences. The same action should always look the same and behave the same, everywhere.

### In Practice

**Consistent component behavior**: A button looks and behaves identically whether it's booking a treatment or saving preferences. Users shouldn't need to relearn the interface.

**Predictable feedback**: Every action gets proportional feedback. Tapping a toggle gives instant visual confirmation. Booking a treatment gives a full confirmation page. Users should never wonder "did that work?"

**Honest communication**: Show real data. Display actual review counts (not rounded). Show real prices (not "from $X"). Use real provider photos (not stock images). If something has no reviews, show "No reviews yet" — not a hidden element.

### Example: Provider Verification

**Principle applied:**
```
Dr. Soo-Jin Kim
Board Certified Dermatologist
✓ Verified by Vera
✓ License #MD-12345 (Active)
✓ 8 years experience

  "View full credentials →"
```
Real credentials, verifiable details, transparent status. The verification badge means something specific and checkable.

**Principle violated:**
```
Dr. Kim ⭐ TOP PROVIDER ⭐
"The best dermatologist in Seoul!"
🏆 Vera Gold Partner 🏆
Book now — only 2 slots left!
```
Vague badges, unverifiable claims, artificial urgency. This reads like an ad, not a trusted platform.

---

## 3. Beauty Is Inclusive

> Design for every skin tone, every age, every comfort level. Beauty isn't one standard.

Inclusivity at Vera isn't a feature — it's a foundation. Our design system is built from the ground up to represent and serve diverse skin tones, ages, and aesthetic goals. This extends beyond UI to the images we show, the language we use, and the assumptions we don't make.

### In Practice

**Monk Skin Tone scale**: Our secondary color palette is the 10-point MST scale. Skin tone selection is presented without hierarchy — no "default" tone, no "other" category.

**Photography standards**: Marketing and UI imagery represents diverse ages (35–55+), ethnicities, and skin types. No retouching that removes natural aging (fine lines, natural texture).

**Language that empowers**: We say "your goals" not "your problems." We say "treatment options" not "fixes." We never use language that implies something is wrong with the user.

**Accessible by default**: Every color pairing meets WCAG AA. Every interactive element is keyboard-navigable. Every image has descriptive alt text. Every motion respects `prefers-reduced-motion`. Accessibility isn't an add-on.

### Example: Skin Tone Selector

**Principle applied:**
```
What's your skin tone? (This helps us personalize
treatment recommendations for you.)

  ○ ○ ○ ○ ○ ○ ○ ○ ○ ○
  1  2  3  4  5  6  7  8  9  10

  Skip for now →
```
All 10 MST tones displayed equally, none pre-selected, numeric labels only (no subjective descriptors), clear purpose explained, option to skip.

**Principle violated:**
```
Select your skin type:
  ● Light
  ○ Medium
  ○ Dark
  ○ Other
```
Reductive categories, subjective labels, "Other" as an afterthought, and "Light" pre-selected as default.

---

## Applying the Principles

When making a design decision, ask in order:

1. **Is it clear?** Can the user understand what to do within 3 seconds? If not, simplify.
2. **Is it consistent?** Does it match how we handle this pattern elsewhere? If not, align it.
3. **Is it inclusive?** Does it work for all our users regardless of skin tone, age, ability, or device? If not, expand it.

If a proposed design is beautiful but unclear, choose clarity.
If a proposed design is unique but inconsistent, choose consistency.
If a proposed design is efficient but exclusionary, choose inclusivity.

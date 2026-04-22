# Visual Direction

**How Vera looks.** The reference framework that turns brand identity and Gwallee into concrete design decisions.

---

## The reference set

Vera renders as the intersection of three references. Each owns a lane.

| Reference | Lane | One-line translation |
|---|---|---|
| **Aesop** | Brand mood, marketing, photography, voice-on-type | Warm restraint as luxury. |
| **Sulwhasoo** | Heritage moments, typography, signature treatments | Korean discipline without costume. |
| **Function Health** | Product surfaces, data, marketplace structure | Premium clinical seriousness, editorial register. |

**Aesop is the dominant note** because Vera's category is loud — medspas, before/afters, urgency banners, anti-aging fear copy. Aesop is the cleanest precedent for *making restraint feel premium* in a noisy space.

**Sulwhasoo is what makes Vera distinct.** Every wellness brand borrows from Aesop; few can credibly borrow from Sulwhasoo. Heritage as signature: 관리 appears once on a landing page, never as hanok textures behind every photo.

**Function Health handles the product layer** — provider lists, treatment plans, cadence calendars, booking flows — where warmth alone isn't credibility. Function's editorial data pacing sits naturally alongside Aesop and Sulwhasoo; all three share a serif-friendly, considered, anti-feed aesthetic.

One way to hold the combination in mind: **Vera is Function Health rendered through Aesop's warmth and Sulwhasoo's heritage.**

---

## What we are not

- **Not Glossier.** Too consumer, too pink, too cute, too millennial wink.
- **Not Beauty of Joseon literal.** No hanok textures, no dynasty motifs, no ingredient hero shots.
- **Not hospital.** No fluorescent whites, no clinical coldness, no pure-gray neutrals.
- **Not wellness studio.** No hand-lettered "self-care," no eucalyptus sprigs, no yoga poses.
- **Not tech minimal.** No monochrome black, no Stripe-style coldness, no AI-startup gradients.
- **Not influencer beauty.** No urgency banners, no before/after grids, no "results in 7 days."

This list does nearly as much work as the positive direction. When in doubt, check it.

---

## Design implications

### Typography

Serif display for brand moments. Clean sans for UI. The existing token stack already embodies this.

- **Cormorant Garamond** (serif) — brand moments only. Headlines, Gwallee callouts, manifesto copy, 관리 treatments. Do not use for routine UI copy. Reserve the serif for when the brand is speaking.
- **Geist** (sans) — UI, product surfaces, body copy. Paired with Pretendard as a Korean-aware fallback.
- **Korean character treatment** — 관리 or other Hangul characters may appear as a quiet signature, never as background texture.

### Color

The existing palette already embodies the direction. The rebrand lives in **application**, not tokens.

- **Vera Coral (`#D85959`) remains primary.** It is a bloom-toned flush — the color of healthy skin — not a transactional red. Keep.
- **Warm stone neutrals dominate 80%+ of any surface.** Already the rule.
- **Coral coverage ≤ 10% of any surface.** Already the rule. Enforce it.
- **Monk Skin Tone scale stays reserved for skin-tone representation.** Never decorative.
- **Deep neutrals (600–800) carry editorial typographic moments** — big serif numbers in neutral-800 on a warm cream background. Function's register rendered through Vera's warmth.

Token specifics: see [Color System](./foundations/colors.md).

### Whitespace

Generous everywhere. Whitespace is the luxury signal. Resist the urge to fill. Surface density should feel closer to Aesop's website than to a typical medspa landing page.

### Photography

The single highest-leverage visual lever. Aesop-style restraint combined with Vera's inclusive representation:

- Skin-first crops, not face-as-portrait
- Real treatment moments, not stock medspa
- Diverse models (per Inclusivity), no retouching of natural texture
- Soft dimensional light — bloom-skin rendering, not glass-skin gloss
- Repetition / cadence imagery: same person, multiple sessions over time
- Zero before/afters. Zero fear-of-aging framing.

A dedicated photography brief expands on this.

### Iconography

Minimal. Geometric. Consistent line weight. No illustration system. No mascots.

### Motion

Subtle. Slow. Intentional. Spring physics over linear. No Glossier bounce. No tech-y snap.

### Voice-on-type

Patient. Certain. Never urgent. Numbers shown small. Copy shown large.

### Korean heritage moments

One per surface, never more. The 관리 character on a single page. A serifed Korean character as a signature treatment. Each rare enough to feel intentional.

---

## Where this lives

This document sits alongside the two other brand-level docs:

- [Brand Identity](./brand-identity.md) — who Vera is (mission, values, voice)
- [Gwallee](./gwallee.md) — what Vera is built around (central concept)
- **Visual Direction** (this document) — how Vera looks (reference set + design implications)

Token specifics live in [`foundations/`](./foundations/). Implementation guidance lives in [`guidelines/`](./guidelines/). This document is the conceptual direction those operationalize.

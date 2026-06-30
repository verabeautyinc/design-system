# Color System

Vera's color system is built for trust, inclusivity, and clinical clarity. Every color has a purpose. If a color doesn't communicate meaning, it shouldn't be on screen.

---

## Design Principles

1. **Restraint over decoration** — Use color sparingly. White space is the dominant "color."
2. **Accessibility first** — Every color pairing must meet WCAG 2.1 AA minimum (4.5:1 for text, 3:1 for large text and UI elements).
3. **Inclusive by default** — The secondary palette is the Monk Skin Tone scale, ensuring representation across all skin tones.

---

## Primary Brand Color

### Vera Coral — `#B5373A`

A warm, confident coral that balances clinical authority with approachable warmth. Neither aggressive red nor passive pink — it's the color of healthy skin with a flush of vitality.

| Format | Value                |
| ------ | -------------------- |
| Hex    | `#B5373A`            |
| RGB    | `181, 55, 58`        |
| HSL    | `359°, 53%, 46%`     |
| oklch  | `0.505, 0.171, 22.6` |

### Accessibility Ratings

| Background            | Contrast Ratio | WCAG AA (Normal) | WCAG AA (Large) | WCAG AAA (Normal) |
| --------------------- | -------------- | ---------------- | --------------- | ----------------- |
| White `#FFFFFF`       | 5.5:1          | ✓ Pass           | ✓ Pass          | ✗ Fail            |
| Black `#000000`       | 3.8:1          | ✗ Fail           | ✓ Pass          | ✗ Fail            |
| Neutral 900 `#1C1917` | 3.6:1          | ✗ Fail           | ✓ Pass          | ✗ Fail            |
| Neutral 50 `#FAFAF9`  | 5.3:1          | ✓ Pass           | ✓ Pass          | ✗ Fail            |

> **Usage note:** `#B5373A` passes AA for normal text on white, but for primary body text prefer the 700 step. On dark backgrounds it is too dark for text — use the lightened dark-mode accent (`#CF6063`) instead.

---

## Primary Scale

A full tint/shade ramp for flexible application. The 500 step is the base brand color.

| Step    | Hex           | RGB               | HSL                  | Usage                                           |
| ------- | ------------- | ----------------- | -------------------- | ----------------------------------------------- |
| 50      | `#FBEDED`     | `251, 237, 237`   | `0°, 56%, 96%`       | Tinted backgrounds, hover states                |
| 100     | `#F6DADB`     | `246, 218, 219`   | `357°, 56%, 91%`     | Light fills, selected states                    |
| 200     | `#EEBABB`     | `238, 186, 187`   | `359°, 56%, 83%`     | Borders, dividers                               |
| 300     | `#E08F91`     | `224, 143, 145`   | `359°, 56%, 72%`     | Muted accents                                   |
| 400     | `#CF6063`     | `207, 96, 99`     | `358°, 53%, 59%`     | Hover state on primary                          |
| **500** | **`#B5373A`** | **`181, 55, 58`** | **`359°, 53%, 46%`** | **Primary brand — buttons, links, key actions** |
| 600     | `#9E2D30`     | `158, 45, 48`     | `358°, 56%, 40%`     | Active/pressed state                            |
| 700     | `#842427`     | `132, 36, 39`     | `358°, 57%, 33%`     | High-emphasis text on light bg                  |
| 800     | `#6A1D1F`     | `106, 29, 31`     | `358°, 57%, 26%`     | Dark accents                                    |
| 900     | `#551819`     | `85, 24, 25`      | `359°, 56%, 21%`     | Deepest accent                                  |
| 950     | `#310E0F`     | `49, 14, 15`      | `357°, 56%, 12%`     | Near-black brand tint                           |

---

## Neutral Palette

Warm-toned neutrals (stone family) that harmonize with the coral primary. These form the foundation of all UI surfaces, text, and borders.

| Step | Hex       | RGB             | HSL             | Usage                   |
| ---- | --------- | --------------- | --------------- | ----------------------- |
| 0    | `#FFFFFF` | `255, 255, 255` | `0°, 0%, 100%`  | Page backgrounds, cards |
| 50   | `#FAFAF9` | `250, 250, 249` | `60°, 7%, 98%`  | Subtle backgrounds      |
| 100  | `#F5F5F3` | `245, 245, 243` | `60°, 10%, 96%` | Section backgrounds     |
| 200  | `#E7E5E4` | `231, 229, 228` | `20°, 6%, 90%`  | Borders, dividers       |
| 300  | `#D6D3D1` | `214, 211, 209` | `24°, 6%, 83%`  | Disabled backgrounds    |
| 400  | `#A8A29E` | `168, 162, 158` | `24°, 6%, 64%`  | Placeholder text        |
| 500  | `#78716C` | `120, 113, 108` | `25°, 5%, 45%`  | Secondary text          |
| 600  | `#57534E` | `87, 83, 78`    | `33°, 5%, 32%`  | Body text (dark bg)     |
| 700  | `#44403C` | `68, 64, 60`    | `30°, 6%, 25%`  | Primary text (dark bg)  |
| 800  | `#292524` | `41, 37, 36`    | `12°, 6%, 15%`  | Surface (dark mode)     |
| 900  | `#1C1917` | `28, 25, 23`    | `24°, 10%, 10%` | Background (dark mode)  |
| 950  | `#0C0A09` | `12, 10, 9`     | `20°, 14%, 4%`  | Deepest dark            |

---

## Secondary Palette — Monk Skin Tone (MST) Scale

The Monk Skin Tone scale is a scientifically developed 10-point scale for representing diverse skin tones. As a beauty platform built on inclusivity, these colors are core to our identity — used in skin tone selectors, avatar systems, treatment compatibility indicators, and marketing materials.

### MST 01 — Lightest

| Format   | Value                   |
| -------- | ----------------------- |
| Hex      | `#F6EDE4`               |
| RGB      | `246, 237, 228`         |
| HSL      | `30°, 53%, 93%`         |
| vs White | 1.2:1 (decorative only) |
| vs Black | 17.5:1 ✓ AAA            |

### MST 02

| Format   | Value                   |
| -------- | ----------------------- |
| Hex      | `#F3E7DB`               |
| RGB      | `243, 231, 219`         |
| HSL      | `30°, 50%, 91%`         |
| vs White | 1.3:1 (decorative only) |
| vs Black | 16.0:1 ✓ AAA            |

### MST 03

| Format   | Value                   |
| -------- | ----------------------- |
| Hex      | `#F7EAD0`               |
| RGB      | `247, 234, 208`         |
| HSL      | `40°, 74%, 89%`         |
| vs White | 1.3:1 (decorative only) |
| vs Black | 16.2:1 ✓ AAA            |

### MST 04

| Format   | Value                   |
| -------- | ----------------------- |
| Hex      | `#EADABA`               |
| RGB      | `234, 218, 186`         |
| HSL      | `40°, 52%, 82%`         |
| vs White | 1.5:1 (decorative only) |
| vs Black | 13.5:1 ✓ AAA            |

### MST 05

| Format   | Value                   |
| -------- | ----------------------- |
| Hex      | `#D7BD96`               |
| RGB      | `215, 189, 150`         |
| HSL      | `36°, 43%, 72%`         |
| vs White | 2.0:1 (decorative only) |
| vs Black | 10.5:1 ✓ AAA            |

### MST 06

| Format   | Value            |
| -------- | ---------------- |
| Hex      | `#A07E56`        |
| RGB      | `160, 126, 86`   |
| HSL      | `32°, 30%, 48%`  |
| vs White | 3.8:1 ✓ AA Large |
| vs Black | 5.5:1 ✓ AA       |

### MST 07

| Format   | Value            |
| -------- | ---------------- |
| Hex      | `#825C43`        |
| RGB      | `130, 92, 67`    |
| HSL      | `24°, 32%, 39%`  |
| vs White | 5.5:1 ✓ AA       |
| vs Black | 3.8:1 ✓ AA Large |

### MST 08

| Format   | Value                   |
| -------- | ----------------------- |
| Hex      | `#604134`               |
| RGB      | `96, 65, 52`            |
| HSL      | `18°, 30%, 29%`         |
| vs White | 8.4:1 ✓ AAA             |
| vs Black | 2.5:1 (decorative only) |

### MST 09

| Format   | Value                   |
| -------- | ----------------------- |
| Hex      | `#3A312A`               |
| RGB      | `58, 49, 42`            |
| HSL      | `26°, 16%, 20%`         |
| vs White | 12.6:1 ✓ AAA            |
| vs Black | 1.7:1 (decorative only) |

### MST 10 — Deepest

| Format   | Value                   |
| -------- | ----------------------- |
| Hex      | `#292420`               |
| RGB      | `41, 36, 32`            |
| HSL      | `27°, 12%, 14%`         |
| vs White | 15.7:1 ✓ AAA            |
| vs Black | 1.3:1 (decorative only) |

### MST Usage Guidelines

- **Skin tone selectors**: Display all 10 tones as swatches; never pre-select
- **Treatment compatibility**: Use MST range to indicate which skin tones a treatment is validated for
- **Avatars**: Offer MST tones for avatar customization
- **Never use MST tones for**: UI backgrounds, button colors, text colors, or semantic meaning
- **Never label tones** with subjective descriptors — use MST numbers only (MST 01–10)

---

## Semantic Colors

Purpose-driven colors that communicate system state. These must remain consistent across all platforms to build reliable user mental models.

### Success — `#16A34A`

| Format   | Value            |
| -------- | ---------------- |
| Hex      | `#16A34A`        |
| RGB      | `22, 163, 74`    |
| HSL      | `142°, 76%, 36%` |
| vs White | 3.9:1 ✓ AA Large |
| vs Black | 5.3:1 ✓ AA       |

**Use for:** Confirmed bookings, successful payments, verified providers, treatment completion, positive status indicators.

| Step | Hex       | Usage                       |
| ---- | --------- | --------------------------- |
| 50   | `#F0FDF4` | Success background          |
| 100  | `#DCFCE7` | Success fill (light)        |
| 500  | `#16A34A` | Success icon/text (dark bg) |
| 700  | `#15803D` | Success text (light bg)     |
| 900  | `#14532D` | Success emphasis            |

### Warning — `#CA8A04`

| Format   | Value            |
| -------- | ---------------- |
| Hex      | `#CA8A04`        |
| RGB      | `202, 138, 4`    |
| HSL      | `41°, 96%, 40%`  |
| vs White | 3.3:1 ✓ AA Large |
| vs Black | 6.3:1 ✓ AA       |

**Use for:** Expiring sessions, appointment reminders, incomplete profiles, treatment cautions, age-restricted information.

| Step | Hex       | Usage                       |
| ---- | --------- | --------------------------- |
| 50   | `#FEFCE8` | Warning background          |
| 100  | `#FEF9C3` | Warning fill (light)        |
| 500  | `#CA8A04` | Warning icon/text (dark bg) |
| 700  | `#A16207` | Warning text (light bg)     |
| 900  | `#713F12` | Warning emphasis            |

### Error — `#B91C1C`

| Format   | Value            |
| -------- | ---------------- |
| Hex      | `#B91C1C`        |
| RGB      | `185, 28, 28`    |
| HSL      | `0°, 74%, 42%`   |
| vs White | 6.1:1 ✓ AA       |
| vs Black | 3.4:1 ✓ AA Large |

**Use for:** Failed payments, validation errors, booking conflicts, system failures, destructive action confirmations.

> **Note:** Error red (`#B91C1C`) is cooler and more saturated than the brand coral (`#B5373A`), which reads slightly warmer/browner. They sit close in lightness, so never rely on hue alone to distinguish them — always pair error states with an icon and/or label. The brand coral must never be used to indicate errors.

| Step | Hex       | Usage                 |
| ---- | --------- | --------------------- |
| 50   | `#FEF2F2` | Error background      |
| 100  | `#FEE2E2` | Error fill (light)    |
| 500  | `#EF4444` | Error icon (dark bg)  |
| 700  | `#B91C1C` | Error text (light bg) |
| 900  | `#7F1D1D` | Error emphasis        |

### Info — `#2563EB`

| Format   | Value            |
| -------- | ---------------- |
| Hex      | `#2563EB`        |
| RGB      | `37, 99, 235`    |
| HSL      | `221°, 83%, 53%` |
| vs White | 4.6:1 ✓ AA       |
| vs Black | 4.6:1 ✓ AA       |

**Use for:** Treatment information tooltips, educational content, consultation tips, system announcements, help text.

| Step | Hex       | Usage                |
| ---- | --------- | -------------------- |
| 50   | `#EFF6FF` | Info background      |
| 100  | `#DBEAFE` | Info fill (light)    |
| 500  | `#3B82F6` | Info icon (dark bg)  |
| 700  | `#1D4ED8` | Info text (light bg) |
| 900  | `#1E3A8A` | Info emphasis        |

---

## Dark Mode

Dark mode is not an inversion — it's a redesign. Vera's dark mode preserves warmth by using warm neutral surfaces (never pure black) and adjusted color values for comfortable reading.

### Surface Hierarchy (Dark Mode)

| Level      | Light Mode | Dark Mode | Usage                         |
| ---------- | ---------- | --------- | ----------------------------- |
| Background | `#FFFFFF`  | `#1C1917` | Page background               |
| Surface 1  | `#FAFAF9`  | `#292524` | Cards, elevated containers    |
| Surface 2  | `#F5F5F3`  | `#44403C` | Nested elements, sidebars     |
| Surface 3  | `#E7E5E4`  | `#57534E` | Active states, selected items |

### Text Colors (Dark Mode)

| Role           | Light Mode | Dark Mode | Contrast (Dark)  |
| -------------- | ---------- | --------- | ---------------- |
| Primary text   | `#1C1917`  | `#FAFAF9` | 15.8:1 ✓ AAA     |
| Secondary text | `#57534E`  | `#D6D3D1` | 9.5:1 ✓ AAA      |
| Tertiary text  | `#78716C`  | `#A8A29E` | 5.7:1 ✓ AA       |
| Disabled text  | `#A8A29E`  | `#78716C` | 3.2:1 ✓ AA Large |

### Primary Color in Dark Mode

| Usage               | Light Mode | Dark Mode | Notes                                                  |
| ------------------- | ---------- | --------- | ------------------------------------------------------ |
| Brand accent        | `#B5373A`  | `#CF6063` | Lightened to primary-400 for contrast on dark surfaces |
| Primary button bg   | `#B5373A`  | `#B5373A` | Stays the same (sufficient contrast)                   |
| Primary button text | `#FFFFFF`  | `#FFFFFF` | White on brand coral in both modes                     |
| Link text           | `#B5373A`  | `#E08F91` | Lightened to primary-300 for readability               |

### Semantic Colors (Dark Mode)

| Color   | Light Mode | Dark Mode |
| ------- | ---------- | --------- |
| Success | `#16A34A`  | `#4ADE80` |
| Warning | `#CA8A04`  | `#FACC15` |
| Error   | `#B91C1C`  | `#F87171` |
| Info    | `#2563EB`  | `#60A5FA` |

---

## Color Usage Rules

### 1. Primary Coral — Identity & Action

- **Use for:** Primary CTAs, active states, links, brand moments, key navigation indicators
- **Don't use for:** Backgrounds, large surface fills, body text, error states
- **Maximum coverage:** No more than 10% of any screen should be the primary coral

### 2. Neutrals — Structure & Readability

- **Use for:** Text, backgrounds, borders, dividers, shadows
- **Dominant color family** — neutrals should make up 80%+ of any screen
- **Always use warm neutrals** (stone family) — never pure gray

### 3. Semantic Colors — System Communication

- **Use exclusively for their defined purpose** — green only for success, red only for errors, etc.
- **Never use semantic colors decoratively**
- **Always pair with an icon and/or text label** — never rely on color alone (colorblind accessibility)

### 4. MST Colors — Skin Representation

- **Use exclusively for skin tone selection, representation, and treatment compatibility**
- **Never use as decorative UI colors**
- **Always present the full scale** — never show a subset as "default"

### 5. General Rules

- **3:1 minimum** contrast for UI elements (borders, icons, focus rings)
- **4.5:1 minimum** contrast for normal text (under 18px)
- **7:1 target** contrast for primary body text
- **Never convey meaning through color alone** — always provide a secondary indicator (icon, text, pattern)
- **Test every color combination** with a contrast checker before shipping

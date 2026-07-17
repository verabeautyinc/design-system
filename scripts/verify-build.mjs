import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

let failures = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`\u2705 ${message}`);
  } else {
    console.error(`\u274c ${message}`);
    failures++;
  }
}

// ---------------------------------------------------------------------------
// File existence
// ---------------------------------------------------------------------------

const cssPath = resolve(ROOT, 'build/css/tokens.css');
const tsPath = resolve(ROOT, 'build/ts/tokens.ts');
const figmaPath = resolve(ROOT, 'build/figma/vera.json');

assert(existsSync(cssPath), 'CSS output exists');
assert(existsSync(tsPath), 'TypeScript output exists');
assert(existsSync(figmaPath), 'Figma output exists');

// ---------------------------------------------------------------------------
// CSS checks
// ---------------------------------------------------------------------------

if (existsSync(cssPath)) {
  const css = readFileSync(cssPath, 'utf-8');

  assert(css.includes(':root'), 'CSS has :root selector');
  assert(!css.includes('undefined'), 'CSS has no "undefined" values');
  assert(!css.includes('[object Object]'), 'CSS has no "[object Object]" values');

  // Expected variable names
  assert(css.includes('--vera-color-primary-500'), 'CSS contains --vera-color-primary-500');
  assert(css.includes('--vera-spacing-4'), 'CSS contains --vera-spacing-4');
  assert(css.includes('--vera-border-radius-sm'), 'CSS contains --vera-border-radius-sm');
  assert(css.includes('--vera-shadow-md'), 'CSS contains --vera-shadow-md');
  assert(css.includes('--vera-animation-duration-fast'), 'CSS contains --vera-animation-duration-fast');
  assert(css.includes('--vera-animation-easing-default'), 'CSS contains --vera-animation-easing-default');

  // Decimal spacing key: 0.5 → 0-5
  assert(css.includes('--vera-spacing-0-5'), 'CSS handles decimal spacing keys (0.5 → 0-5)');

  // Colors are hex
  const colorMatch = css.match(/--vera-color-primary-500:\s*([^;]+)/);
  if (colorMatch) {
    assert(colorMatch[1].trim().startsWith('#'), 'Color values are hex');
  }

  // Dimensions are rem
  const spacingMatch = css.match(/--vera-spacing-4:\s*([^;]+)/);
  if (spacingMatch) {
    assert(spacingMatch[1].trim().endsWith('rem'), 'Dimension values are rem');
  }

  // Durations are seconds
  const durationMatch = css.match(/--vera-animation-duration-fast:\s*([^;]+)/);
  if (durationMatch) {
    assert(durationMatch[1].trim().endsWith('s'), 'Duration values are seconds');
  }

  // Shadow values are CSS strings (not undefined/object)
  const shadowMatch = css.match(/--vera-shadow-sm:\s*([^;]+)/);
  if (shadowMatch) {
    assert(
      shadowMatch[1].includes('rgba') || shadowMatch[1].includes('rgb'),
      'Shadow values are CSS strings',
    );
  }

  // Easing values are CSS keywords
  const easingMatch = css.match(/--vera-animation-easing-default:\s*([^;]+)/);
  if (easingMatch) {
    assert(easingMatch[1].trim() === 'ease-in-out', 'Easing values are CSS keywords');
  }
}

// ---------------------------------------------------------------------------
// TypeScript checks
// ---------------------------------------------------------------------------

if (existsSync(tsPath)) {
  const ts = readFileSync(tsPath, 'utf-8');

  assert(ts.includes('as const'), 'TS has "as const" assertion');
  assert(ts.includes('export const tokens'), 'TS exports tokens const');
  assert(ts.includes('export type Tokens'), 'TS exports Tokens type');
  assert(!ts.includes('undefined'), 'TS has no "undefined" values');

  // Nested structure
  assert(ts.includes('"color"'), 'TS has color group');
  assert(ts.includes('"primary"'), 'TS has primary color group');
  assert(ts.includes('"500"'), 'TS has "500" key');

  // Correct primary-500 hex value
  assert(
    ts.includes('"#B5373A"') || ts.includes('"#b5373a"'),
    'TS has correct primary-500 hex value',
  );

  // Parse the const object and verify value types
  const jsonMatch = ts.match(/export const tokens = (.+) as const;/s);
  if (jsonMatch) {
    try {
      const tokens = JSON.parse(jsonMatch[1]);

      // Dimensions should be numbers
      assert(typeof tokens.spacing?.['4'] === 'number', 'Spacing values are numbers');
      assert(
        typeof tokens.typography?.scale?.mobile?.display?.fontSize === 'number',
        'Font size values are numbers',
      );

      // Durations should be numbers
      assert(
        typeof tokens.animation?.duration?.fast === 'number',
        'Duration values are numbers',
      );

      // Colors should be strings
      assert(typeof tokens.color?.primary?.['500'] === 'string', 'Color values are strings');
      assert(
        tokens.color?.semantic?.background?.light === '#F5F0EA' &&
          tokens.color?.semantic?.surfaceRaised?.light === '#FBF7F1' &&
          tokens.color?.semantic?.surfaceGrouped?.light === '#E8DDD0' &&
          tokens.color?.semantic?.textPrimary?.light === '#2E2723' &&
          tokens.color?.semantic?.textSecondary?.light === '#645A52' &&
          tokens.color?.semantic?.textTertiary?.light === '#6B6058',
        'TS has approved warm semantic values',
      );
      const legacySurfaceKeys = [1, 2, 3].map((level) => `surface${level}`);
      assert(
        legacySurfaceKeys.every(
          (key) => !(key in (tokens.color?.semantic ?? {})),
        ),
        'TS has no legacy surface roles',
      );
      assert(
        Object.keys(tokens.color?.mst ?? {}).length === 10,
        'TS contains all ten Monk tones',
      );

      // fontWeight should be numbers
      assert(
        typeof tokens.typography?.fontWeight?.regular === 'number',
        'fontWeight values are numbers',
      );

      // zIndex (number type) should be numbers
      assert(typeof tokens.zIndex?.base === 'number', 'zIndex values are numbers');

      // Shadows should be strings
      assert(typeof tokens.shadow?.sm === 'string', 'Shadow values are strings');

      // Easings should be strings
      assert(
        typeof tokens.animation?.easing?.default === 'string',
        'Easing values are strings',
      );

      // No 'vera' wrapper
      assert(!tokens.vera, 'TS has no "vera" wrapper');
    } catch (e) {
      assert(false, `TS const is valid JSON: ${e.message}`);
    }
  } else {
    assert(false, 'TS const could be extracted for parsing');
  }
}

// ---------------------------------------------------------------------------
// Figma checks
// ---------------------------------------------------------------------------

if (existsSync(figmaPath)) {
  try {
    const figma = JSON.parse(readFileSync(figmaPath, 'utf-8'));

    assert(!figma.vera, 'Figma JSON has no "vera" root key');
    assert(figma.color != null, 'Figma JSON has color group');
    assert(figma.typography != null, 'Figma JSON has typography group');
    assert(figma.spacing != null, 'Figma JSON has spacing group');

    // Preserves DTCG format
    assert(
      figma.color?.primary?.['500']?.['$value'] === '#B5373A',
      'Figma preserves $value',
    );
    assert(
      figma.color?.primary?.['500']?.['$type'] === 'color',
      'Figma preserves $type',
    );
    assert(
      figma.color?.semantic?.background?.light?.['$value'] === '#F5F0EA',
      'Figma contains the warm background semantic',
    );
    assert(
      figma.color?.reception?.red?.['$value'] === '#FF383C',
      'Figma preserves reception status colors',
    );

    // Preserves group-level $description
    assert(
      typeof figma.color?.mst?.['$description'] === 'string',
      'Figma preserves group-level $description',
    );

    // Original values (not transformed)
    assert(figma.spacing?.['4']?.['$value'] === '16px', 'Figma preserves original px values');
    assert(
      figma.animation?.duration?.fast?.['$value'] === '150ms',
      'Figma preserves original ms values',
    );
  } catch (e) {
    assert(false, `Figma JSON is valid: ${e.message}`);
  }
}

// ---------------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------------

console.log(
  `\n${failures === 0 ? '\u2705 All checks passed' : `\u274c ${failures} check(s) failed`}`,
);
process.exit(failures === 0 ? 0 : 1);

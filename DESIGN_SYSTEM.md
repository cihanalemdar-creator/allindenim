# Allin Denim Design System

## 1. Color Palette

- Background: `stone-50` `#FAFAF8`, `cotton` `#F7F5F0`, white.
- Primary text: `ink-950` `#08111F`, `ink-900` `#101B2D`.
- Secondary text: `stone-700` `#424852`, `stone-600` `#626A75`.
- Primary brand: `denim-900` `#102947`, `denim-800` `#173A63`, `denim-700` `#1E4D7D`.
- Accent: `brass` `#B8A46E`, used sparingly for premium detail only.
- Borders: `stone-200` `#E4E7EA`, `stone-300` `#CBD0D6`.

Use mostly off-white, white, navy, charcoal, and denim blue. Avoid bright palettes and decorative gradients.

## 2. Typography Scale

- Hero H1: `text-4xl sm:text-5xl lg:text-6xl`, semibold, tight line-height.
- Page/section H2: `text-3xl sm:text-4xl`, semibold.
- Card title: `text-lg` or `text-xl`, semibold.
- Body: `text-base` to `text-lg`, line-height `leading-8`.
- Small metadata/eyebrows: `text-xs`, uppercase, tracked.

Typography should feel editorial, confident, and spacious. Do not scale text with viewport width.

## 3. Button Styles

- Primary: deep navy background, white text, 8px radius, clear hover state.
- Secondary: white background, muted border, navy/denim hover.
- Ghost: text-only for low-priority navigation.
- Buttons should include icons for directional CTAs where helpful.
- Minimum height is 44px for accessible tap targets.

## 4. Card Styles

- Cards use white background, subtle border, 8px radius, and low shadow.
- No nested cards.
- Category cards can be clickable and use a top-right arrow icon.
- Capability cards are compact, scannable, and text-led.

## 5. Section Spacing

- Major sections: `py-20 sm:py-24`.
- Hero: `py-20 sm:py-24 lg:py-28`.
- Internal grid gaps: `gap-8` to `gap-12`.
- Use the `Container` component for consistent page width and gutters.

## 6. Image Placeholder System

Use `PlaceholderImage` until real brand, product, factory, fabric, QC, or export visuals are available.

- Ratios: `wide`, `square`, `portrait`.
- Label every placeholder with the future image purpose.
- Replace later with optimized Next image components without changing page layout.
- Avoid stock-photo dependency.

## 7. Icon Usage

- Use `lucide-react` icons.
- Icons support navigation, CTAs, product categories, capabilities, trust indicators, and quality checks.
- Icons should be restrained: navy/denim only, not multicolor.
- Decorative icons must use `aria-hidden="true"`.

## 8. Header and Footer Layout

Header:

- Sticky top navigation.
- Logo placeholder on the left.
- Primary nav visible on desktop.
- Accessible disclosure menu on mobile.
- Primary inquiry CTA on desktop and mobile.

Footer:

- Company summary.
- Footer navigation grouped by Company, Capabilities, and Product Categories.
- Plain B2B language, no exaggerated claims.

## 9. Responsive Behavior

- Mobile first layout.
- Single column on small screens.
- Two to four columns only when space allows.
- CTAs stack on mobile and align horizontally on wider screens.
- Text blocks keep readable max width.
- Fixed-format elements use stable ratios to avoid layout shift.

## 10. Accessibility Rules

- Use semantic landmarks: header, nav, main, footer, section.
- Maintain strong color contrast.
- All interactive elements must be keyboard reachable.
- Visible focus ring required.
- Minimum touch target height: 44px.
- Placeholder visuals use `role="img"` and descriptive labels.
- Use meaningful link text.
- Do not rely on color alone to communicate meaning.

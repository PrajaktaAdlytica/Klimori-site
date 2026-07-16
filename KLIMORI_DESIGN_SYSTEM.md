# Klimori Design System

## Intent

Klimori should feel like an architectural operating layer: calm, clear, technical, and European. Density comes from useful signals and precise alignment, not heavy type, rounded-card stacks, or decorative effects.

## Color Roles

| Role | Token | Value | Use |
| --- | --- | --- | --- |
| Canvas | `--paper` | `#F7F7F3` | Main page background |
| Quiet surface | `--paper-deep` | `#EDEFE9` | Context sections and diagrams |
| Forest ink | `--ink` | `#123D37` | Headings, primary CTA, key controls |
| Graphite | `--graphite` | `#172321` | Default body copy on light surfaces |
| Muted ink | `--ink-soft` | `#385753` | Supporting labels and metadata |
| Signal blue | `--blue` | `#427FA9` | Weather and external conditions |
| Signal green | `--green` | `#4A8775` | Occupancy, air, healthy operation |
| Signal amber | `--amber` | `#C77912` | Tariff and attention states |
| Signal coral | `--coral` | `#DF7042` | Temperature variance and exceptions |
| Rule | `--line` | `rgba(18, 61, 55, .17)` | Dividers and diagram geometry |

Use signal colors as information, never as decorative gradients. Forest is the only primary-action color.

## Typography

- **Manrope**: all headings, body copy, and primary action language. Weights: 400, 500, 600 only.
- **DM Mono**: only data labels, eyebrow text, timestamps, portfolio rows, and navigation microcopy. Weights: 400, 500 only.
- No third typeface. Letter spacing is `0` for display type; mono labels may use controlled positive tracking.
- Display scale: `40 / 48`, `48 / 54`, `58 / 62` on desktop. Use the largest size only for a genuine narrative moment. Product and section headings should normally remain in the `32–48px` range.
- Body scale: `16 / 27` desktop; `15 / 24` compact contexts; labels `10–11px` in mono.

## Layout And Spacing

- Base unit: `8px`.
- Content gutters: `24px` mobile, `48px` tablet, `76px` desktop, `150px` for high-air editorial chapters.
- Section padding: `88px` mobile, `120–145px` desktop.
- Content maximum: `1320px`; long-form copy remains between `460–650px`.
- Use full-width bands and unframed grids. Cards are reserved for a true object, not page scaffolding.

## Navigation

- The approved hero contains its own embedded lockup and must remain visually untouched.
- The live navigation is hidden while the exact hero is in view and reveals as the scroll story begins.
- Desktop navigation uses DM Mono at `11px`; links are concise. The demo action is separated by one vertical rule, not a filled pill.
- Mobile navigation is a simple full-width disclosure beneath the compact header.

## Actions, Icons, And Focus

- Primary CTA: forest fill, white Manrope label, square corners, 54px minimum height, right-arrow icon. Hover lifts by 2px and slightly brightens forest.
- Secondary CTA: text plus right arrow with a single baseline rule. No outlined rounded buttons.
- Use Lucide icons in live interface only, with a `1.5–1.6` stroke weight. Diagram iconography stays thin and functional.
- Focus states use a 2px amber outline with a 4px offset.

## Motion

- Motion reveals causal relationships: a signal enters, conditions reconcile, an operating decision becomes legible.
- Default duration: `240–420ms` for control feedback; `700–1100ms` for chapter reveals. Use `power2/power3`-style deceleration.
- Respect reduced-motion preferences. Avoid ornamental parallax, idle loops, and motion that moves essential text.
- When an approved Figma file exists, translate meaningful motion into Figma Motion keyframes and verify by video export if that capability is enabled.

## Brand Assets To Produce

- Standalone Klimori wordmark SVG based on the approved lockup.
- `32px` and `180px` favicon/app-icon set using a simplified K mark.
- Social preview artwork derived from the exact hero system, not a generic gradient card.

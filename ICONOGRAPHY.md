# Klimori Iconography

## Principle

Icons should read as operational signals, not decoration. They are thin, precise, and quiet enough to sit beside real building data.

## Live Website Libraries

- **Lucide React**: all interface, CTA, navigation, form, product, and operational-condition icons.
- **React Icons / Font Awesome Brands**: social brands only. Do not use brand iconography for product or navigation controls.

## Visual Rules

- Stroke: `1.6` for Lucide icons in most UI contexts.
- Color: inherit the surrounding semantic color; forest is default, blue/green/amber identify a condition, and coral marks a variance or exception.
- No filled circular icon containers. Controls use a square hit area with an accessible focus outline.
- Never mix outlined and filled icons for the same type of control.

## Size Tokens

| Token | Size | Use |
| --- | --- | --- |
| `--icon-micro` | 15px | navigation and compact CTA arrows |
| `--icon-action` | 18px | buttons, text links, form confirmation |
| `--icon-signal` | 20px | building conditions and system map |
| `--icon-display` | 24px | proof statements and decision nodes |
| `--icon-social` | 17px | footer social links |

## Approved Website Map

- **CTA / action**: `ArrowRight`
- **Disclosure**: `ChevronRight`
- **Navigation**: `Menu`, `X`
- **Schedule**: `CalendarDays`
- **Occupancy**: `UsersRound`
- **Weather**: `CloudSun`
- **Tariff / energy**: `Zap`
- **Maintenance**: `Wrench`
- **Decision layer / impact**: `Gauge`, `Leaf`, `LineChart`
- **Social**: LinkedIn and YouTube only until additional Klimori channels are live.

## Figma Use

Create an `04 Iconography` page in the Klimori Figma file using these same names, scales, and semantic colors. Use Lucide source icons for operational/UI symbols and the approved social brand assets for footer-only use.

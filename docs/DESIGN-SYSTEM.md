# Information architecture, wireframes, and visual system

## Information architecture

```text
Portfolio
├── Home
│   ├── Hero
│   ├── Career impact
│   ├── Employer / Business paths
│   ├── Selected work
│   ├── Real project artifacts
│   ├── Automation & Engineering Services
│   ├── Delivery process
│   ├── Professional experience
│   ├── Education & credentials
│   ├── Technical toolkit
│   ├── About
│   └── Contact
├── Projects index
└── Project detail
    ├── Summary and verified source
    ├── Outcomes
    ├── Problem
    ├── Approach
    ├── Engineering considerations
    ├── Real artifacts / marked placeholder
    ├── Technologies
    └── Next project
```

The homepage first establishes positioning and proof, then separates employer and client journeys. Technical depth appears progressively through case studies and an expandable toolkit.

## Homepage wireframe

```text
┌──────────────────────────────────────────────────────────────┐
│ Brand            Work Services Experience About Contact CV  │
├──────────────────────────────────────────────────────────────┤
│ Eyebrow + name                    Professional portrait      │
│ Outcome-led headline              Profile positioning       │
│ Summary + three CTAs              Engineering / MBA signal  │
│ Availability + location                                     │
├──────────────────────────────────────────────────────────────┤
│ 5+ years │ 100+ workloads │ 99.95% uptime │ 100+ APIs       │
├──────────────────────────────────────────────────────────────┤
│ For engineering teams      │ For businesses                 │
├──────────────────────────────────────────────────────────────┤
│ Project 01 │ Project 02 │ Project 03                        │
├──────────────────────────────────────────────────────────────┤
│ Real notebook output       │ Real workflow definition       │
├──────────────────────────────────────────────────────────────┤
│ Five service cards + consultation CTA                        │
│ Discover → Design → Build → Validate → Improve              │
├──────────────────────────────────────────────────────────────┤
│ Professional experience timeline                             │
├──────────────────────────────────────────────────────────────┤
│ Education grid               │ Credentials panel             │
├──────────────────────────────────────────────────────────────┤
│ Focused toolkit + expandable complete inventory              │
├──────────────────────────────────────────────────────────────┤
│ About / value principle      │ Background and availability   │
├──────────────────────────────────────────────────────────────┤
│ Direct contact options       │ Validated inquiry form         │
├──────────────────────────────────────────────────────────────┤
│ Footer                                                       │
└──────────────────────────────────────────────────────────────┘
```

On mobile, every split layout becomes a single reading column. Project cards, metrics, education, contact options, and form fields stack. Navigation becomes a keyboard-accessible menu.

## Projects index wireframe

```text
┌──────────────────────────────────────────────────────────────┐
│ Compact positioning hero + contact action                    │
├──────────────────────────────────────────────────────────────┤
│ Three project cards with outcome, tools, source, case study  │
├──────────────────────────────────────────────────────────────┤
│ Comparison table: lens, evidence, source                     │
├──────────────────────────────────────────────────────────────┤
│ Verified artifact samples + marked content boundaries        │
├──────────────────────────────────────────────────────────────┤
│ Contact CTA                                                   │
└──────────────────────────────────────────────────────────────┘
```

## Project detail wireframe

```text
┌──────────────────────────────────────────────────────────────┐
│ Breadcrumb                                                    │
│ Project title + summary + source │ Project-specific visual   │
├──────────────────────────────────────────────────────────────┤
│ Three outcome markers                                         │
├──────────────────────────────────────────────────────────────┤
│ Sticky section index │ Problem                               │
│                      │ Approach                              │
│                      │ Outcome and engineering boundaries    │
├──────────────────────────────────────────────────────────────┤
│ Real artifacts in a responsive gallery                       │
├──────────────────────────────────────────────────────────────┤
│ Technologies                                                  │
├──────────────────────────────────────────────────────────────┤
│ Next project                                                  │
└──────────────────────────────────────────────────────────────┘
```

## Visual system

### Color

| Token | Value | Use |
| --- | --- | --- |
| Deep navy | `#07111f` | Hero, contact, primary dark surfaces |
| Navy | `#0a1729` | Work, experience, toolkit |
| Off-white | `#f5f7fa` | Main content background |
| White | `#ffffff` | Cards and content contrast |
| Cobalt | `#2367f2` | Primary action and analytical emphasis |
| Teal | `#18b7a0` | System state, reliability, secondary emphasis |
| Ink | `#10203a` | Primary light-surface typography |
| Muted | `#596a80` | Supporting content |

### Typography

- Interface and editorial type: Inter-compatible system sans stack.
- Technical labels: IBM Plex Mono-compatible system monospace stack.
- Headlines use a compact line height and restrained negative tracking.
- Body copy stays between roughly 65 and 80 characters per line where practical.

### Components

- Buttons use solid cobalt for the primary action and restrained borders for secondary actions.
- Project cards lead with a system-specific visual, followed by outcome, tools, and source.
- Metrics use large numerals with short context and never use skill percentages.
- Credentials distinguish `In Progress` certifications from earned Skill Badges.
- Motion is limited to hover movement and transitions, all disabled when reduced motion is requested.

### Accessibility

- Semantic sections, headings, lists, figures, forms, and navigation landmarks.
- Visible three-pixel focus ring.
- Keyboard-accessible mobile menu, links, disclosures, and form controls.
- Native validation enhanced with visible status messages.
- Descriptive image alternatives and captions.
- No zoom restriction.
- Layouts are tested for horizontal overflow at 390, 768, and 1440 CSS pixels.

# Web Design Research - Large Format Desktop Design

## Key Principles for Larger, More Impactful Content

### Typography Scale for Desktop
- **Hero H1**: 72-96px (or 4.5-6rem) for maximum impact
- **Section H2**: 48-64px (or 3-4rem) 
- **Body text**: 18-20px for comfortable reading on large screens
- **Supporting copy**: 20-24px in hero sections

### Visual Hierarchy Principles
1. **Size contrast**: Headlines should be 2-3x larger than body text
2. **Weight contrast**: Bold headlines, regular body text
3. **Spacing**: Generous whitespace between elements (not empty space, purposeful breathing room)
4. **Color contrast**: Use accent colors strategically to draw attention

### Hero Section Best Practices
- Hero should cover large portion of initial viewport
- Use split-column layout: text on one side, large image on other
- Image should be prominent and high-quality
- CTAs should be large and clearly visible (48-56px height buttons)

### Content Section Design
- Use larger card sizes with more padding
- Images should be substantial (not thumbnails)
- Grid layouts with 2-3 columns max on desktop
- Each section should have clear visual separation

### Specific Recommendations for This Site

#### Hero Section Redesign
- Increase H1 to 72-80px on desktop
- Make hero image larger and more prominent (side-by-side layout)
- Larger CTA buttons (56px height)
- More generous spacing

#### Challenge Cards
- Larger cards with bigger typography
- More padding inside cards
- Larger icons or visual elements

#### Track Record Section
- Full-width images or larger image areas
- Bigger stats/numbers (72px+)
- More visual impact

#### Testimonials
- Larger quote text (24px)
- More prominent avatar/initials
- Bigger cards with more padding

### Typography Scale to Implement (Based on LearnUI Research)

**Key insight from LearnUI**: Text-heavy pages need 18-24px body text, interaction-heavy need 14-20px.
For a portfolio/hire-me site (text-heavy with some interaction), use the larger end.

```
Desktop (1024px+):
- Page Title/H1: 48-56px (LearnUI recommends 35-50px for page titles)
- Section H2: 36-42px 
- Card H3: 24-28px
- Body: 18-20px
- Secondary: 16px

Large Desktop (1440px+):
- Page Title/H1: 64-72px (can go bigger for hero impact)
- Section H2: 42-48px
- Card H3: 28-32px  
- Body: 20px
- Secondary: 16-18px
```

**Critical rule**: 50-75 characters per line for readability
**Use as few font sizes as possible** - aim for 4-5 total

### Layout Principles
- Max container width: 1400-1600px
- Content should fill width naturally through larger elements
- Use CSS clamp() for fluid typography
- Images should be at least 500-600px on desktop

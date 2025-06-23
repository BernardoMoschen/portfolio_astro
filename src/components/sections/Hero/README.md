# Hero Section Components

This directory contains the refactored Hero section components, broken down into smaller, maintainable pieces following React best practices.

## Structure

```
src/components/sections/Hero/
├── HeroSection.tsx         # Main component that orchestrates all sub-components
├── utils.ts               # Utility functions and constants
└── components/            # Sub-components directory
    ├── index.ts          # Barrel export file
    ├── ProfileAvatar.tsx # Profile image component
    ├── HeroText.tsx      # Name, title, and description
    ├── SkillsSection.tsx # Technology skills chips
    ├── ActionButtons.tsx # CTA buttons (Contact, Resume)
    ├── SocialLinks.tsx   # GitHub and LinkedIn links
    ├── ScrollIndicator.tsx # Scroll down indicator
    └── BackgroundElements.tsx # Background patterns and floating elements
```

## Features

- **Modular Design**: Each component has a single responsibility
- **Theme Integration**: All components use the cozy camping theme colors
- **TypeScript**: Fully typed components with proper interfaces
- **Responsive**: Mobile-first responsive design
- **Reusable**: Components can be easily reused or modified
- **Maintainable**: Clean separation of concerns

## Theme Colors

The Hero section uses the cozy camping theme palette:
- **Primary**: Cedar/Wood brown (#8B5A3C)
- **Secondary**: Moss green (#6B8E5A)
- **Background**: Rich dark soil / Off-white cream
- **Text**: Warm cream / Rich brown

## Components

### ProfileAvatar
- Displays the profile image with theme-appropriate styling
- Responsive sizing for mobile and desktop
- Themed shadow effects

### HeroText
- Name with gradient text effect
- Job title
- Description paragraph
- All text uses theme colors

### SkillsSection
- Technology skills displayed as interactive chips
- Hover effects with theme colors
- Responsive layout

### ActionButtons
- Contact button with gradient background
- Resume download button
- Theme-consistent styling

### SocialLinks
- GitHub and LinkedIn links
- Subtle styling that doesn't compete with main CTAs

### ScrollIndicator
- Animated scroll down indicator
- Smooth scroll to next section

### BackgroundElements
- Subtle background pattern
- Floating decorative elements
- Theme-consistent gradients

## Usage

The main `HeroSection` component imports and orchestrates all sub-components:

```tsx
import { HeroSection } from './sections/Hero';

// Use in your app
<HeroSection />
```

## Customization

Personal information is centralized in `utils.ts` and can be easily modified:

```tsx
export const PERSONAL_INFO = {
    name: 'Bernardo Moschen',
    title: 'Full Stack Developer',
    // ... other properties
};
```

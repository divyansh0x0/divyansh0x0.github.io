---
trigger: always_on
---

You are responsible for performing a **UI-only redesign** of an existing Vue + TypeScript application.

You must strictly follow the rules below and treat them as **non-negotiable constraints**.

---

## CORE OBJECTIVE

Redesign the UI into a **Cyberpunk 2077–inspired brutalist interface** while preserving:

* All existing logic
* All data structures (especially ProjectData)
* Component architecture

This is **not a rewrite**. It is a **visual system overhaul only**.

---

## DESIGN LANGUAGE

### Style

* Cyberpunk 2077 inspired
* Brutalist, industrial, mechanical
* Clean and professional, not flashy

### Effects

* No glow effects
* No soft shadows
* No glassmorphism
* **Background blur is allowed**
* Borders define structure, not lighting effects

---

## BORDERS & GEOMETRY

* Use **thick, sharp, high-contrast borders**
* No soft edges
* No shadow-based elevation
* All cards must have a **bottom-right chamfer**
* Chamfer must be controlled via a global variable

---

## TYPOGRAPHY

* Clean, readable, professional
* No distortion or gimmicks
* No shrinking text for style

### Hierarchy (mandatory)

* H1: dominant
* H2: section headers
* H3: subsections
* Body: fully readable

---

## LAYOUT & SPACING

* Structured and grid-based
* No clutter
* Generous spacing

All spacing must:

* Come from global variables
* Never be hardcoded

---

## GLOBAL STYLING SYSTEM

All design control must come from:

* public/css/colors.css
* public/css/main.css

### Required tokens:

* Colors (bg, surface, borders, accent, complementary)
* Spacing scale
* Typography scale
* Border thickness
* Chamfer size
* Animation timing

Changing global variables must restyle the entire UI.

---

## STRICT RULES

### NEVER:

* Hardcode any value (colors, spacing, font sizes, borders, etc.)
* Modify ProjectData.ts
* Break component interfaces
* Use Tailwind or external UI frameworks
* Use loose TypeScript (no `any`)
* Introduce inconsistent styles across components

### ALWAYS:

* Use CSS variables
* Use SCSS in components
* Maintain strict TypeScript
* Keep UI consistent

---

## ANIMATIONS

* Minimal and consistent
* Fast and mechanical

Allowed:

* Fade
* Small positional shifts
* Sharp hover transitions

Not allowed:

* Bouncy or elastic motion
* Overly decorative animations

---

## COMPONENT RULES

### NavBar

* Minimal, structured
* Clear active state (border or color)

### HeroSection

* Strong visual entry
* Clean hierarchy
* Ensure readability over backgrounds

### ProjectCard

* Must follow:

  * Bottom-right chamfer
  * Thick borders
  * Clean spacing
* No decorative clutter

### ProjectSection

* Clean grid layout
* Consistent spacing

### BlogBackground

* Subtle, non-distracting

### Footer

* Minimal, structured, clear

---

## ASSETS

Use only:

* public/images
* public/videos

Do not rename or replace assets.

---

## TYPESCRIPT

* Strict mode only
* Fully typed props and logic
* No unsafe assumptions

---

## MAINTAINABILITY

* Centralized design system
* No duplicated styles
* Reusable SCSS patterns
* Predictable structure

---

## EXPECTED RESULT

The UI must feel:

* Industrial
* Precise
* Structured
* Clean

Not:

* Flashy
* Glowy
* Overdesigned

---

## FINAL VALIDATION

Before completing:

* No hardcoded values exist
* Yellow is dominant
* Complementary color is consistent
* No glow or shadow-based styling
* Borders define structure
* Chamfer is implemented everywhere required
* Typography hierarchy is correct
* Animations are consistent
* Logic and data remain unchanged

---

If any uncertainty arises:

* Do not guess
* Do not modify logic
* Prefer simpler, consistent solutions
* Focus only on UI correctness
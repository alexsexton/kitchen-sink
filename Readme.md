# Common Design Patterns

Designed as a lightweight scss framework for all dxw projects.

# Key Points

Lean, standards compliant and accessible re-usable code and modules.

CSS classes with consistent and relevant naming conventions. 

We'll use jQuery and only include components common to all projects.

Should work down to IE7 - it'll degrade nicely (hopefully).

## CSS Taxonomy

Any element with a role= gets the same class name.

Name elements using only classes. 

Use .js-[name] or #js-[name] for hooking into JavaScript/jQuery

Do not nest selectors more than 3 levels deep. Will want the output to be efficient.

Remove any rules that are not needed and cleanse before production

## Padding / Margins

Based on multiples of 15px

## JS Components

  - Tabs
  - Responsive Accessible Navigation
  - Image Sliders (bxslider)
  - Sticky Nav
  - Accordion
  - Placeholder Text
  - Matchmedia
  - Enquire

Call jQuery first from Google if this fails call locally

HTML template based loosely on HTML5 Boilderplate

## Accordions
## Clearfix
## Form Validation
## Forms
## Grid Equal Height
## Grid Layouts
## Hidden Text - with progressive disclosure
## Icons
## Image sliders
## Responsive Accessible Drop-down Navigation
## Responsive Images
## Responsive Tables
## SVG Animation
## Tabs
## Tool Tips or Hint Text
## Video Polyfill
# Kitchen Sink

A lightweight and complete framework for projects.

## To Do

Partial out SCSS into folders (partials/common/components)
Load in JS components 
Finish everything

## Key Points

Lean, standards compliant and accessible re-usable code and components.
CSS classes with consistent and relevant naming conventions. 
Should work down to IE7 - it'll hopefully degrade nicely.

## HTML

Based loosely on HTML5 Boilderplate.

## CSS / SCSS

Combines GDS things and my own things and probably some bourbon tings.
Any element with a role= gets the same class name.
Name elements using only classes and for fucks sake give things meaningful names. SMACSS is considered the preferred structure for naming things.
Use .js-[name] or #js-[name] for hooking into JavaScript/jQuery.
Do not nest selectors more than 3 levels deep. We want the output to be efficient.

Included in this repo are:

- Clearfix / Group
- Grid Layout, based on a compound 2/3/4/5 grid or as I call it fractions.
- Forms, mostly lifted from GDS style guide
- Responsive Images
- Icons

## Conventions

Margins and padding based on multiples of 15px at 960px. 
Typographic scale 19px @ 1:1.618 (base font size) 960px @ 1:1.618 (outer wrapper width)

## JS Components

Call jQuery first from Google, then if this fails call locally. Try to use ARIA roles on JS components to increase accessibility. Either inject these with JS or code into document.

### Accordions
### Form Validation
### Grid Equal Height
### Hidden Text - with progressive disclosure
### Image sliders
Using BX slider because it has a destroy method which when combined with enquire.js could very useful. 
  
  - http://bxslider.com/

### Modal Window
  - http://kylefox.ca/jquery-modal/examples/index.html
  - http://www.jacklmoore.com/colorbox/

### Responsive Accessible Drop-down Navigation
  - https://github.com/adobe-accessibility/Accessible-Mega-Menu

### Responsive Tables
### SVG Animation
### Tabs
  - [rolled my own]

### Tool Tips or Hint Text
### Video Polyfill
  - https://github.com/davatron5000/FitVids.js

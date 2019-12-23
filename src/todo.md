# TODO

## general - mobile

- Swiping changes the current tab

## navigation

### navbar

- no shadow from the beginning, only on scroll down
- break into 2 rows on mobile

  - top: logo, contact and hamburger
  - bottom: tabs
  - On scroll down the navbar scrolls up to hide the top part, scrolls down on scroll up

### sidebar - general

- 2-3. Level component (not 1. Level)
- sits as regular content on the screen but can be toggled
- on top of the drawer is a toggle as well es at the same location within the website, when toggled off

### sidebar - mobile

- is hidden per default and can be activated via a button / icon (modal)
- scrolls in from bottom
- tapping anywhere else and / or pressing the X closes the drawer

## helper components / functions

- scroll direction (up / down)
- check if there is a boolean value for the sidebar (toggle on / off)

  - in router as guard?
  - in component?
  - as prop?

- check for device and screen width and listen for changes
  - sidebar should only be able to be toggled on bigger screens

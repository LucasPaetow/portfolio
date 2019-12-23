# sidebar

- setup a conditional statement for the 1. level and the toggled state within the vuex store (if !1Level || toggled)
- Wrap a RAF Animation wrapper around it

- create a toggle on 2-3 level underneath the logo

* create a modal base (darken the screen, go back (via router) on click on the dark screen parts) with a slot for any content (sidebar, modal, alert)
*

### sidebar - mobile

- is hidden per default and can be activated via a button / icon (modal)
- scrolls in from bottom
- tapping anywhere else and / or pressing the X closes the drawer

## helper components / functions

- check if there is a boolean value for the sidebar (toggle on / off)

  - in router as guard?
  - in component?
  - as prop?

- check for device and screen width and listen for changes
  - sidebar should only be able to be toggled on bigger screens

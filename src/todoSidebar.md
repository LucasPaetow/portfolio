# sidebar

- Wrap a RAF Animation wrapper around it

- create a toggle on 2-3 level underneath the logo

### sidebar - mobile

- is hidden per default and can be activated via a button / icon (modal)
- scrolls in from bottom
- tapping anywhere else and / or pressing the X closes the drawer
  -> create a modal base (darken the screen, go back (via router) on click on the dark screen parts) with a slot for any content (sidebar, modal, alert)

## helper components / functions

- check if there is a boolean value for the sidebar (toggle on / off)

  - in router as guard?
  - in component?
  - as prop?

## implementation

### option 1

- position via grid (min-content 1fr)=> route-view (col: 1/3, zIndex: 2) is above the sidebar (col: 1/3, zIndex: -1) on mobile
- on toggle: sidebar gets translated to the bottom, gets a higher z-index and can reappear as modal if wanted

Problems?

- how to put this in a modal wrapper on mobile?

### option 2 - favourite!

- sidebar gets display none on mobile and the component is used within the modal base

Problems?

- has to be used twice and has to be self sufficient on both instances

# @piximi/navigation-drawer

Piximi’s `NavigationDrawer` component

## Installation

```sh
yarn add @piximi/navigation-drawer
```

## Usage

```jsx

<Provider store={store}>
  <ThemeProvider theme={theme}>
    <DndProvider backend={HTML5Backend}>
      <NavigationDrawer toggled={openedDrawer} toggle={toggleDrawer} />
    </DndProvider>
  </ThemeProvider>
</Provider>
```

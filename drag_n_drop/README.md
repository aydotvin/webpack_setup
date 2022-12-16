## Objective

-   This project demonstrates the concepts that is enough to implement a drag and drop functionality.

## How to run?

-   `npm i`
-   `npm run start` - port is set to `4200`, if it's already occupied, change it in `package.json`.

## Elements

1. `Card.js` - the item that is being dragged from one state to another.
1. `Board.js` - contains the states on which the card is being dropped.

## Steps

### In `Card.js`

1. Make the card draggable by setting `draggable` attribute on the card to true.
1. Set an `onDragStart` listener on the card and once it is started, take the card data and set it to `dataTransfer` object of the event using `setData` function of `dataTransfer`.

### In `Board.js`

1. Set an `onDrop` listener on the element on which the drop happens.
    - Pass a function that will take the card data from `dataTransfer` object using `getData` function of `dataTransfer`.
    - Check the initial state of the card data and the newly dragged state and make appropriate changes and set new data.
1. By defult, browser prevents the `drop` events on elements. So `onDragOver`, prevent the default behavior using `preventDefault()` and `stopPropagation()`.

## Important methods:

-   `onDragStart`, `onDrop`, `onDragOver`

## Other methods:

-   `onDragEnd`, `onDragEnter` - these can be used to update the style of the components as required.


## References:
-	[W3Schools - HTML Drag and Drop API](https://www.w3schools.com/html/html5_draganddrop.asp)
-	[W3Schools - ondragstart Event](https://www.w3schools.com/jsref/event_ondragstart.asp)
-	[Stack Overflow - onDrop Issue](https://stackoverflow.com/questions/50230048/react-ondrop-is-not-firing/50230145)
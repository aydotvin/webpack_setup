-   Install the following packages.\
    `npm install @mui/material @emotion/react @emotion/styled`

    -   `@mui/material` is the core material UI package.
    -   `@emotion/react` is the package for writing css styles with js and is the default for mui v5.

    -   `npm install @mui/icons-material` for the icons set provided by mui.

## Typography

-   Import `Typography` component from material ui library.\
    `import { Typography } from "@mui/material";`

-   Use the component, set the appropriate varient and put the text content within the tags.

### Varients:

-   `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `subtitle1`, `subtitle2`, `body1`, `body2`.
-   varient `subtitle1` and `subtitle2` uses the h6 tag with different styles.

-   varient `body1` is the default value of varient property.

-   By passing the `component` prop to a `<Typography>` component, any varient style can be used on a different html element.\
    `<Typography variant="h3" component={"h1"}>H3 heading</Typography>`

    -   The above example says, I need a `h1` html tag with the style of an `h3` varient.

-   `gutterBottom` prop is used to add a margin to the Typography component. Larger the varient, larger is the margin applied on it.

---

## Buttons

-   Syntax: `<Button variant="text">Button text</Button>`

### Varients:

-   `text` - for non-destructive actions
-   `contained` - for primary actions
-   `outlined` - for secondary actions

-   By default `<Button>` component will render html button element.
-   Passing `href` attribute to the `<Button>` would turn it into a `<a>` tag.

### Colors:

-   `<Button variant="contained" color="primary">primary</Button>`
-   primary
-   secondary
-   success
-   error
-   info
-   warning

### Size:

-   `<Button variant="contained" size="small">small</Button>`
-   small
-   medium
-   large

### Button icons:

-   Import icons from package,\
    `import SendIcon from "@mui/icons-material/Send";`
-   Button with text and icon,\
    `<Button variant="contained" startIcon={<SendIcon />}>Send</Button>`
-   Button with only icon,\
    `<IconButton aria-label="send" color="warning" size="large"><SendIcon /></IconButton>`

### Styling:

-   `disableElevation` - this attribute removes the box shadow from the button
-   `disableRipple` - this attribute removes the ripple on click and focus from the button
-   `disableFocusRipple` - this attribute removes the ripple on click and focus from the button

### Button group:

-   Import ButtonGroup from `@mui/material` and wrap the related buttons with it.
-   Pass the `orientation` attribute to the `<ButtonGroup>` to make the buttons vertical/horizontal. Horizontal by default.
-   `varient`, `size` and `color` is to be passed to the `<ButtonGroup>`, but can also be passed to inner individual `<Button>`s.
-   onClick is to be passed to individual `<Button>`s, but can also be passed to the `<ButtonGroup>`.

### Toggle group:

-   Used to display gruop of related buttons that act as toggle switches.
-   `ToggleButtonGroup` supports the following properties/attributes,
    -   `size` - can also be passed to the individual `ToggleButton`s.
    -   `color` - can also be passed to the individual `ToggleButton`s.
    -   `orientation` - horizontal by default.
    -   `exclusive` - Will make the ToggleGroup act like a radio button where only one can be selected at a time.

---

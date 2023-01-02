-   Install the following packages.\
    `npm install @mui/material @emotion/react @emotion/styled`

    -   `@mui/material` is the core material UI package.
    -   `@emotion/react` is the package for writing css styles with js and is the default for mui v5.

    -   `npm install @mui/icons-material` for the icons set provided by mui.

---

## Typography

-   Import `Typography` component from material ui library.\
    `import { Typography } from "@mui/material";`

-   Use the component, set the appropriate variant and put the text content within the tags.

### Variants:

-   `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `subtitle1`, `subtitle2`, `body1`, `body2`.
-   variant `subtitle1` and `subtitle2` uses the h6 tag with different styles.

-   variant `body1` is the default value of variant property.

-   By passing the `component` prop to a `<Typography>` component, any variant style can be used on a different html element.\
    `<Typography variant="h3" component={"h1"}>H3 heading</Typography>`

    -   The above example says, I need a `h1` html tag with the style of an `h3` variant.

-   `gutterBottom` prop is used to add a margin to the Typography component. Larger the variant, larger is the margin applied on it.

---

## Buttons

-   Syntax: `<Button variant="text">Button text</Button>`

### Variants:

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
-   `variant`, `size` and `color` is to be passed to the `<ButtonGroup>`, but can also be passed to inner individual `<Button>`s.
-   onClick is to be passed to individual `<Button>`s, but can also be passed to the `<ButtonGroup>`.

### Toggle group:

-   Used to display gruop of related buttons that act as toggle switches.
-   `ToggleButtonGroup` supports the following properties/attributes,
    -   `size` - can also be passed to the individual `ToggleButton`s.
    -   `color` - can also be passed to the individual `ToggleButton`s.
    -   `orientation` - horizontal by default.
    -   `exclusive` - Will make the ToggleGroup act like a radio button where only one can be selected at a time.

---

## Text field

### Variants:

-   `variant="outlined"` - default variant.
-   `variant="filled"`
-   `variant="standard"`

### Size:

-   `size="small"`
-   `size="medium"` - default size.

### Color:

-   primary
-   secondary
-   success
-   error
-   info
-   warning

### `type` - to declare the type of the input. (text, password, etc.)

### `required` - makes the input mandatory

### `helperText` - additional text info that is shown at the bottom of the input.

### `InputProps`:

-   An object that contains the props applied to the Input component.
-   [Input component properties](https://mui.com/material-ui/api/input/)

### `inputProps`:

-   An object that contains the props applied to the input DOM element.
-   [input DOM element properties](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes)

### Pre and Post fix of symbols:

-   Import the `InputAdornment`
-   Give it a position attribute. (start or end)
-   Pass this component as a value for startAdornment or endAdornment in the `InputProps` object.
-   Example:

```
-	<TextField label="Amount" type="number" required InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}></TextField>
-	<TextField label="Weight" required InputProps={{ endAdornment: <InputAdornment position="end">Kg</InputAdornment> }}></TextField>
```

---

## Select: Using TextField

-   This takes the entire available width, so fix the parent container width.
-   Import the TextField and the MenuItem from mui.

```
import { TextField, MenuItem } from "@mui/material";
```

-   Pass a `select` property to the `TextField` and pass the `MenuItem`s with value and display text inside the `TextField`.

-   To make a multi select, pass `multiple` as true in the `SelectProps` object and pass the `SelectProps` as a property to the `TextField`.

-   `size`, `color` and `helperText` are applicable to this.

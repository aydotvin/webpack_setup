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
### Example from neo:
```
	<Select
		value={disclosureAction}
		onChange={handleDisclosureActionChange}
		disabled={isDisclosureActionSelectDisabled}
		displayEmpty={true}
		className={`${styles.disclosureActions} ${textColorClass}`}
		size="small"
		IconComponent={SelectDownArrow}
		sx={{
			"&& .MuiOutlinedInput-notchedOutline": {
				border: "1px solid #484850",
			},
		}}
		MenuProps={{
			sx: {
				"&& .Mui-selected": {
					backgroundColor: "#BDD8FA",
					color: "black",
				},
				"&& :not(.Mui-selected)": {
					color: "#939393",
				},
				"&& .MuiList-root": {
					padding: "8px",
				},
			},
		}}
		style={{ color: "#3876C4", fontFamily: "poppins_medium", border: "1px solid #707070" }}
	>
		<MenuItem value="" style={{ ...optionStyles, display: "none", backgroundColor: "white" }} disabled>
			Please Select
		</MenuItem>
		<MenuItem value="value_1" style={optionStyles}>
			Disclosure Read
		</MenuItem>
		<MenuItem value="value_2" style={optionStyles}>
			Disclosure Not Read
		</MenuItem>
		<MenuItem value="value_3" style={optionStyles}>
			Revert to Verbal
		</MenuItem>
		<MenuItem value="value_4" style={{ ...optionStyles, borderBottom: "none" }}>
			Disclosure Disconnected/Abandoned
		</MenuItem>
	</Select>
```

---

## Radio:

-   Import the following components,

    -   `FormControl` - wrapper component.
    -   `FormLabel` - label for group of radios.
    -   `RadioGroup` - wraps individual radio components.
    -   `FormControlLabel` - label for individual radio.
    -   `Radio` - radio element.
    -   `FormHelperText` - helper text.

-   Syntax:

```
<FormControl>
	<FormLabel>Years of Experience</FormLabel>
	<RadioGroup name="job-experience-group" value={value} onChange={handleExperienceChange} row>
		<FormControlLabel control={<Radio size="small" color="warning" />} label="0-2" value="0-2" />
		...
	</RadioGroup>
</FormControl>
```

-   To show error state, add the `error` prop on the `FormControl` and set the `FormHelperText` at the bottom.
-   Color and size are applicable to the `Radio` component.

---

## Checkbox:

-   Import the following components,

    -   `FormControl` - wrapper component.
    -   `FormLabel` - label for group of radios.
    -   `FormGroup` - wraps individual checkbox components.
    -   `FormControlLabel` - label for individual checkbox.
    -   `Checkbox` - checkbox element.
    -   `FormHelperText` - helper text.

### Multiple checkbox syntax:

```
<FormControl>
	<FormLabel>Skills</FormLabel>
	<FormGroup row>
		<FormControlLabel
			label="HTML"
			value="html"
			control={<Checkbox checked={skills.includes("html")} onChange={handleSkillChange} size="small" color="warning" />}
		/>
		...
	</FormGroup>
</FormControl>
```

### Single checkbox with label syntax:

```
<FormControlLabel label="I accept terms and conditions" control={<Checkbox checked={acceptTnC} onChange={handleTncChange} />}></FormControlLabel>
```

### Single checkbox without label syntax:

```
<Checkbox icon={<BookmarkBorder></BookmarkBorder>} checkedIcon={<Bookmark></Bookmark>} checked={acceptTnC} onChange={handleTncChange} color="success" />
```

-   To show error state, add the `error` prop on the `FormControl` and set the `FormHelperText` at the bottom.

-   Color and size are applicable to the `Checkbox` component.

---

## Switch

-   Similar to the checkbox. Import `Switch` instead of `Checkbox`.

---

## Rating

-   Import the following,
    -   `Stack`, `Rating`

### Rating properties:

-   `value` - takes a number for showing the ratings.
-   `onChange` - returns the event and a number that is the user given rating.
-   `precision` - determines the resolution/intervals of the rating (0-1).
-   `icon` - icon to display for selected rating.
-   `emptyIcon` - icon to display for non selected rating.
-   `readOnly` - makes it readonly.
-   `highlightSelectedOnly` - only highlights the highest rating. Useful if emoji's are used to track emotion of user.
-   `size` - for size (small, medium, large).
-   `color` - for color.

---

## Autocomplete

-   Import the following,
    -   `Stack`, `Autocomplete`, `TextField`

### Autocomplete properties:

-   `options` - array of strings or array of objects with label property in each.
-   `renderInput` - The element to render upon focus.
-   `value` - selected value (state data).
-   `onChange` - set the state data to update `value`.
-   `freeSolo` - boolean - allow user to enter any value. Otherwise only the values in options are allowed to be selected.

---

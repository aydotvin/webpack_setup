-   Install the following packages.\
    `npm install @mui/material @emotion/react @emotion/styled`
    -   `@mui/material` is the core material UI package.
    -   `@emotion/react` is the package for writing css styles with js and is the default for mui v5.

## Typography

-   Import `Typography` component from material ui library.\
    `import { Typography } from "@mui/material";`

-   Use the component, set the appropriate varient and put the text content within the tags.

-   varient `subtitle1` and `subtitle2` uses the h6 tag with different styles.

-   varient `body1` is the default value of varient property.

-   By passing the `component` prop to a `<Typography>` component, any varient style can be used on a different html element.\
    `<Typography variant="h3" component={"h1"}>
		H3 heading
	</Typography>`

    -   The above example says, I need a `h1` html tag with the style of an `h3` varient.

-   `gutterBottom` prop is used to add a margin to the Typography component. Larger the varient, larger is the margin applied on it.

## Higher-Order Components

> Higher-order component is a `function` that takes a component and returns an enhanced component. This holds the common functionality that can be shared with multiple related components.

`const EnhancedComponent = higherOrderComponent(OriginalComponent);`

- HOC file name starts with `with` - withCounter, withLogic, withData, etc.
- The higher order `function` (HOF) does the following,
  - Receives the original component,
  - Creates a new component with common logic, this new component returns the original component with the logic result passed as props.
  - HOF returns the newly created component with custom common logic added to the original component.
- In the multiple related components, import the HOF and while exporting the component, call the HOF passing the component.

### Passing props from parent component to wrapped components:

- The props passed from the parent component will be received by the HOC and not the component.
- The props needs to be passed (via spreading) from HOC to the `WrappedComponent` while returning it.

### Note:

- The logic can also be extracted to a custom hook.

### Difference:

- HOC can render JSX and hooks cannot.

### Poor use-case for HOCs if:

- The behavior requires adding a bunch of props to a component.
- The behavior is only used in one component.
- The behavior must be customized for each component which uses it.

### Good use-case for HOCs if:

- The behavior is not specific to any single component, but rather applies to many or all components in the app, and
- The behavior doesn’t need to provide a bunch of props to the components that use it.
- Components can be used stand-alone without the behavior from the HOC.
- No custom logic needs to be added to a component being wrapped by the HOC.

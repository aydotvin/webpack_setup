## Performance optimisation:

-   Dynamic asset import.

```
    import(`@Asset/help/${client}/user_guide.pdf`).then((pdf) => {
    	setPdfFile(pdf.default);
    });
```

-   Importing components only when they are requried to be displayed:

    -   onclick event > lazy import the component and set its default to the state. and if the state is there, then render that component.

    ```
    	const [Comp, setComponent] = useState(null);
    	const handleClick = async ()=>{
    		const Comp = (await import("./src/Component1")).default;
    		setComponent(Comp);
    	}
    	if(Comp){return <Comp></Comp> }
    ```

-   Using "loadable" package instead of stock lazy-suspense
    -   loadable component > on mouse over > loadbleComponent.preload()

---

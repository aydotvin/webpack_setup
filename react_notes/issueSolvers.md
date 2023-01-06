## REACT MODAL - (react-modal)

1. ### Issue:

   - When using this package, it throws the following aria related error in console.\
     `Warning: react-modal: App element is not defined. Please use Modal.setAppElement(el) or set appElement={el}"`

   ### Solution:

   - Set ariaHideApp attribute as false.\
     `<Modal ... ariaHideApp={false}></Modal>`

1. ### Issue:

   - Modal gets closed when clicked outside the modal.

   ### Solution:

   - Set shouldCloseOnOverlayClick atribute to false.\
     `<Modal ... shouldCloseOnOverlayClick={false}></Modal>`

---

## Routing/Router/Route

1.  ### Issue/Requirement:

    - To get the current URL and pathname in React.

    ### Solution:

    - Import "useLocation" hook from `react-router-dom` - this provides the pathname property that gives the current path of the application.

    ```
    	import { useLocation } from 'react-router-dom';
    	const usePathname = () => {
    		const location = useLocation();
    		return location.pathname;
    	}
    ```

1.  ### Issue/Requirement:

    - To use Link without giving any path.

    ### Solution:

    - Use # instead of giving a path and the onClick listener can be added for it.

---

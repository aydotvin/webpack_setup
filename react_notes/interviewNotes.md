## Class vs functional components:

- When class components are rerendered, the initial object is mutated again and again.
- When FCs are rerendered, a new object is created every time. This is why usestate can be updated even though it is declared as a const.
- Due to this timers initiated in the FCs are not automatically cleared while rerendering.

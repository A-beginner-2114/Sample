1. What are the differences between functional and class components ; in context of handling props and state.

A Functional component is pure JavaScript function that returns a React element. There will be no render methods. In a class component, a render function is created. Functional components are also called 'Stateless components' as they only accept and display them. But class components are 'Stateful components' as they implement state. But React Hooks allows you to use state variables  in Functional components.


2. Why and how react uses virtual DOM ?
Why : Virtual DOM is lighter than actual DOM so updating virtual DOM is fast, which makes the work to get finished faster. VDOMs increases the performance of React.

How : React updates any change in the state of it's components in VDOM. React uses two virtual DOMs at a time and one will be updated constantly. It compares both of them and just updates the difference to the pre-updated version. This process is called 'Diffing'. Actual DOM is updated with several groups of changes.


3. Explain different phases of component life cycle. Compare mounting and updating with React Hooks.

The life cycle of a component includes three phases : Mounting, Updating, Unmounting.

Mounting is when the components gets rendered for the first time, and adding elements into DOM. The constructor() method is always called first. getDerivedstateFromProps() and render() method is called to render the HTML into the DOM. Then componentDidMount() is executed.

Updating is done when there is a change in state or props and the change gets updated. React calls getDerivedFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), componentsDidUpdate() methods to update a component.

Unmounting is when the component gets removed from the DOM. react calls the method componentWillUnmount() for this phase as default.


4. What is threading in Node.js ?

Thread, in simple words means flow of control. There are two types of threads in Node.js. Main thread and Auxiliary threads from the main thread. As Node.js is single-threaded language, even if one of their threads is blocked, the main thread also gets blocked, so is the entire flow.


5.How Node.js handles concurrency ?

Even if Node.js is a single-threaded, its asynchronous nature helps to maintain concurrency. Node.js uses event loop, an infinite loop that does and wait for tasks. The event loop works in  a queue (FIFO).This way, Node.js is able to handle concurrency.

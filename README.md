# Getting Started with React hooks
Function componant are the most used in react because the simplecity and require less code , when we use function strategy we will lose two main features , a state of the rendred componant and the behaver (mount , unmont , ..)
## useState
the useState hook return an array with two values , the first value is the data and the second value is a refrence to the function that can be used to update the data
## useEffect
to implement a pure function with same calls to the backend or same loggin stuff or same DOM manipulation with an event , we must use a side-effect method to observe.
the useEffect hook is used to observe the side-effect in a function componant , it is capable for handing componentDidMount() , componentDidUpdate() and componentWillUnmount() ,
## useContext

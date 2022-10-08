import React from "react";
export default function Reactqstns() {
    const showans = () => {
        const btns = document.querySelectorAll(".question-btn");
        btns.forEach(function (btn) {
            btn.addEventListener("click", (e) => {
                const question = e.currentTarget.parentElement.parentElement;
                question.classList.toggle("show-text");
            })
        })
    }
    const functCompEx = () => {
        return `
import React from 'react';
export const Greet = () => <h1>Hello Shanwik</h1>
`
    }
    const classCompEx = () => {
        return `
import React, {Component} from 'react';
class Welcome extends Component {
    render(){
        return <h1>Welcome shanwik Vihas</h1>
}
}
export default Welcome;
`
    }
    const useCallbackEx = () => {
        return `
import { useCallback } from 'react';
export function MyParent({ term }) {
  const onClick = useCallback(event => {
    console.log('Clicked Item : ', event.currentTarget);
  }, [item]);
  return (
    <Listitem={item} onClick={onClick}
    />
  );
}`
    }
    const keyEx = () => {
        return `
const todoList = todos.map((todo)=>{
return(
<li key={todo.toString()}>
  {todo}
</li>
)
})`
    }
    return (
        <section className="questions">
            <div className="container">
                <div className="Table">
                    <div className="sidebar">
                        <h3>React Interview questions 2022</h3>
                        <nav>
                                <ul className="nav">
                                    <li>
                                        <a href="#whatisreact" title="What is React">1. What is React ?</a>
                                    </li>
                                    <li>
                                        <a href="#funcandclass" title="What are the differences between functional and class components">2. What are the differences between functional and class components ?</a>
                                    </li>
                                    <li>
                                        <a href="#virtualdom" title="What is the virtual DOM ">3.What is the virtual DOM ? Explain how react make use of virtual DOM ?</a>
                                    </li>
                                    <li>
                                        <a href="#stateandprops" title="">4. Explain state and props in React ?</a>
                                    </li>
                                    <li>
                                        <a href="#propdrilling" title="">5. Explain about prop drilling in React?</a>
                                    </li>
                                    <li>
                                        <a href="#errorboundary" title="">6. What is an error boundary in React ?</a>
                                    </li>
                                    <li>
                                        <a href="#hooks" title="">7. What are hooks in React and why we use hooks ?</a>
                                    </li>
                                    <li>
                                        <a href="#keys" title="">8. Explain use of keys in React ?</a>
                                    </li>
                                    <li>
                                        <a href="#sideeffects" title="">9. What are side effects in React component ?</a>
                                    </li>
                                    <li>
                                        <a href="#avoidrerenders" title="">10. How to avoid re-renders and improve performance in React?</a>
                                    </li>
                                    <li>
                                        <a href="#lazyloading" title="">11. What is lazy loading ?</a>
                                    </li>
                                    <li>
                                        <a href="#lifecyclecomps" title="">12. What are the different phases of the component lifecycle ?</a>
                                    </li>
                                    <li>
                                        <a href="#reactrouter" title="">13. What is React Router?</a>
                                    </li>
                                    <li>
                                        <a href="#reactredux" title="">14. Explain how React-Redux flow works ?</a>
                                    </li>
                                </ul>
                        </nav>
                      
                    </div>
                </div>
                <div className="qstns">
                    <section id="whatisreact">
                        <h4>1. What is React ?</h4>
                        <p>
                            React is a free and open-source front-end JavaScript library used for building user interfaces. It is now one of the most commonly used frontend libraries for web development. <br />
                            <strong>Features of React :</strong> <br />
                            <strong>1. Reusable UI components: </strong>React is build using componenets. Components can be reused for developing web view.<br />
                            <strong>2. Performance: </strong>React make use of virtual DOM for manipulations rather than real DOM due to which it is well known for its performance.<br />
                            <strong>3. JSX : </strong>JSX is a combination of HTML and JavaScript. You can embed JavaScript objects inside the HTML elements. JSX makes it super easy for developers to write the building blocks.<br />
                            <strong>4. Simplicity: </strong>React is simple to use and learn.
                        </p>
                    </section>
                    <section id="funcandclass">
                        <h4>2. What are the differences between functional and class components ?</h4>
                        <p>
                            <strong>Functional components :</strong>Functional components are nothing but Javascript functions. They can optionally accept an input of properties which is referred to as props and
                            return HTML(JSX) which describes the UI.<br />
                            <pre>
                                <code>
                                    {functCompEx()}
                                </code>
                            </pre>
                            <br />
                            <strong>Class components :</strong>Class components are basically ES6 classes. Similar to functional components, they can also optionally accept an input of properties which is referred to as props and
                            return HTML(JSX). Apart from props, class components has state object which maintains information related to that component and use that information to describe the UI.
                            In addition, Class comp's extend Component class from React, and impents render method which returns HTML(JSX) element.
                            <pre>
                                <code>
                                    {classCompEx()}
                                </code>
                            </pre>
                        </p>
                    </section>
                    <section id="virtualdom">
                        <h4>3.What is the virtual DOM ? Explain how react make use of virtual DOM ?</h4>
                        <p>
                            DOM manipulation is the heart of the interactive web. Unfortunately it is much slower than all the JS operations. To resolve this problem, React popularized something called the virtual DOM. <br />
                            <strong>Virtual DOM :</strong> In React, for every DOM object, there is a corresponding <strong>virtual DOM object</strong>. A virtual DOM object is a representation of a DOM object, like a lightweight copy.
                            A virtual DOM object has the same properties as a real DOM object, but it lacks the real things power to directly change what is on the screen. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen.<br />
                            <strong>How it works in React :</strong> Once the virtual DOM has updated, then React compares the virtual DOM with a virtual DOM snapshot that was taken right before the update.
                            By comparing the new virtual DOM with a pre-update version, React figures out exactly which virtual DOM objects have changed. This process is called diffing.
                            Once React knows which virtual DOM objects have changed, then React updates those objects, and only those objects, on the real DOM. This makes a big difference wrt performance.
                        </p>
                    </section>
                    <section id="stateandprops">
                        <h4>4. Explain state and props in React ?</h4>
                        <p>
                            <strong>Props : </strong> Props(properties) is optional input that any component can accept. We use props in React to pass data from one component to other (can be from parent component to child component(s)). Props are immutable so we cannot modify the props data inside the component.<br />
                            <strong>state : </strong> Every class component in React has built-in state object. State object is where you store property values that belong to that component. When the value of state object changes, the component re-renders in React. State is not available in functional components, but the same can be achieved using Hooks.
                        </p>
                    </section>
                    <section id="propdrilling">
                        <h4>5. Explain about prop drilling in React?</h4>
                        <p>
                            Prop drilling is a concept in which there comes a need to send data(props) from Parent component (or from component that is higher in hierarchy) to a child component which is deeply nested. In this process,
                            we start sending the data from source component and keep passing the prop to the next component till it reaches its destination component. The disadvantage of prop drilling is each and every component which
                            need not require that data will have access to it.

                        </p>
                    </section>
                    <section id="errorboundary">
                        <h4>6. What is an error boundary in React ?</h4>
                        <p>
                            Any class component that implements either one or both of the below mentioned lifecycle methods becomes an error boundary. <br />
                            <strong>static getDerivedStateFromError(error)</strong> <br />
                            <strong>componentDidCatch(error, info)</strong> <br />
                            We could see that many a times, run time errors during rendering could put our application in broken state. In that stage, React unmounts whole react component tree.
                            It would be great if we could catch the errors anywhere in the component tree and display a fallback UI. This is where error boundary comes into spotlight.
                            <br />
                            <strong>static getDerivedStateFromError(error) : </strong> This method is used to render a fallback UI after an error is thrown. <br />
                            <strong>componentDidCatch(error, info) : </strong> This method is used to log the error information.
                        </p>
                    </section>
                    <section id="hooks">
                        <h4>7. What are hooks in React and why we use hooks ?</h4>
                        <p>
                            Hooks are a new feature addition in React version 16.8, which allows you to use React features without having to write a class. <br />
                            ex: State and lifecycle features <br />
                            Hooks are only for functional components. <br />
                            <strong>Why Hooks ? </strong><br />
                            Until React version 16.8, functional components were called stateless components. Only class components were used for state management and lifecycle methods.
                            The need to change a functional component to a class component, whenever state management or lifecycle methods were to be used, led to the development of Hooks
                        </p>
                    </section>
                    <section id="keys">
                        <h4>8. Explain use of keys in React ?</h4>
                        <p>
                            A key is a special string attribute you need to include when creating lists of elements in React. Keys help react identify which items in the list are changed, updated,
                            or deleted which helps in effecient update of the user interface. In other words, keys are used to give an identity to the elements in the lists. <br />
                            <br />
                            {keyEx()}
                        </p>
                    </section>
                    <section id="sideeffects">
                        <h4>9. What are side effects in React component ?</h4>
                        <p>
                            Side effects can be everything that might be happening in your application that is not directly related to UI rendering. For ex: sending http request to server,
                            storing data in browser storage, working with timer functions etc.  When these tasks are performed we are not rendering anything on UI, so these tasks must happen outside a normal component evaluation.
                            To work with side effects, we use useEffect hook.
                        </p>
                    </section>
                    <section id="avoidrerenders">
                        <h4>10. How to avoid re-renders and improve performance in React?</h4>
                        <p>
                            Unwanted re-renderings can be prevented and improve performance using below techniques. <br />
                            <strong> 1. useMemo 2. useCallback 3. React.memo 4. Extending pure component </strong> <br />
                            <strong> useMemo : </strong> These Hooks reduce re-renderings by caching and returning the same result if the inputs are the same without any computations.
                            When the inputs change, the cache gets invalidated and the new component state gets rendered. <br />
                                
                                    const cachedValue = useMemo(() => multiply(x, y), [x, y]) <br />
                            The above computed result is stored in the cachedValue variable and useMemo() Hook will return it each time unless the inputs are changed. <br />
                            <strong> useCallBack : </strong> Unlike useMemo(), it does not cache the result. Instead, it memoizes the callback function provided to it. <br />
                            <pre>
                                <code>
                                    {useCallbackEx()}
                                </code>
                            </pre>
                            <br />
                            <strong> React.memo() : </strong> Using memo will cause React to skip rendering a component if its props have not changed. Wrap the component with memo during export<br />.
                            eg: export default React.memo(Todos);<br />
                            <strong>PureComponent : </strong> We can extend Pure component class from React instead of Component class. A pure component implements
                            <strong>shouldComponentUpdate</strong> with a shallow prop and state comparision. It does shallow comparision of previous props with current props and
                            previous state with current state. If there is any difference only then it re-renders the component. <br />
                            class parentComp extends PureComponent
                        </p>
                    </section>
                    <section id="lazyloading">
                        <h4>11. What is lazy loading ?</h4>
                        <p>
                            Lazy loading is a type of technique used to improve performance of website. Using this technique we load the data dynamically i.e., it fetched data on demand.
                            We can minimize the number of network call per second.
                        </p>
                    </section>
                    <section id="lifecyclecomps">
                        <h4>12. What are the different phases of the component lifecycle ?</h4>
                        <p>
                            Below are the four different phases of Component life cycle. <br />
                            1. Mounting 2. Updating 3. UnMounting 4. ErrorHandling <br />
                            <strong>Mounting :</strong> Methods in this phase will be called when an instance of component is being created and inserted into DOM . <br />
                            constructor(), static getDerivedStateFromProps(props, state), render(), componentDidMount() . <br />
                            <strong>Updating :</strong> Methods in this phase will be called when a component is being re-rendered as a result of changes to either its props or state. <br />
                            constructor(), static getDerivedStateFromProps(props, state), render(), getSnapshotBeforeUpdate(), componentDidUpdate(). <br />
                            <strong>UnMounting :</strong> Methods in this phase will be called when a component is being removed from the DOM. <br />
                            componentWillUnmount() <br />
                            <strong>ErrorHandling :</strong> Methods in this phase will be called when there is an error during rendering, in a life cycle method, or in the constructor of any child component.<br />
                            static getDerivedStateFromError(error), componentDidCatch(error, errorInfo) <br />
                        </p>
                    </section>
                    <section id="reactrouter">
                        <h4>13. What is React Router?</h4>
                        <p>
                            It is a fully featured client and server side routing library for React. Helps create and navigate between different URL's that make up your web application.
                            Provides unique URL's for different components in the app and makes the UI easily sharable with others. <br />
                            <strong>Most common components used are :</strong> Browser Router, Routes, Route, Link.
                        </p>
                    </section>
                    <section id="reactredux">
                        <h4>14. Explain how React-Redux flow works ?</h4>
                        <p>
                                Redux is state management tool. <br />
                                <strong>Basic idea behind Redux : </strong> A single centralized place to store the state and you can use it to any component without worrying about the hierarchy.  <br />
                                Few important redux terms in brief are stated below : <br />
                                <strong>STORE : </strong>Store is place where states are globally maintained. <br />
                                <strong>ACTION : </strong> Action is name of the task we would like to perform. It is a simple JS function that returns an object with type as action name.<br />
                                <strong>REDUCER : </strong>Reducer is responsible for taking care of action ie., handles state change. <br />
                                <strong>DISPATCH : </strong>Dispatch is basically Call/execute an action. <br />
                                So, to understand the redux flow we first create store and then we create actions. 
                                Now create reducers with state(pass initial value) and action as arguments. In reducers we perform state change based on action type i.e, we write actual implementation based on our actions.
                                Now pass in created reducer(s) to store. So the control is, when we dispatch an action the control goes to action which returns
                                action type. From here control goes to reducer. In reducer since we change the value of state, so it reflects in global store.
                                So, to connect react with redux, we have to wrap our App component inside Provider Component, which is available in react-redux package. To the provider component we pass
                                store attribute as property with value equal to above created store. With this, we say that we are providing store to app.js.
                                The next thing is App.js should have access to state, so for this we use useSelector function from react-redux package. Now, to dispatch an action in App.js we make use of
                                useDispatch function from same react-redux package. This is how react redux flow works.
                        </p>
                    </section>
                </div>
            </div>          
        </section>
    )
}

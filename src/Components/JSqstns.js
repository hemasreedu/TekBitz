import React from "react";
export default function JSqstns() {
    const showans = () => {
        const btns = document.querySelectorAll(".question-btn");
        btns.forEach(function (btn) {
            btn.addEventListener("click", (e) => {
                const question = e.currentTarget.parentElement.parentElement;
                question.classList.toggle("show-text");
            })
        })
    }
    const hoisteg = () => {
        return `
    console.log(a);.
    greet();
    a = 10;
    function greet() {
        console.log('Hi, there..');
    }`
    }
    const closureg = () => {
        return `function y() {  
    let a = 10;
    function x()
    {
    var b=10;
    console.log(a,b)
    }
    x();
    }
    y();`
    }
    const callbackeg = () => {
        return `
//Higher order function
function greet(name, callback)
                {
                console.log('Hi' + ' ' + name);
                callback();
                }

// callback function
function callMe(){
                console.log('I am callback function');
                }

// passing function as an argument
greet('Shanwik', callMe);`
    }
    const shadowingeg = () => {
        return `
var x = "global";
function foo(){
let x = "function";
// here variable x is shadowing variable in outer scope.
        }
`
    }
    const curryingeg = () => {
        return `
function calculateVolume(length)
{
    return function (breadth)
{
    return function (height)
{
    return length * breadth * height;
                }
            }
        }
console.log(calculateVolume(4)(5)(6));`
    }
    return (
        <section className="questions">  
            <div className="container">
                <div className="Table">
                    <div className="sidebar">
                        <h3>Javascript Interview questions 2022</h3>
                        <nav>
                            <ul className="nav">
                                <li>
                                    <a href="#IsJSSync" title="1. Is Javascript synchronous or asynchronous language ?">1. Is Javascript synchronous or asynchronous language ?</a>
                                </li>
                                <li>
                                    <a href="#hoist" title="2. Explain hoisting in Javascript ?">2. Explain hoisting in Javascript ?</a>
                                </li>
                                <li>
                                    <a href="#undefinednotdefined" title="3. Explain difference between not-defined & undefined in JS ?">3. Explain difference between not-defined & undefined in JS ?</a>
                                </li>
                                <li>
                                    <a href="#thiskeyword" title="4. Explain this keyword in Javascript ?">4. Explain this keyword in Javascript ?</a>
                                </li>
                                <li>
                                    <a href="#lexicalenv" title="5. Explain the term Lexical environment in Javascript ?">5. Explain the term Lexical environment in Javascript ?</a>
                                </li>
                                <li>
                                    <a href="#variablesinjs" title="6. Difference between let,const and var in JavaScript ?">6. Difference between let,const and var in JavaScript ?</a>
                                </li>
                                <li>
                                    <a href="#closures" title="7. Explain closures in JavaScript ?">7. Explain closures in JavaScript ?</a>
                                </li>
                                <li>
                                    <a href="#callbackfuncs" title="8. Explain callback functions in JavaScript ?">8. Explain callback functions in JavaScript ?</a>
                                </li>
                                <li>
                                    <a href="#eventloop" title="9. What is event loop in JavaScript ?">9. What is event loop in JavaScript ?</a>
                                </li>
                                <li>
                                    <a href="#hocfuncs" title="10. What are higher order functions in JavaScript ?">10. What are higher order functions in JavaScript ?</a>
                                </li>
                                <li>
                                    <a href="#MRF" title="11. Explain how Map,filter and reduce are used in JavaScript ?">11. Explain how Map,filter and reduce are used in JavaScript ?</a>
                                </li>
                                <li>
                                    <a href="#Callapplybind" title="12. Explain call, apply and bind in JavaScript ?">12. Explain call, apply and bind in JavaScript ?</a>
                                </li>
                                <li>
                                    <a href="#shadowing" title="13. What is shadowing in JavaScript ?">13. What is shadowing in JavaScript ?</a>
                                </li>
                                <li>
                                    <a href="#debouncing" title="14. What is debouncing in Javascript ?">14. What is debouncing in Javascript ?</a>
                                </li>
                                <li>
                                    <a href="#throttle" title="15. What is throttling in Javascript ?">15. What is throttling in Javascript ?</a>
                                </li>
                                <li>
                                    <a href="#curry" title="16. What is currying in Javascript ?">16. What is currying in Javascript ?</a>
                                </li>
                                <li>
                                    <a href="#bubble" title="17. Difference between Event bubbling and capturing in Javascript ?">17. Difference between Event bubbling and capturing in Javascript ?</a>
                                </li>
                                <li>
                                    <a href="#prototypalinh" title="18. What is prototypal inheritance in Javascript ?">18. What is prototypal inheritance in Javascript ?</a>
                                </li>
                                <li>
                                    <a href="#storage" title="19. Define local storage and session storage in Javascript ?">19. Define local storage and session storage in Javascript ?</a>
                                </li>
                                <li>
                                    <a href="#asyncdiffer" title="20. Why is the use of async and defer attributes in Javascript ?">20. Why is the use of async and defer attributes in Javascript ?</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="qstns">
                    <section id="IsJSSync">
                        <h4>1. Is Javascript synchronous or asynchronous language ?</h4>
                        <p>
                            Javascript is a synchronous single threaded language. Only one command will be executed at a time, which means it has only one execution context/call stack. Each execution context has two components. First component is called
                            Memory component/Variable environment and second component is called Code component/Thread of execution.
                            In memory component all the variables and functions will be declared as key and value pairs. In code component each command will be called from memory component and executed each at a time, for which it is called as synchronous
                            single threaded language.
                        </p>
                    </section>
                    <section id="hoist">
                        <h4>2. Explain hoisting in Javascript ?</h4>
                        <p>
                            Accessing variables and functions even before initializing them is defined as hoisting. This happens because, in phase 1 of execution i.e., memory creation phase,
                            memory is allocated to each and every variable and functions in global space even before the code starts executing.<br />
                            <pre>
                                <code className="JSblock">
                                    {hoisteg()} <br />
                                    <strong>Output:</strong><br />
                                                    undefined <br />
                                                    Hi, there..`<br />
                                </code>
                            </pre>
                        </p>
                    </section>
                    <section id="undefinednotdefined">
                        <h4>3. Explain difference between not-defined & undefined in JS ?</h4>
                        <p>
                            Not defined is an error which results when Javascript engine is not able to find the variable in memory which results in Reference error. Where as Undefined is special keyword in javascript.
                            Undefined is assigned to variables during memory creation phase.

                            <pre>
                                <strong>Not-defined eg :</strong>  <br />
                                console.log(x) <br />
                                <strong>Output:</strong>
                                &nbsp; ReferenceError: x is not defined <br />
                                <strong>Undefined eg: </strong><br />
                                console.log(a) <br />
                                var a=10; <br />
                                <strong>Output:</strong>
                                &nbsp; undefined
                            </pre>
                        </p>
                    </section>
                    <section id="thiskeyword">
                        <h4>4. Explain this keyword in Javascript ?</h4>
                        <p>
                            This refers to the object on which we call our function. For <strong> eg: obj1.printName()</strong>, here the value of <strong>this</strong> inside printName function is <strong>obj1</strong>. If we call our function as it is
                            <strong> eg: printName()</strong>, then the value of <strong>this</strong> inside printName() points to global object which is <strong>window</strong>.
                        </p>
                    </section>
                    <section id="">
                        <h4></h4>

                    </section>
                    <section id="lexicalenv">
                        <h4>5. Explain the term Lexical environment in Javascript ?</h4>
                        <p>
                            When executing any program, JS engine first searches for the scope of variable in its local memory and if its not found it then searches in the local memory of its parent which is defined as Lexical environment.
                        </p>
                    </section>
                    <section id="variablesinjs">
                        <h4>6. Difference between let,const and var in JavaScript ?</h4>
                        <p>
                            Variables can be declared in Javascript using any of these keywords var,let and const.<br />
                            <strong>Var     :</strong>   Users can re-declare variable using var and user can update var variable. Also, users can declare the 2 variables with the same name using the var keyword. And hoisting is possible for var variables. <br />
                            <strong>let     :</strong>   Let variables are block scoped. Users cannot re-declare the variable defined with the let keyword but can update it. User can declare with same name only in different blocks. And hoisting is not possible for let variables. <br />
                            <strong>const   :</strong>   const keyword has all the properties that are the same as the let keyword, except the user cannot update it. Also, at the time of declaration user has to initialize a const variable.
                        </p>
                    </section>
                    <section id="closures">
                        <h4>7. Explain closures in JavaScript ?</h4>
                        <p>
                            Closure is defined as a combination of a function bundled together with its lexical environment.
                            In other words, a closure gives you access to an outer function's scope from an inner function.
                            In JS, closures are created every time a function is created, ie., at function creation time.
                            <pre>
                                <code>
                                    {closureg()} <br />
                                </code>
                                In above example, function x forms closure with variables of function y.
                            </pre>
                        </p>
                    </section>
                    <section id="callbackfuncs">
                        <h4>8. Explain callback functions in JavaScript ?</h4>
                        <p>
                            As we know in JavaScript functions can be passed to any other functions as parameters. This function which you pass into another function is known as call back function.
                            Using callbacks, async tasks can be performed in JS. Eg: using setTimeOut()
                            <pre>
                                <code>
                                    {callbackeg()}
                                </code>
                            </pre>
                        </p>
                    </section>
                    <section id="eventloop">
                        <h4>9. What is event loop in JavaScript ?</h4>
                        <p>
                            When the timer expires for call back functions, call back function is put in call back queue. Even loop keeps a check on call back queue and call stack. As soon as call stack is
                            empty event loops sends callback function from call back queue to call stack and the flow continues.
                        </p>
                    </section>
                    <section id="hocfuncs">
                        <h4>10. What are higher order functions in JavaScript ?</h4>
                        <p>
                            In Javascript, functions can be assigned to variables in the same way that strings or arrays can. They can be passed into other functions as parameters or returned from them as well.
                            A higher-order function(HOC) is a function that accepts functions as parameters and/or returns a function
                            <pre>
                                <code>
                                    {callbackeg()}
                                </code>
                            </pre>
                        </p>
                    </section>
                    <section id="MRF">
                        <h4>11. Explain how Map,filter and reduce are used in JavaScript ?</h4>
                        <p>
                            Map, filter and reduce are higher order functions which accept function as an argument.<br />
                            <strong>Map :</strong> Map is used for creating a new array from an existing one, applying function to each of the elements in the array.<br />
                            <strong>Filter :</strong> filter takes each element in an array and it applies a conditional statement against it.
                            If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.<br />
                            <strong>Reduce :</strong> Reduce method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.<br />
                        </p>
                    </section>
                    <section id="Callapplybind">
                        <h4>12. Explain call, apply and bind in JavaScript ?</h4>
                        <p>
                            Call, Apply and bind are used to pass different values of <strong>this</strong> to a function.<br />
                            <strong>Call  :</strong> Call invokes the function and is applied on the object which is passed as parameter. Any additional arguments are passed seperated by comma.<br />
                            <strong>Apply :</strong> Apply and call works in a same way, the only difference is additional parameters are passed as an array.<br />
                            <strong>Bind :</strong>  Bind returns the function and the function can be executed later with the context of <strong>this</strong> that is provided<br />
                        </p>
                    </section>
                    <section id="shadowing">
                        <h4>13. What is shadowing in JavaScript ?</h4>
                        <p>
                            Shadowing occurs when a variable declared in a certain scope (e.g. a local variable) has the same name as a variable in an outer scope (e.g. a global variable).
                            When this happens, the outer variable is said to be shadowed by the inner variable. <br />
                            In JavaScript, variables can be shadowed in both the global and function scope. Global variables can be shadowed by function-scoped variables,
                            and function-scoped variables can be shadowed by block-scoped variables declared with the let or const keyword.
                            <pre>
                                <code>
                                    {shadowingeg()}
                                </code>
                            </pre>
                        </p>
                    </section>
                    <section id="debouncing">
                        <h4>14. What is debouncing in Javascript ?</h4>
                        <p>
                            The debounce function is built to limit the number of times a function is called.
                            The debounce function forces the original event/function to wait a certain amount of time before running again.
                            It resets the timer to the specified delay, incase of timeout call the debounce function.
                        </p>
                    </section>
                    <section id="throttle">
                        <h4>15. What is throttling in Javascript ?</h4>
                        <p>
                            Throttling or to throttle a function means to ensure that the function is called at most once in a specified time period (for instance, once every 10 seconds).
                            It calls a function immediately after the first click and then calls a function only after a particular interval of time
                        </p>
                    </section>
                    <section id="curry">
                        <h4>16. What is currying in Javascript ?</h4>
                        <p>
                            Currying is a function that takes one argument at a time and returns a new function expecting the next argument.
                            Currying is when a function , instead of taking all arguments at one time , takes the first one and returns a new function,
                            which takes the second one and returns a new function, which takes the third one, etc. until all arguments are completed.
                            <pre>
                                <code>
                                    {curryingeg()}
                                </code>
                            </pre>
                        </p>
                    </section>
                    <section id="bubble">
                        <h4>17. Difference between Event bubbling and capturing in Javascript ?</h4>
                        <p>
                            Event bubbling means event propagation is done from child element to parent elements in the DOM. whereas, in Event capturing
                            event propagation is done from parent element to child elements in the DOM. By default event bubbling is applied.
                        </p>
                    </section>
                    <section id="prototypalinh">
                        <h4>18. What is prototypal inheritance in Javascript ?</h4>
                        <p>
                            In JavaScript, an object can inherit properties of another object. The object from where the properties are inherited is called the prototype.
                            When we try to access a property of an object, the property is not only searched in the object itself. It's also searched in the prototype of the object,
                            in the prototype of the prototype, and so on , until a property is found that matches the name or the end of the prototype chain is reached
                        </p>
                    </section>
                    <section id="storage">
                        <h4>19. Define local storage and session storage in Javascript ?</h4>
                        <p>
                            With sessionStorage, the data is persisted only until the window or tab is closed. With localStorage,
                            the data is persisted until the user manually clears the browser cache or until your web app clears the data.
                            It is recommended to use local storage than session storage.
                        </p>
                    </section>
                    <section id="asyncdiffer    ">
                        <h4>20. Why is the use of async and defer attributes in Javascript ?</h4>
                        <p>
                            Async and Defer are optional attributes for the HTML script src="..." tag. They instruct the browser to download the indicated file in the background
                            at a low priority without interrupting the process of rendering the page in the browser.
                            Async and Defer both load JavaScript asynchronously without render blocking, but async executes as soon as possible while defer runs in sequence toward the end of the loading process, just before the DOMContentLoaded event.
                        </p>
                    </section>
                    
                </div>
            </div>
        </section>
        )
}

(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{40:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return i});var t=a(1),l=a.n(t);function i(){return l.a.createElement("section",{className:"questions"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"Table"},l.a.createElement("div",{className:"sidebar"},l.a.createElement("h3",null,"Javascript Interview questions 2022"),l.a.createElement("nav",null,l.a.createElement("ul",{className:"nav"},l.a.createElement("li",null,l.a.createElement("a",{href:"#IsJSSync",title:"1. Is Javascript synchronous or asynchronous language ?"},"1. Is Javascript synchronous or asynchronous language ?")),l.a.createElement("li",null,l.a.createElement("a",{href:"#hoist",title:"2. Explain hoisting in Javascript ?"},"2. Explain hoisting in Javascript ?")),l.a.createElement("li",null,l.a.createElement("a",{href:"#undefinednotdefined",title:"3. Explain difference between not-defined & undefined in JS ?"},"3. Explain difference between not-defined & undefined in JS ?")),l.a.createElement("li",null,l.a.createElement("a",{href:"#thiskeyword",title:"4. Explain this keyword in Javascript ?"},"4. Explain this keyword in Javascript ?")),l.a.createElement("li",null,l.a.createElement("a",{href:"#lexicalenv",title:"5. Explain the term Lexical environment in Javascript ?"},"5. Explain the term Lexical environment in Javascript ?")),l.a.createElement("li",null,l.a.createElement("a",{href:"#variablesinjs",title:"6. Difference between let,const and var in JavaScript ?"},"6. Difference between let,const and var in JavaScript ?")),l.a.createElement("li",null,l.a.createElement("a",{href:"#closures",title:"7. Explain closures in JavaScript ?"},"7. Explain closures in JavaScript ?")),l.a.createElement("li",null,l.a.createElement("a",{href:"#callbackfuncs",title:"8. Explain callback functions in JavaScript ?"},"8. Explain callback functions in JavaScript ?")),l.a.createElement("li",null,l.a.createElement("a",{href:"#eventloop",title:"9. What is event loop in JavaScript ?"},"9. What is event loop in JavaScript ?")),l.a.createElement("li",null,l.a.createElement("a",{href:"#hocfuncs",title:"10. What are higher order functions in JavaScript ?"},"10. What are higher order functions in JavaScript ?")),l.a.createElement("li",null,l.a.createElement("a",{href:"#MRF",title:"11. Explain how Map,filter and reduce are used in JavaScript ?"},"11. Explain how Map,filter and reduce are used in JavaScript ?")),l.a.createElement("li",null,l.a.createElement("a",{href:"#Callapplybind",title:"12. Explain call, apply and bind in JavaScript ?"},"12. Explain call, apply and bind in JavaScript ?")),l.a.createElement("li",null,l.a.createElement("a",{href:"#shadowing",title:"13. What is shadowing in JavaScript ?"},"13. What is shadowing in JavaScript ?")),l.a.createElement("li",null,l.a.createElement("a",{href:"#debouncing",title:"14. What is debouncing in Javascript ?"},"14. What is debouncing in Javascript ?")),l.a.createElement("li",null,l.a.createElement("a",{href:"#throttle",title:"15. What is throttling in Javascript ?"},"15. What is throttling in Javascript ?")),l.a.createElement("li",null,l.a.createElement("a",{href:"#curry",title:"16. What is currying in Javascript ?"},"16. What is currying in Javascript ?")),l.a.createElement("li",null,l.a.createElement("a",{href:"#bubble",title:"17. Difference between Event bubbling and capturing in Javascript ?"},"17. Difference between Event bubbling and capturing in Javascript ?")),l.a.createElement("li",null,l.a.createElement("a",{href:"#prototypalinh",title:"18. What is prototypal inheritance in Javascript ?"},"18. What is prototypal inheritance in Javascript ?")),l.a.createElement("li",null,l.a.createElement("a",{href:"#storage",title:"19. Define local storage and session storage in Javascript ?"},"19. Define local storage and session storage in Javascript ?")),l.a.createElement("li",null,l.a.createElement("a",{href:"#asyncdiffer",title:"20. Why is the use of async and defer attributes in Javascript ?"},"20. Why is the use of async and defer attributes in Javascript ?")))))),l.a.createElement("div",{className:"qstns"},l.a.createElement("section",{id:"IsJSSync"},l.a.createElement("h4",null,"1. Is Javascript synchronous or asynchronous language ?"),l.a.createElement("p",null,"Javascript is a synchronous single threaded language. Only one command will be executed at a time, which means it has only one execution context/call stack. Each execution context has two components. First component is called Memory component/Variable environment and second component is called Code component/Thread of execution. In memory component all the variables and functions will be declared as key and value pairs. In code component each command will be called from memory component and executed each at a time, for which it is called as synchronous single threaded language.")),l.a.createElement("section",{id:"hoist"},l.a.createElement("h4",null,"2. Explain hoisting in Javascript ?"),l.a.createElement("p",null,"Accessing variables and functions even before initializing them is defined as hoisting. This happens because, in phase 1 of execution i.e., memory creation phase, memory is allocated to each and every variable and functions in global space even before the code starts executing.",l.a.createElement("br",null),l.a.createElement("pre",null,l.a.createElement("code",{className:"JSblock"},"\n    console.log(a);.\n    greet();\n    a = 10;\n    function greet() {\n        console.log('Hi, there..');\n    }"," ",l.a.createElement("br",null),l.a.createElement("strong",null,"Output:"),l.a.createElement("br",null),"undefined ",l.a.createElement("br",null),"Hi, there..`",l.a.createElement("br",null))))),l.a.createElement("section",{id:"undefinednotdefined"},l.a.createElement("h4",null,"3. Explain difference between not-defined & undefined in JS ?"),l.a.createElement("p",null,"Not defined is an error which results when Javascript engine is not able to find the variable in memory which results in Reference error. Where as Undefined is special keyword in javascript. Undefined is assigned to variables during memory creation phase.",l.a.createElement("pre",null,l.a.createElement("strong",null,"Not-defined eg :"),"  ",l.a.createElement("br",null),"console.log(x) ",l.a.createElement("br",null),l.a.createElement("strong",null,"Output:"),"\xa0 ReferenceError: x is not defined ",l.a.createElement("br",null),l.a.createElement("strong",null,"Undefined eg: "),l.a.createElement("br",null),"console.log(a) ",l.a.createElement("br",null),"var a=10; ",l.a.createElement("br",null),l.a.createElement("strong",null,"Output:"),"\xa0 undefined"))),l.a.createElement("section",{id:"thiskeyword"},l.a.createElement("h4",null,"4. Explain this keyword in Javascript ?"),l.a.createElement("p",null,"This refers to the object on which we call our function. For ",l.a.createElement("strong",null," eg: obj1.printName()"),", here the value of ",l.a.createElement("strong",null,"this")," inside printName function is ",l.a.createElement("strong",null,"obj1"),". If we call our function as it is",l.a.createElement("strong",null," eg: printName()"),", then the value of ",l.a.createElement("strong",null,"this")," inside printName() points to global object which is ",l.a.createElement("strong",null,"window"),".")),l.a.createElement("section",{id:""},l.a.createElement("h4",null)),l.a.createElement("section",{id:"lexicalenv"},l.a.createElement("h4",null,"5. Explain the term Lexical environment in Javascript ?"),l.a.createElement("p",null,"When executing any program, JS engine first searches for the scope of variable in its local memory and if its not found it then searches in the local memory of its parent which is defined as Lexical environment.")),l.a.createElement("section",{id:"variablesinjs"},l.a.createElement("h4",null,"6. Difference between let,const and var in JavaScript ?"),l.a.createElement("p",null,"Variables can be declared in Javascript using any of these keywords var,let and const.",l.a.createElement("br",null),l.a.createElement("strong",null,"Var     :"),"   Users can re-declare variable using var and user can update var variable. Also, users can declare the 2 variables with the same name using the var keyword. And hoisting is possible for var variables. ",l.a.createElement("br",null),l.a.createElement("strong",null,"let     :"),"   Let variables are block scoped. Users cannot re-declare the variable defined with the let keyword but can update it. User can declare with same name only in different blocks. And hoisting is not possible for let variables. ",l.a.createElement("br",null),l.a.createElement("strong",null,"const   :"),"   const keyword has all the properties that are the same as the let keyword, except the user cannot update it. Also, at the time of declaration user has to initialize a const variable.")),l.a.createElement("section",{id:"closures"},l.a.createElement("h4",null,"7. Explain closures in JavaScript ?"),l.a.createElement("p",null,"Closure is defined as a combination of a function bundled together with its lexical environment. In other words, a closure gives you access to an outer function's scope from an inner function. In JS, closures are created every time a function is created, ie., at function creation time.",l.a.createElement("pre",null,l.a.createElement("code",null,"function y() {  \n    let a = 10;\n    function x()\n    {\n    var b=10;\n    console.log(a,b)\n    }\n    x();\n    }\n    y();"," ",l.a.createElement("br",null)),"In above example, function x forms closure with variables of function y."))),l.a.createElement("section",{id:"callbackfuncs"},l.a.createElement("h4",null,"8. Explain callback functions in JavaScript ?"),l.a.createElement("p",null,"As we know in JavaScript functions can be passed to any other functions as parameters. This function which you pass into another function is known as call back function. Using callbacks, async tasks can be performed in JS. Eg: using setTimeOut()",l.a.createElement("pre",null,l.a.createElement("code",null,"\n//Higher order function\nfunction greet(name, callback)\n                {\n                console.log('Hi' + ' ' + name);\n                callback();\n                }\n\n// callback function\nfunction callMe(){\n                console.log('I am callback function');\n                }\n\n// passing function as an argument\ngreet('Shanwik', callMe);")))),l.a.createElement("section",{id:"eventloop"},l.a.createElement("h4",null,"9. What is event loop in JavaScript ?"),l.a.createElement("p",null,"When the timer expires for call back functions, call back function is put in call back queue. Even loop keeps a check on call back queue and call stack. As soon as call stack is empty event loops sends callback function from call back queue to call stack and the flow continues.")),l.a.createElement("section",{id:"hocfuncs"},l.a.createElement("h4",null,"10. What are higher order functions in JavaScript ?"),l.a.createElement("p",null,"In Javascript, functions can be assigned to variables in the same way that strings or arrays can. They can be passed into other functions as parameters or returned from them as well. A higher-order function(HOC) is a function that accepts functions as parameters and/or returns a function",l.a.createElement("pre",null,l.a.createElement("code",null,"\n//Higher order function\nfunction greet(name, callback)\n                {\n                console.log('Hi' + ' ' + name);\n                callback();\n                }\n\n// callback function\nfunction callMe(){\n                console.log('I am callback function');\n                }\n\n// passing function as an argument\ngreet('Shanwik', callMe);")))),l.a.createElement("section",{id:"MRF"},l.a.createElement("h4",null,"11. Explain how Map,filter and reduce are used in JavaScript ?"),l.a.createElement("p",null,"Map, filter and reduce are higher order functions which accept function as an argument.",l.a.createElement("br",null),l.a.createElement("strong",null,"Map :")," Map is used for creating a new array from an existing one, applying function to each of the elements in the array.",l.a.createElement("br",null),l.a.createElement("strong",null,"Filter :")," filter takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.",l.a.createElement("br",null),l.a.createElement("strong",null,"Reduce :")," Reduce method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.",l.a.createElement("br",null))),l.a.createElement("section",{id:"Callapplybind"},l.a.createElement("h4",null,"12. Explain call, apply and bind in JavaScript ?"),l.a.createElement("p",null,"Call, Apply and bind are used to pass different values of ",l.a.createElement("strong",null,"this")," to a function.",l.a.createElement("br",null),l.a.createElement("strong",null,"Call  :")," Call invokes the function and is applied on the object which is passed as parameter. Any additional arguments are passed seperated by comma.",l.a.createElement("br",null),l.a.createElement("strong",null,"Apply :")," Apply and call works in a same way, the only difference is additional parameters are passed as an array.",l.a.createElement("br",null),l.a.createElement("strong",null,"Bind :"),"  Bind returns the function and the function can be executed later with the context of ",l.a.createElement("strong",null,"this")," that is provided",l.a.createElement("br",null))),l.a.createElement("section",{id:"shadowing"},l.a.createElement("h4",null,"13. What is shadowing in JavaScript ?"),l.a.createElement("p",null,"Shadowing occurs when a variable declared in a certain scope (e.g. a local variable) has the same name as a variable in an outer scope (e.g. a global variable). When this happens, the outer variable is said to be shadowed by the inner variable. ",l.a.createElement("br",null),"In JavaScript, variables can be shadowed in both the global and function scope. Global variables can be shadowed by function-scoped variables, and function-scoped variables can be shadowed by block-scoped variables declared with the let or const keyword.",l.a.createElement("pre",null,l.a.createElement("code",null,'\nvar x = "global";\nfunction foo(){\nlet x = "function";\n// here variable x is shadowing variable in outer scope.\n        }\n')))),l.a.createElement("section",{id:"debouncing"},l.a.createElement("h4",null,"14. What is debouncing in Javascript ?"),l.a.createElement("p",null,"The debounce function is built to limit the number of times a function is called. The debounce function forces the original event/function to wait a certain amount of time before running again. It resets the timer to the specified delay, incase of timeout call the debounce function.")),l.a.createElement("section",{id:"throttle"},l.a.createElement("h4",null,"15. What is throttling in Javascript ?"),l.a.createElement("p",null,"Throttling or to throttle a function means to ensure that the function is called at most once in a specified time period (for instance, once every 10 seconds). It calls a function immediately after the first click and then calls a function only after a particular interval of time")),l.a.createElement("section",{id:"curry"},l.a.createElement("h4",null,"16. What is currying in Javascript ?"),l.a.createElement("p",null,"Currying is a function that takes one argument at a time and returns a new function expecting the next argument. Currying is when a function , instead of taking all arguments at one time , takes the first one and returns a new function, which takes the second one and returns a new function, which takes the third one, etc. until all arguments are completed.",l.a.createElement("pre",null,l.a.createElement("code",null,"\nfunction calculateVolume(length)\n{\n    return function (breadth)\n{\n    return function (height)\n{\n    return length * breadth * height;\n                }\n            }\n        }\nconsole.log(calculateVolume(4)(5)(6));")))),l.a.createElement("section",{id:"bubble"},l.a.createElement("h4",null,"17. Difference between Event bubbling and capturing in Javascript ?"),l.a.createElement("p",null,"Event bubbling means event propagation is done from child element to parent elements in the DOM. whereas, in Event capturing event propagation is done from parent element to child elements in the DOM. By default event bubbling is applied.")),l.a.createElement("section",{id:"prototypalinh"},l.a.createElement("h4",null,"18. What is prototypal inheritance in Javascript ?"),l.a.createElement("p",null,"In JavaScript, an object can inherit properties of another object. The object from where the properties are inherited is called the prototype. When we try to access a property of an object, the property is not only searched in the object itself. It's also searched in the prototype of the object, in the prototype of the prototype, and so on , until a property is found that matches the name or the end of the prototype chain is reached")),l.a.createElement("section",{id:"storage"},l.a.createElement("h4",null,"19. Define local storage and session storage in Javascript ?"),l.a.createElement("p",null,"With sessionStorage, the data is persisted only until the window or tab is closed. With localStorage, the data is persisted until the user manually clears the browser cache or until your web app clears the data. It is recommended to use local storage than session storage.")),l.a.createElement("section",{id:"asyncdiffer    "},l.a.createElement("h4",null,"20. Why is the use of async and defer attributes in Javascript ?"),l.a.createElement("p",null,'Async and Defer are optional attributes for the HTML script src="..." tag. They instruct the browser to download the indicated file in the background at a low priority without interrupting the process of rendering the page in the browser. Async and Defer both load JavaScript asynchronously without render blocking, but async executes as soon as possible while defer runs in sequence toward the end of the loading process, just before the DOMContentLoaded event.')))))}}}]);
//# sourceMappingURL=1.66b43ad1.chunk.js.map
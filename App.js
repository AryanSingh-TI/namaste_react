import React from "react";
import ReactDOM from "react-dom/client";

//this is a React Element (a variable)
//It contains some jsx
//it is a normal variable at the end of the day that contains some jsx
//it has all the properties of a const variable too
const heading_jsx = (

    <h1 id="heading_2" className="heading" tabIndex="1"> 
        Heading using jsx 
    </h1>      

);  
//multiline jsx can be written with the help of paranthesis and semicolons 



//React Component (not variables) :- (two types)
//1) Class Based React Components (Old way of writing Code)
//2) Function Based React Components (New way of writing Code / Used most of the time now)



// REACT FUNCTIONAL COMPONENT :-
//-> It is just a normal javascript function
//-> React Components are always named with a Capital letter (It is not a convention but mandatory for every React Component otherwise we will get an error)
//-> React Functional Component returns some jsx
//-> Therefore a function that returns a jsx is called a React functional component 




//A) first way of writing React Functional Component
//using arrow functions by explicitly giving the return value
const HeadingComponent_1 = () => {
    return <h1 id = "heading_1" > Heading 1: React Functional Component that returns some jsx </h1>;
}


//B) Second way of writing React Functional Component
//using arrow functions without explictly defining the return value, javascript converts this into the first way implicitly
//this is also a perfectly valid javascript code because arrow functions can be written like this
// where you don't have to explicitly specify the return type but everything after the arrow is deemed as the return value by javascript
const HeadingComponent_2 = () => <h1 id = "heading_2" > Heading 2: React Functional Component that returns some jsx </h1>;




//C) Third way of writing React Functional Component
//using normal functions, it's the same as the arrow functions but some differences in context of hoisting and this keyword
//we can use a normal function as a React Component as Well
//but arrow functions are an industry standard of making React Functional Component
const HeadingComponent_3 = function() {
    return <h1 id = "heading_3"> Heading 3: React Functional Component that returns some jsx </h1>
}


const variable = 10000;
const HeadingComponent_4 = () => ( 

    <div id="container">

        <h1>{variable*2                            /*we can write javascript code inside jsx using curly braces*/}</h1>

        {heading_jsx                               /*similary you can add React Elements like heading_jsx inside React Components using the same curly braces*/}

        <HeadingComponent_1></HeadingComponent_1> {/*React Components can also be added inside React Components using either this syntax*/}

        <HeadingComponent_2/>                     {/*or like this*/}

        {HeadingComponent_3()}                    {/*Since React Components are just Function Expressions they can also be called inside the curly braces*/}

        <h1 id = "heading_4"> 
            Heading 4: React Functional Component that returns some jsx 
        </h1>

    </div>

); 
//if we have to return a multiline jsx we can use paranthesis and semicolons as said above
// we can also add nested jsx like showing in the HeadingComponent_4 with the container div
//we can add other functional components inside our component using the above syntax
//HeadingComponent 1 , 2 , 3 and 4 are all the same, just different ways of writing the Functional React Component



const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeadingComponent_4/>);
//this is the way to render a React Component
//If it was a React Element it would have been rendered like root.render(headingElement);
//Babel sees the angular bracket and understands that it's a React Component and renders it accordingly, hence the syntax
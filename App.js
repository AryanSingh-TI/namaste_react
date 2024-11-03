import React from "react";
import ReactDOM from "react-dom/client";

//1) core React
const heading = React.createElement(  
    "h1", 
    {id:"heading_1"}, 
    "1) heading using the core createElement() from React" 
);

//2) jsx
const heading_jsx = <h1 id="heading_2" className="heading" tabIndex="1">  2) Heading using jsx </h1>;  

//a) this is jsx, its an html like syntax in javascript but ITS NOT HTML INSIDE JAVASCRIPT (like literally)
//b) both of these ways can be used to make React ELement(which is an object)
//c) both of the heading_1 and heading_2 work the same way (we can create react elements using both ways)
//d) just the syntax is different 
//e) jsx is NOT a valid Javascript Code, when you paste "const heading_jsx = <h1 id="heading_2">2) Heading using jsx </h1>;"  in the console of a browser it will give you an error because javascript engine does not understand this piece of jsx code
//f) the jsx code is TRANSPILED by PARCEL using it's BABEL package before it's rendered 
//g) jsx (using BABEL package in PARCEL)=>(TRANSPILED into) => React.createElement (using React.createElement)=>(converts it to a) ReactElement(a JS object) (render())=>converts it to)  HTMLElement(to render on the DOM) 
//h) another example of how jsx is not HTML is in it's attributes, class attribute of HTML tags is defined as className in jsx
//i) every attribute of jsx is written in camel case

const root = ReactDOM.createRoot(document.getElementById("root"));

                          // both these console logs return ReactElements (objects) not HTML tags
console.log(heading);     // objects as in key value pairs that contain various informations about the supposed HTML tags
console.log(heading_jsx); // jsx also returns an object because jsx under the hood is converted into React.createElement as well
                          

const parent = React.createElement(
    "div", 
    {id:"parent"}, 
    heading, 
    heading_jsx //appending both the headings as children of a parent div
);


root.render(parent);//rendering the parent div
                    //those React Objects are converted into html tags and rendered inside the root element
                    //render() replaces the previous content of the Root element and does not append it

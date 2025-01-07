import React, { forwardRef } from "react";

class UserClass extends React.Component {

    constructor(props)
    {
        super(props);

        this.state = 
        {
            userInfo: 
            {
                name     : "Dummy",
                location : "Default"
            }
        }
    }

    render() 
    {
        const {name,location} = this.state.userInfo

        return  ( 
            <div className="user-card">
                <h2>Name : {name}</h2>
                <h2>Location : {location}</h2>
                <h2>twitter : doesntexist@404 </h2>
            </div> 
        );
    }

    async componentDidMount() // we can make the componentDidMount() Hook async in Class Based Components to make the API calls
    {
        console.log("Child (UserClass) componentDidMount() is called")
        //generally componentDidMount() is used to make API calls in Class Based Components after the compoment has been patched on to the webpage's actual DOM

        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();

        this.setState
        ({
            userInfo:json,
        })

    }

    componentDidUpdate()
    {
        console.log("Child (UserClass) componentDidUpdate() is called");
    }

    componentWillUnmount()
    {
        console.log("compoentWillUnmount() is called when the component isn't showing up on the page");
        //it happens when we move to another page such that the compoent isn't visible or used anymore on the DOM page then it is called
    }
}

export default UserClass;

// MOUNTING CYCLE (mounting cycle finishes after the component is constructed and rendered once with usually some dummy data)
//  [ first the component is constructed and the state variable is assigned the default value
//  | then the component is rendered with the default value (incorporated in the virtual DOM)
//  | After render happens then REACT will update the actual DOM with the dummy data
//  | then componentDidMount() will be called to signal that the component is mounted with the dummy data
//  [ and in this componentDidMount() an API call was made that changed the state variable(by calling setState()) triggering the UPDATE cycle

// UPDATE CYCLE 
//  [ after the state variable is updated(by calling setState()) react rerenders the Component with the Updated Value
//  | then again after the render in the vritual DOM, react updates and reflects the changes in the Actual DOM
//  [ then componentDidUpdate() is called again to signal the successfully incorporating of the changed component in the actual DOM


/**
 * MOUNTING 
 * - constructor(state = dummy)
 * - render(with dummy data)
 *      <HTML (Dummy)/>
 * - componentDidMount()
 *      <API Call/>
 *      <this.setState> -> State variable is updated
 * 
 * 
 * UPDATING
 * - re-render(API data)
 *      <HTML (new API data)/>
 * - componentDidUpdate()
 * 
 * 
 * UNMOUNTING
 * - componentWillUnmount() is called when we move to a different page such that the component is no longer visible
 */


/**
 * componentDidMount (Class Based Component Life cycle methods) !=  useEffect() (Functional Based Component Hook)
 * 
 * because :-
 * 1) useEffect() is called after every render
 * 2) componentDidMount() is called after the first render and when the component is updated every time, componentDidUpdate() is called
 * 
 */

/**
 * componentWillUnmount() life cycle method is used to clear stuff that was added by the component after it stopped rendering
 * 
 * example:-
 * let's say we add a setInterval() inside our componentDidMount() to console log something after every second
 * the set interval will not go away when we move to a different page
 * it is the drawback of a single page application that is provided by React
 * It happens because React doesn't reload the page just rerenders that particular component on the page
 * so the interval added by the component stays in the browser's storage and everytime we go view that component a new interval is added on top of it
 * this is dangerous because it can may crash an application as with multiple clicks multipe setInterval() is added
 * 
 * componentWillUnmount()
 * {
 *      clearInterval(this.that_interval);
 * }
 * therefore in componentWillUnmount() we use clearInterval(this.that_interval) to clear the interval everytime we move to a different page where the component is no longer rendered
 * 
 * 
 * 
 * The equivalent of this in Functional Based Component is provided by useEffect() Hook
 * 
 * example:- in useEffect if we similarly do a setInterval() to console log something after every second
 * the setInterval will not go away when we move to a different page
 * however this can be achieved by using return inside the useEffect() to clear the interval
 * 
 * useEffect()
 * {
 *      const timer = setInterval(()=>
 *          console.log("print something");
 *      ),1000);
 *      
 *      return() => {
 *          clearInterval(timer);
 *      }
 * } 
 * 
 */
import {Component} from "react";
//destructirng React on the fly this is like doing const {component} = React, this will get the Component child of the React Object so that we don't have to write React.Component when we inherit/extend React on our Class Based Component
import User from "./User";
import UserClass from "./UserClass";
//this import statement will entail that the component has been mounted
//now whenver the Class based component is being used inside the code
//the class is instantiated and it's constructor is called
//after the constructor is done setting up things like props and state variables
//the render() method is then called to return the jsx=>converted to html that will render on our DOM

class About extends Component
{
    constructor(props)
    {
        super(props);
        console.log("1 Parent constructor() is called [About is the parent of the UserClass Component because UserClass component is being called inside About]")
    }

    render()
    {
        console.log("2 Parent render() is called")
        return (
            <div>
                <h1>
                    About
                </h1> 
                <h2>
                    This is About us Page
                    <User name = {"Aryan (function)"}/>
                    <UserClass name = {"Aryan (class)"} location={"Dehradun Class"}/>
                    <UserClass name = {"Elon Musk"} location={"USA"}/>
                </h2>
            </div>
        );
    }

    componentDidMount()
    {
        console.log("6 (Parent) About componentDidMount() is called")
        //parent componentdidMount() is called after the child because the child is used inside the render of the parent
        //and the parent will only finish it's rendering after the child has finished rendering and hence the componentdidMount() of the child will be called before the parent
    }

}

export default About;
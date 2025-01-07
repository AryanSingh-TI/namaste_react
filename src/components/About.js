import {Component} from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
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
        console.log("Parent (About) componentDidMount() is called")
    }

}

export default About;
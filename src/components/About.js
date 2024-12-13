import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (

            <div>
                <h1>
                    About
                </h1> 
                <h2>
                    This is About us Page
                    <User name = {"Aryan (function)"}/>
                    <UserClass name = {"Aryan (class)"}/>
                </h2>
            </div>
    );
}

export default About;
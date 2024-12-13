import React from "react";
//This is how you create a class based component in React
//To create a class based component in react you need to inherit React.Component from your custom class and React will start tracking that component
class UserClass extends React.Component {

    //constructor() method is used to recieve arguments given to the class, here it is recieved inside the props variable
    constructor(props)
    {
        super(props);
        //super() method is used to set props for the parent class React.Component
        //In order to properly utilize the passed arguments/props we need to set it for the parent class
        //this.props will only be accessible after super(props) is called and the following props are set for the React.Component

        //loading a class based component means creating an isntance of that class
        //whenever an instance of the class is created it's constructor is called
        //and this is when the state variables of this component are created and initialised
        this.state = {
            count:0,
            count2:2
        }

    }
    //render() method is used to return the jsx that we want to render from our component

    render() {
        const {name} = this.props
        const {count,count2} = this.state
        return  ( 
            <div className="user-card">
                <h2>count = {count}</h2>
                <h2>count2 = {count2}</h2>
                <h2>Name : {name}</h2>
                <h2>Location : bruh</h2>
                <h2>twitter : doesntexist@404 </h2>
            </div> 
        );
    }
}

export default UserClass;
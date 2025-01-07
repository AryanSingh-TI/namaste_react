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
        console.log(props);
        //first props will show Aryan in this component's constructor and then Elon Musk
        console.log("3 Child(UserClass) constructor() is called")

    }
    //render() method is used to return the jsx that we want to render from our component

    render() {

        console.log(this.props);
        //first props will show Aryan in this component's render and then Elon Musk
        console.log("4 Child(UserClass) render() is called");
        const {name,location} = this.props
        const {count,count2} = this.state
        return  ( 
            <div className="user-card">
                <h2>count = {count}</h2>
                <button 
                    onClick={  
                                ()=>{
                                       this.setState({
                                                        count:this.state.count+1,
                                                        //count: here is used to specify the state variable whose value is being set, this.state.count is used to get the current value of the count and update it with the given operations
                                                        count2:this.state.count2+2
                                                    })
                                       //this.setState can be used anywhere inside the class Component
                                       //it is used to update the value of the state variable
                                       //we cannot update it directly using this.state.count like that
                                    }   
                            }
                >
                    Count Increase
                </button>
                <h2>count2 = {count2}</h2>
                <h2>Name : {name}</h2>
                <h2>Location : {location}</h2>
                <h2>twitter : doesntexist@404 </h2>
            </div> 
        );
    }

    componentDidMount()
    {
        console.log("5 (Child) UserClass componentDidMount() function")
        //this is called after the component has been successfully rendered 
        //thus this is called after the render function

        //componentDidMount is used after all instances of that component have been constructed and rendered
        //hence componentDidMount() is used(once) after the Aryan and the Elon Musk instances of the UserClass component is called 
        //therefore number - 3(constructor) and number - 4(render) console logs of the Child Component UserClass will be display in the console log two times(one for Aryan instance and the other for Elon Musk Instance) first after the parent's (1-constructor and 2-render)
        //and then the componentDidMount - 5 will be called(once) after all isntances of the UserClass component have been constructed and rendered
    }
}

export default UserClass;

//"render phase"  [      MOUNTING             UPDATING               UNMOUNTING
//  on the code   |         |                     |                      |       
//  end, doesn't  |     constructor               |                      |
//  affect the    |         |                     |                      |
//  actual DOM    [         |________render_______|                      | 
//                          |                     |                      |
//"commit phase"  [   REACT actually updates the DOM and refs            |
// reflect things |         |                     |                      |
// on the DOM     [   componentDidMount    componentDidUpdate    componentDidUnmount
//
// example:- New props, setState(), forceUpdate() are used in the UPDATING process which updates the vritual DOM and then chose changes are propagated to the actual DOM


// - Parent Constructor                                            ] "render phase"
// - Parent render                                                 | this is the phase in which
//                                                                 | REACT constructs and renders
//    -  First Child Constructor (Aryan Constructor)               | the component in the Virtual
//    -  First Child render (Aryan render)                         | DOM, it is done here because
//                                                                 | updating the actual DOM
//    -  Second Child Constructor (Elon Constructor)               | dynamically and repeatedly
//    -  Second Child render (Elon render)                         | could be a really expnesive
//                                                                 | process in REACT.
//    ...(etc)                                                     ]       
//     
//     - First Child ComponentDidMount (Aryan)                     ] "commit phase"
//     - Second Child ComponentDidMount (Elon)                     | this is the phase in which 
//     ...(etc)                                                    | react updates the actual
//                                                                 | DOM and reflects the changes
// - Parent ComponentDidMount                                      ] on our webpage.
//
// Since, the render phase is fast, REACT batches the render phase.
// That is why the constructor and render of all the Child Instances of the Component are called before any of their componentDidMount is called.
// because the constructor and render operations are a part of the render phase and it happens all at once for all the instances of a component.
// And since, the commit phase is slow and costly it is called in the end for all instances of the Component at once
// and commit phase updates the actual DOM and renders the changes on our webpage.
//
// Therefore, the render phase batches all the instances of a component 
// and hence constructor() and render() of all the instances of a component are called 
// before the commit phase and updating the actual DOM
// The render phase updates the vritual DOM
//
// commit phase include actually incorporating the Component and it's instances on the webpage's actual DOM
// and then call componentDidMount() Hook to signal that the component has been mounted on the DOM.

// THIS IS A PART OF REACT'S OPTIMIZATION

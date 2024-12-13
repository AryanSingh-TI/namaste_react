import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header"
import Body from "./src/components/Body"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About"
import Contact from "./src/components/Contact"
import Error from "./src/components/Error"
import RestaurantMenu from "./src/components/RestaurantMenu";

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
            {/* Outlet is a component provided by react-router-dom that is used to render the following corresponding components in the children of the parent component whenever the url changes */}
            {/*for exaple if the url changes to localhost:1234/about, the header will be as it is but the Outlet will be replaced by the About component that has the corresponding path in the url with /about  */}
            {/* these children components for AppLayout are created in  appRouter using createBrowserRouter*/}
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>, //errorElement is used to render a component when the route is wrong in our web application
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {   
                path: "/restaurants/:resId",
                element:<RestaurantMenu/>
                //here the colon is used for dynamic routing specifying that the resId will change dynamically and the data inside the component it will load will also be configured dynamically according to the route/url

            },  
        ] //children key is used to create children route of the AppLayout Component
    },
])
//createBrowserRouter is used to create a list of different routes inside our web application
//according to React documentation this is the recommended way of creating routes in our web application

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)
//those different routes created by the createBrowserRouter is rendered on the root with the help of RouterProvider
//router-dom also gives us a 404 error page for a route that doesn't exist in our web application for exaple:- localhost:1234/thisroutdoesnotexist
//we can also show a custom error page for a route that doesn't exist in our web application using errorElement in createBrowserRouter()
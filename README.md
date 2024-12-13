# React + Vite

```This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
```

# Pracel (Bundler, makes our app production ready) (A dependency of react in Node runtime environment)

```Following are the functions of parcel :-
    -> creates a dev build for us
    -> creates a local server for us
    -> automatically refreshes our page using HMR (Hot Module Replacement)
    -> Parcel uses file watching algorithm written in C++ to implement the HMR
    -> parcel-caches = caches the app for faster build and notice changes
    -> parcel makes our app production ready by doing the following things
        a - Image Optimization
        b - Minification
        c - Bundling
    -> Compressing our files
    -> Parcel does Consistent Hashing
    -> Code Splitting
    -> Differential Bundling - *Bundles your app differently for different browsers*
    -> Diagnostics
    -> Good Error Handling and Suggestions
    -> HTTPs
    -> Parcel Implements Tree Shaking algorithm - used to remove unused code form our app
    -> Different dev and production bundles (more optimization on production builds) "npx parcel build index1.html" is the terminal code for production app builds, the only thing different is that we add "build"
```
# Git Ignore
```
-> node-module can always be installed using npm install and regenrated therefore we dont push it on git, also because node module is big and bloated and takes up a lot of space
-> parcel-cache and dist are generated and updated everytime we change or start our app therefore since they can be generated they dont need to be pushed on git
```

# TWO types of Export/Import

- Default Export/Import
```js
export default component;
import component from path;
```
- Named Export/Import
```js
export const component
import {component} from path
```
- More about paths
```
(a) in path ../ is used to move up a level in the hierarchy of directories
(b) while ./ means in the same directory
(c) ./level_1/level_2 this means to move down two levels from the same directory
(d) ../../utils/constants means to move up two levels(for example move out of components and then src in /src/components) and then go inside utils and get constants

```

# React Hooks
```
 (Normal JS utility functions)
 - useState() => Used to generate Superpowerful State variables in React
 - useEffect()

```

# React Algorithms
```
React uses reconciliation algorithm which is also known as React Fiber.
Reconcialiation is whenever something changes in the UI, this algorithm came in React version 16 and from then onwards it was known as React Fiber.

React Maintains a Virtual DOM which is a representation of the actual DOM consisting of HTML tags.
The virtual DOM on the other hand contains javascript objects that represents the actual DOM.

example:-
                            {
<div>                            div : {
    <div>                                 div : {
        <img/>   ===>                             img : ...
    </div>                                      }
</div>                                 }  
                            }     

HTML TAGS                      Javascript Objects                     
(ACTUAL DOM)                     (VIRTUAL DOM)     



The diff Algorithm observes the change in the state of the virtual DOM that is faster than doing it in the Actual DOM and maintains State and Observes Change in the State Variable.

When we click on a button the State Variable gets changed and the DIff Algorithm observes the changes in the pervious and current Virtual DOM and updates the UI accordingly.

A normal javascript object doesn't update the Virtual DOM, a state variable like the UseState Hook does and that will update the UI.

```

# Monolith

```
Monolithic architecture is a software design pattern where all components of an application are tightly integrated into a single codebase and executed as a single unit or process. This approach contrasts with modular or distributed architectures, such as microservices, where functionalities are divided into smaller, independently deployable services.
```

# Microservices
```
Microservices architecture is a software design approach where an application is built as a collection of small, loosely coupled, independently deployable services. Each service is responsible for a specific functionality or business capability and communicates with other services through well-defined APIs.

Microservies can inlcude components like 
- UI
- Backend
- Database
- Messages & Notifications
- Authentication
All these services exist independently and ccommunicate with each other to form a large app.
They can also be written in different languages with each service their own language.

These services can be deployed on the different ports that can be integrated on our application's URL (domain name)
```
# Rendering Logic Approaches
```

(1) 1st Approach

As soon as the page loads ----> Make an API call and wait for the API call to finish ----> then render the page after the API call is finished 

(2) 2nd Approach

Load the page ----> Render the skeleton of the website ----> Make an API call ----> Re-render the page after  populating the components from the data from the API call when the API call is finished


In React, we will always use the second approach because in the first approach the user has to wait for everything to load until the API call is finished and then suddenly everything appears on the screen, that is a poor user experience, in comparison the second approach renders the skeleton of the website and basic UI as soon as the page loads and then makes the API call and rerenders the page with the data from the API call populating the components of the page as soon as the API call is finished finished.

Even though we are rendering twice in the second approach it's optimal for user experience and react has very fast render cycles so it hardly matters.
```
# React Hooks
```
React Hooks are just a normal javascript function.
which react provides to us and every hook have their own specific use case.
```

# Routing types
```
- Client Side Routing
    This is when we define routes in our application on the client side. When we already have a component in our source code for a route and we just load that component for that given route (url).

- Server Side Routing
    This is when we make network calls to render a page while routing from one page to another.
```

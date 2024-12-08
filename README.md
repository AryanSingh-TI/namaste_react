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

HTML TAGS                        (VIRTUAL DOM)                               
(ACTUAL DOM)                   Javascript Objects



The diff Algorithm observes the change in the state of the virtual DOM that is faster than doing it in the Actual DOM and maintains State and Observes Change in the State Variable.

When we click on a button the State Variable gets changed and the DIff Algorithm observes the changes in the pervious and current Virtual DOM and updates the UI accordingly.

A normal javascript object doesn't update the Virtual DOM, a state variable like the UseState Hook does and that will update the UI.

```
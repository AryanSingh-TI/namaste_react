# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Pracel (Bundler, makes our app production ready) (A dependency of react in Node runtime environment)

Following are the functions of parcel :-
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

# Git Ignore

-> node-module can always be installed using npm install and regenrated therefore we dont push it on git, also because node module is big and bloated and takes up a lot of space
-> parcel-cache and dist are generated and updated everytime we change or start our app therefore since they can be generated they dont need to be pushed on git





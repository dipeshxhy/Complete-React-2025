[WEBSITE_LINK]('https://pizza-menu-self-omega.vercel.app/')

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## JSX

- every components must return JSX
- it describes how the components / UI looks like based on currentData which be state or props
- it is Javascript extension which embedded css html and Javascript together
- Jsx is converted into React.createElement() by the babel which is understand by the browser
- It is declarative syntax od building UI

## Imperative

- The Vanilla Js manual selection and DOM traversal
- manually updated the variables and get desired output

**This is imperative way of building UI but in react we never touch DOM**

![separation in react]('./public/separation-react.png')

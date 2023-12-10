import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Head, Link, createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
function ApplicationHead({ title, children }) {
  return /* @__PURE__ */ jsxs(Head, { children: [
    /* @__PURE__ */ jsx("title", { children: title ? `${title} - My App` : "My App" }),
    children
  ] });
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ApplicationHead
}, Symbol.toStringTag, { value: "Module" }));
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx(Link, { href: "/", children: "Home" }),
      /* @__PURE__ */ jsx(Link, { href: "/about", children: "About" }),
      /* @__PURE__ */ jsx(Link, { href: "/contact", children: "Contact" })
    ] }),
    /* @__PURE__ */ jsx("article", { children })
  ] });
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Layout
}, Symbol.toStringTag, { value: "Module" }));
function Welcome$1() {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(ApplicationHead, { title: "Welcome" }),
    /* @__PURE__ */ jsx("h1", { children: "Welcome" }),
    /* @__PURE__ */ jsx("p", { children: "Hello welcome to your first Inertia app!" }),
    /* @__PURE__ */ jsx(Link, { href: "/test2", children: "Next Page" })
  ] });
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Welcome$1
}, Symbol.toStringTag, { value: "Module" }));
function Welcome() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Welcome" }),
    /* @__PURE__ */ jsx("h1", { children: "Welcome Back" }),
    /* @__PURE__ */ jsx("p", { children: "Hello again and welcome to your first Inertia page!" }),
    /* @__PURE__ */ jsx(Link, { href: "/test", children: "Previous Page" })
  ] });
}
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Welcome
}, Symbol.toStringTag, { value: "Module" }));
createServer((page) => createInertiaApp({
  page,
  render: ReactDOMServer.renderToString,
  resolve: (name) => {
    const pages = /* @__PURE__ */ Object.assign({ "./Pages/Head.jsx": __vite_glob_0_0, "./Pages/Layout.jsx": __vite_glob_0_1, "./Pages/User/Show.jsx": __vite_glob_0_2, "./Pages/User/ShowMore.jsx": __vite_glob_0_3 });
    return pages[`./Pages/${name}.jsx`];
  },
  setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
}));

import React, { lazy, Suspense, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestrauntMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import {Provider} from "react-redux"
import store  from "./components/utils/store";
import Cart from "./components/Cart";
//bundle chunking
//code splitting
//dynamic loading
//on demand loading
//dynamin import

const Instamart = lazy(() => import("./components/Instamart"));
//lazy load or dynamic import
//upon on demand loading  -> upon render -> suspend loading
//never dynamically load component inside another component

// default import
//Named import
//import { Title } from "./components/Header";
/*
    header
        -logo
        -nav items(right side)
        -cart
    body
        -search bar
        -restaurants list
        -restaurant card
            -image
            -name
            -rating
            -cusines
    footer
        -links
        -copyright            
*/
//react.Fragments coming from react library
//jsx one parent

//config driven ui

//optional chaining

//props- properties

const AppLayout = () => {
  
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
        children: [
          {
            path: "profile", //parentPath+{path} =>localhost:1234/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
        errorElement: <Error />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path:"/cart",
        element:<Cart/>

      }
    ],
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { createRoot 
} from "react-dom/client";
// default import
import Header from "./components/Header";
//Named import
//import { Title } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";


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
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>
);

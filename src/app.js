import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { useState} from "react";



 // Below is a javascript Object
 //const styleCard={
  //  backgroundColor: "#f0f0f0",
 //}

 



const AppLayout = () => {
    return (
        <div className="app-container">
        <Header />
        <Body />
        </div>
    )

}
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
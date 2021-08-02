import React from "react";
import ReactDom from "react-dom";

import App  from "./app"

//this is javax which is a way to inject js into html
ReactDom.render(
    <h1>Howdy there</h1>, 
    document.getElementById("testing")
);

ReactDom.render(
    <App />,
    document.getElementById("root"))
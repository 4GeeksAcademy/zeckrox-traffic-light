//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import TrafficLight from "./component/home.jsx";



//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));

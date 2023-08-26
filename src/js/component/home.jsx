import React from "react";
import { useState } from "react";

//create your first component
const TrafficLight = () => {
	const [activeLight, setActiveLight] = useState("red")

	return <>
	<div className="traffic-pole"></div>
	<div className="traffic-light">
	<div onClick={()=>setActiveLight("red")} className={`light light-red ${activeLight=="red"? "active-red" : ""}`}></div>
	<div onClick={()=>setActiveLight("yellow")} className={`light light-yellow ${activeLight=="yellow"? "active-yellow" : ""}`}></div>
	<div onClick={()=>setActiveLight("green")} className={`light light-green ${activeLight=="green"? "active-green" : ""}`}></div>
	</div>
	</>
};

export default TrafficLight;

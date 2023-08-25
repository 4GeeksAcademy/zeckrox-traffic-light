import React from "react";
import { useState } from "react";

//create your first component
const TrafficLight = () => {
	const [activeLight, setActiveLight] = useState("red")
	const redActive = ()=>{return activeLight=="red"?" active-red":""}
	const yellowActive = ()=>{return activeLight=="yellow"?" active-yellow":""}
	const greenActive = ()=>{return activeLight=="green"?" active-green":""}

	return <>
	<div className="traffic-pole"></div>
	<div className="traffic-light">
	<div onClick={()=>setActiveLight("red")} className={"light light-red" + redActive()}></div>
	<div onClick={()=>setActiveLight("yellow")} className={"light light-yellow"+ yellowActive()}></div>
	<div onClick={()=>setActiveLight("green")} className={"light light-green"+ greenActive()}></div>
	</div>
	</>
};

export default TrafficLight;

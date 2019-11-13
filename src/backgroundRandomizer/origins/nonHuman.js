import React from "react";
import rollDice from "../randomizers/diceRoller";
import jsonData from "./origins.json";

const NonHuman = props => {
	let roll = rollDice(1, 8);
	return [
		<h3 key="nonhuman_title">{props.race} Parents:</h3>,
		<p key="nonhuman_result">
			{roll}: {jsonData[props.race][roll]}
		</p>,
	];
};

export default NonHuman;

import React from "react";
import rollDice from "../randomizers/diceRoller";
import jsonData from "./origins.json";

const Sibling = () => {
	let roll = rollDice(1, 5);
	return [
		<h3 key="sibling_title">Siblings:</h3>,
		<p key="sibling_result">
			{roll}: {jsonData["Siblings"][roll]}
		</p>,
	];
};

export default Sibling;

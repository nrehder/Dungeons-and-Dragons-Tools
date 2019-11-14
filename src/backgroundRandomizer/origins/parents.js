import React from "react";
import rollDice from "../../diceRoller";
import jsonData from "./origins.json";

const Parents = () => {
	const roll = rollDice(1, 100);
	return [
		<h3 key="parents_title">Parents:</h3>,
		<p key="parents_result">
			{roll}:{" "}
			{roll < 96 ? jsonData["Parents"][1] : jsonData["Parents"][2]}
		</p>,
	];
};

export default Parents;

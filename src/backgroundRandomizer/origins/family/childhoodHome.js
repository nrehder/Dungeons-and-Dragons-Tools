import React from "react";
import rollDice from "../../../diceRoller";
import jsonData from "../origins.json";

const ChildhoodHome = props => {
	const roll = rollDice(1, 100) + props.mod;
	let result;
	if (roll > 110) {
		result = 9;
	} else if (roll > 90) {
		result = 8;
	} else if (roll > 70) {
		result = 7;
	} else if (roll > 50) {
		result = 6;
	} else if (roll > 40) {
		result = 5;
	} else if (roll > 30) {
		result = 4;
	} else if (roll > 20) {
		result = 3;
	} else if (roll > 0) {
		result = 2;
	} else {
		result = 1;
	}

	return [
		<h3 key="childhood_home_title">Childhood Home:</h3>,
		<p key="childhood_home_result">
			{roll}: {jsonData["Childhood_Home"][result]}
		</p>,
	];
};

export default ChildhoodHome;

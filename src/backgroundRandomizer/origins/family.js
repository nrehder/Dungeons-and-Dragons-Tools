import React from "react";
import rollDice from "../randomizers/diceRoller";
import AbsentParent from "./family/absentParent";
import jsonData from "./origins.json";

const Family = () => {
	const roll = rollDice(1, 100);
	let result;

	if (roll > 75) {
		result = 11;
	} else if (roll > 55) {
		result = 10;
	} else if (roll > 35) {
		result = 9;
	} else if (roll > 25) {
		result = 8;
	} else if (roll > 15) {
		result = 7;
	} else if (roll > 7) {
		result = 6;
	} else if (roll > 5) {
		result = 5;
	} else if (roll > 3) {
		result = 4;
	} else {
		result = roll;
	}

	const familyResult = [
		<h3 key="family_title">Family:</h3>,
		<p key="family_result">
			{roll}: {jsonData["Family"][result]}
		</p>,
	];

	if (roll < 76)
		familyResult.push(<AbsentParent key="absent_parent_container" />);

	return familyResult;
};

export default Family;

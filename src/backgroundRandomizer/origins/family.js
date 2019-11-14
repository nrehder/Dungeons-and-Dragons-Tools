import React from "react";
import rollDice from "../../diceRoller";
import AbsentParent from "./family/absentParent";
import jsonData from "./origins.json";
import TableRow from "../tableLayout/tableRow";

const Family = () => {
	const roll = rollDice(1, 100);
	let result;

	if (roll > 75) {
		result = jsonData["Family"][11];
	} else if (roll > 55) {
		result = jsonData["Family"][10];
	} else if (roll > 35) {
		result = jsonData["Family"][9];
	} else if (roll > 25) {
		result = jsonData["Family"][8];
	} else if (roll > 15) {
		result = jsonData["Family"][7];
	} else if (roll > 7) {
		result = jsonData["Family"][6];
	} else if (roll > 5) {
		result = jsonData["Family"][5];
	} else if (roll > 3) {
		result = jsonData["Family"][4];
	} else {
		result = jsonData["Family"][roll];
	}

	const familyResult = [
		<TableRow key="family" category="Family" roll={roll} result={result} />,
	];

	if (roll < 76)
		familyResult.push(<AbsentParent key="absent_parent_container" />);

	return familyResult;
};

export default Family;

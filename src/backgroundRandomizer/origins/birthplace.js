import React from "react";
import rollDice from "../../diceRoller";
import jsonData from "./origins.json";
import TableRow from "../tableLayout/tableRow";

const Birthplace = () => {
	let roll = rollDice(1, 100);
	let result;

	if (roll < 51) {
		result = jsonData["Birthplace"][1];
	} else if (roll < 56) {
		result = jsonData["Birthplace"][2];
	} else if (roll < 64) {
		result = jsonData["Birthplace"][3];
	} else if (roll < 66) {
		result = jsonData["Birthplace"][4];
	} else if (roll < 69) {
		result = jsonData["Birthplace"][5];
	} else if (roll < 71) {
		result = jsonData["Birthplace"][6];
	} else if (roll < 73) {
		result = jsonData["Birthplace"][7];
	} else if (roll < 75) {
		result = jsonData["Birthplace"][8];
	} else if (roll < 78) {
		result = jsonData["Birthplace"][9];
	} else if (roll < 79) {
		result = jsonData["Birthplace"][10];
	} else if (roll < 81) {
		result = jsonData["Birthplace"][11];
	} else if (roll < 83) {
		result = jsonData["Birthplace"][12];
	} else if (roll < 85) {
		result = jsonData["Birthplace"][13];
	} else if (roll < 86) {
		result = jsonData["Birthplace"][14];
	} else if (roll < 89) {
		result = jsonData["Birthplace"][15];
	} else if (roll < 92) {
		result = jsonData["Birthplace"][16];
	} else if (roll < 94) {
		result = jsonData["Birthplace"][17];
	} else if (roll < 96) {
		result = jsonData["Birthplace"][18];
	} else if (roll < 97) {
		result = jsonData["Birthplace"][19];
	} else if (roll < 98) {
		result = jsonData["Birthplace"][20];
	} else if (roll < 99) {
		result = jsonData["Birthplace"][21];
	} else if (roll < 100) {
		result = jsonData["Birthplace"][22];
	} else {
		result = jsonData["Birthplace"][23];
	}

	return <TableRow category="Birthplace" roll={roll} result={result} />;
};

export default Birthplace;

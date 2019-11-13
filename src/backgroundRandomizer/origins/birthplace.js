import React from "react";
import rollDice from "../randomizers/diceRoller";
import jsonData from "./origins.json";

const Birthplace = () => {
	let roll = rollDice(1, 100);
	let result;

	if (roll < 51) {
		result = 1;
	} else if (roll < 56) {
		result = 2;
	} else if (roll < 64) {
		result = 3;
	} else if (roll < 66) {
		result = 4;
	} else if (roll < 69) {
		result = 5;
	} else if (roll < 71) {
		result = 6;
	} else if (roll < 73) {
		result = 7;
	} else if (roll < 75) {
		result = 8;
	} else if (roll < 78) {
		result = 9;
	} else if (roll < 79) {
		result = 10;
	} else if (roll < 81) {
		result = 11;
	} else if (roll < 83) {
		result = 12;
	} else if (roll < 85) {
		result = 13;
	} else if (roll < 86) {
		result = 14;
	} else if (roll < 89) {
		result = 15;
	} else if (roll < 92) {
		result = 16;
	} else if (roll < 94) {
		result = 17;
	} else if (roll < 96) {
		result = 18;
	} else if (roll < 97) {
		result = 19;
	} else if (roll < 98) {
		result = 20;
	} else if (roll < 99) {
		result = 21;
	} else if (roll < 100) {
		result = 22;
	} else {
		result = 23;
	}

	return [
		<h3 key="birthplace_title">Birthplace:</h3>,
		<p key="birthplace_result">
			{roll}: {jsonData["Birthplace"][result]}
		</p>,
	];
};

export default Birthplace;

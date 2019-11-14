import React from "react";
import rollDice from "../../diceRoller";
import jsonData from "./personalDecisions.json";

const CharacterClass = props => {
	const roll = rollDice(1, 6);

	return [
		<h3 key="character_background_title">Class Training:</h3>,
		<p key="character_background_result">
			{roll}: {jsonData["Character_Class"][props.characterClass][roll]}
		</p>,
	];
};

export default CharacterClass;

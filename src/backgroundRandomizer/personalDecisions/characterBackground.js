import React from "react";
import rollDice from "../../diceRoller";
import jsonData from "./personalDecisions.json";

const CharacterBackground = props => {
	const roll = rollDice(1, 6);

	return [
		<h3 key="character_background_title">Character Background:</h3>,
		<p key="character_background_result">
			{roll}: {jsonData["Character_Background"][props.background][roll]}
		</p>,
	];
};

export default CharacterBackground;

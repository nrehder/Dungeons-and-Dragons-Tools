import React from "react";
import rollDice from "../../randomizers/diceRoller";
import ChildhoodHome from "./childhoodHome";

const FamilyLifestyle = () => {
	const roll = rollDice(3, 6);
	const result = { text: "", mod: 0 };
	if (roll === 18) {
		result.text = "Aristoctratic (+40)";
		result.mod = 40;
	} else if (roll > 15) {
		result.text = "Wealthy (+20)";
		result.mod = 20;
	} else if (roll > 12) {
		result.text = "Comfortable (+10)";
		result.mod = 10;
	} else if (roll > 8) {
		result.text = "Modest (+0)";
		result.mod = 0;
	} else if (roll > 5) {
		result.text = "Poor (-10)";
		result.mod = -10;
	} else if (roll > 3) {
		result.text = "Squalid (-20)";
		result.mod = -20;
	} else {
		result.text = "Wretched (-40)";
		result.mod = -40;
	}
	return [
		<h3 key="family_lifestyle">Family Lifestyle</h3>,
		<p key="family_lifestyle_text">{result.text}</p>,
		<ChildhoodHome key="childhood_home" mod={result.mod} />,
	];
};

export default FamilyLifestyle;

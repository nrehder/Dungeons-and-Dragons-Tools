import React from "react";
import rollDice from "../../randomizers/diceRoller";
import ChildhoodHome from "./childhoodHome";
import jsonData from "../origins.json";

const FamilyLifestyle = () => {
	const roll = rollDice(3, 6);
	let mod;
	if (roll === 18) {
		mod = 40;
	} else if (roll > 15) {
		mod = 20;
	} else if (roll > 12) {
		mod = 10;
	} else if (roll > 8) {
		mod = 0;
	} else if (roll > 5) {
		mod = -10;
	} else if (roll > 3) {
		mod = -20;
	} else {
		mod = -40;
	}

	return [
		<h3 key="family_lifestyle">Family Lifestyle:</h3>,
		<p key="family_lifestyle_text">
			{roll}: {jsonData["Family_Lifestyle"][mod]}
		</p>,
		<ChildhoodHome key="childhood_home" mod={mod} />,
	];
};

export default FamilyLifestyle;

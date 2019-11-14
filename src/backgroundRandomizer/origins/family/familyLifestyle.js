import React from "react";
import rollDice from "../../../diceRoller";
import ChildhoodHome from "./childhoodHome";
import jsonData from "../origins.json";
import TableRow from "../../tableLayout/tableRow";

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
		<TableRow
			key="family_lifestyle"
			category="Family Lifestyle"
			roll={roll}
			result={jsonData["Family_Lifestyle"][mod]}
		/>,
		<ChildhoodHome key="childhood_home" mod={mod} />,
	];
};

export default FamilyLifestyle;

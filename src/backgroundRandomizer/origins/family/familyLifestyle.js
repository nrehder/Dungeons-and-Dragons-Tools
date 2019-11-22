import React from "react";

import ChildhoodHome from "./childhoodHome";
import jsonData from "../origins.json";
import TableRow from "../../tableLayout/tableRow";

const FamilyLifestyle = props => {
	let mod;
	if (props.familyLifeRoll === 18) {
		mod = 40;
	} else if (props.familyLifeRoll > 15) {
		mod = 20;
	} else if (props.familyLifeRoll > 12) {
		mod = 10;
	} else if (props.familyLifeRoll > 8) {
		mod = 0;
	} else if (props.familyLifeRoll > 5) {
		mod = -10;
	} else if (props.familyLifeRoll > 3) {
		mod = -20;
	} else {
		mod = -40;
	}

	return [
		<TableRow
			key="family_lifestyle"
			category="Family Lifestyle"
			roll={props.familyLifeRoll}
			result={jsonData["Family_Lifestyle"][mod]}
		/>,
		<ChildhoodHome
			key="childhood_home"
			roll={props.childHomeRoll}
			mod={mod}
		/>,
	];
};

export default FamilyLifestyle;

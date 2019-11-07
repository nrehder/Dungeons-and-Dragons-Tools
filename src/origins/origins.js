import React from "react";
import NonHuman from "./nonHuman";
import Parents from "./parents";
import Birthplace from "./birthplace";
import Sibling from "./sibling";
import Family from "./family";
import FamilyLifestyle from "./family/familyLifestyle";
import ChildhoodMemories from "./family/childhoodMemories";

const Origins = props => {
	return (
		<div>
			<h1>Origins</h1>
			<Parents />
			{props.race !== "Other" ? <NonHuman race={props.race} /> : null}
			<Birthplace />
			<Sibling />
			<Family />
			<FamilyLifestyle />
			<ChildhoodMemories chaMod={props.chaMod} />
		</div>
	);
};

export default Origins;

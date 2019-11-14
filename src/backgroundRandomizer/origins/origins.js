import React from "react";

import TableHeader from "../tableLayout/tableHeader";

import NonHuman from "./nonHuman";
import Parents from "./parents";
import Birthplace from "./birthplace";
import Sibling from "./sibling";
import Family from "./family";
import FamilyLifestyle from "./family/familyLifestyle";
import ChildhoodMemories from "./family/childhoodMemories";

const Origins = props => {
	return (
		<div className="w-80 table-margin">
			<h1>Origins</h1>
			<TableHeader />
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

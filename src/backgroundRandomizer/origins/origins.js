import React from "react";

import { connect } from "react-redux";

import TableHeader from "../tableLayout/tableHeader";

import NonHuman from "./nonHuman";
import Parents from "./parents";
import Birthplace from "./birthplace";
import Sibling from "./sibling";
import Family from "./family";
import FamilyLifestyle from "./family/familyLifestyle";
import ChildhoodMemories from "./family/childhoodMemories";

const Origins = props => {
	let content = null;
	if (props.view) {
		content = (
			<div className="card-content">
				<TableHeader />
				<Parents roll={props.parentsRoll} />
				{props.race !== "Other" ? (
					<NonHuman roll={props.nonHumanRoll} race={props.race} />
				) : null}
				<Birthplace roll={props.birthplaceRoll} />
				<Sibling roll={props.siblingRoll} />
				<Family
					familyRoll={props.familyRoll}
					absentParentRoll={props.absentParentRoll}
					deadParentRoll={props.deadParentRoll}
				/>
				<FamilyLifestyle
					familyLifeRoll={props.familyLifeRoll}
					childHomeRoll={props.childHomeRoll}
				/>
				<ChildhoodMemories
					roll={props.childMemoriesRoll}
					chaMod={props.chaMod}
				/>
			</div>
		);
	}
	return (
		<div className="w-80 table-margin card-wrapper">
			<div className="card-header" onClick={props.click}>
				<h1>Origins</h1>
			</div>
			{content}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		race: state.race,
		chaMod: state.chaMod,
		parentsRoll: state.originRolls.parentsRoll,
		nonHumanRoll: state.originRolls.nonHumanRoll,
		birthplaceRoll: state.originRolls.birthplaceRoll,
		siblingRoll: state.originRolls.siblingRoll,
		familyRoll: state.originRolls.familyRoll,
		absentParentRoll: state.originRolls.absentParentRoll,
		deadParentRoll: state.originRolls.deadParentRoll,
		familyLifeRoll: state.originRolls.familyLifeRoll,
		childHomeRoll: state.originRolls.childHomeRoll,
		childMemoriesRoll: state.originRolls.childMemoriesRoll,
	};
};

export default connect(mapStateToProps)(Origins);

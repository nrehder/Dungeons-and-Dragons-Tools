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

class Origins extends React.Component {
	state = {
		viewContent: true,
	};

	contentViewToggler = () => {
		this.setState({ viewContent: !this.state.viewContent });
	};

	render() {
		let content = null;
		if (this.state.viewContent) {
			content = (
				<div className="card-content">
					<TableHeader />
					<Parents roll={this.props.parentsRoll} />
					{this.props.race !== "Other" ? (
						<NonHuman
							roll={this.props.nonHumanRoll}
							race={this.props.race}
						/>
					) : null}
					<Birthplace roll={this.props.birthplaceRoll} />
					<Sibling roll={this.props.siblingRoll} />
					<Family
						familyRoll={this.props.familyRoll}
						absentParentRoll={this.props.absentParentRoll}
						deadParentRoll={this.props.deadParentRoll}
					/>
					<FamilyLifestyle
						familyLifeRoll={this.props.familyLifeRoll}
						childHomeRoll={this.props.childHomeRoll}
					/>
					<ChildhoodMemories
						roll={this.props.childMemoriesRoll}
						chaMod={this.props.chaMod}
					/>
				</div>
			);
		}
		return (
			<div className="w-80 table-margin">
				<div className="card-wrapper">
					<div
						className="card-header"
						onClick={this.contentViewToggler}
					>
						<h1>Origins</h1>
					</div>
					{content}
				</div>
			</div>
		);
	}
}

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

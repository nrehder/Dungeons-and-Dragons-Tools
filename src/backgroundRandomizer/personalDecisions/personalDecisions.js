import React from "react";

import { connect } from "react-redux";

import TableHeader from "../tableLayout/tableHeader";
import TableRow from "../tableLayout/tableRow";

import jsonData from "./personalDecisions.json";

const PersonalDecisions = props => {
	let content = null;

	if (props.view) {
		content = (
			<div className="card-content">
				<TableHeader />
				<TableRow
					category="Character Background"
					roll={props.charBackRoll}
					result={
						jsonData["Character_Background"][props.charBack][
							props.charBackRoll
						]
					}
				/>
				<TableRow
					category="Class Training"
					roll={props.charClassRoll}
					result={
						jsonData["Character_Class"][props.charClass][
							props.charClassRoll
						]
					}
				/>
			</div>
		);
	}

	return (
		<div className="w-80 table-margin card-wrapper">
			<div className="card-header" onClick={props.click}>
				<h1>Personal Decisions</h1>
			</div>
			{content}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		charBack: state.background,
		charClass: state.class,
		charBackRoll: state.personalRolls.charBackRoll,
		charClassRoll: state.personalRolls.charClassRoll,
	};
};

export default connect(mapStateToProps)(PersonalDecisions);

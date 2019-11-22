import React from "react";

import { connect } from "react-redux";

import LifeEvent from "./lifeEvent";
import TableHeader from "../tableLayout/tableHeader";

const LifeEvents = props => {
	let content = null;

	if (props.view) {
		const eventsResults = [];

		for (let i = 0; i < props.eventRolls.length; i++) {
			eventsResults.push(
				<LifeEvent key={i} index={i} roll={props.eventRolls[i]} />
			);
		}

		content = (
			<div className="card-content">
				<TableHeader />
				{eventsResults}
			</div>
		);
	}

	return (
		<div className="w-80 table-margin card-wrapper">
			<div className="card-header" onClick={props.click}>
				<h1>Life Events</h1>
			</div>
			{content}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		eventRolls: state.lifeEventRolls,
	};
};

export default connect(mapStateToProps)(LifeEvents);

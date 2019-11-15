import React from "react";

import { connect } from "react-redux";

import LifeEvent from "./lifeEvent";
import Adventures from "./secondaryTables/adventures";
import ArcaneMatters from "./secondaryTables/arcaneMatters";
import Boons from "./secondaryTables/boons";
import Crime from "./secondaryTables/crime";
import WeirdStuff from "./secondaryTables/weirdStuff";
import War from "./secondaryTables/war";
import Tragedies from "./secondaryTables/tragedies";
import Punishment from "./secondaryTables/punishment";
import SupernaturalEvents from "./secondaryTables/supernaturalEvents";
import TableHeader from "../tableLayout/tableHeader";

const LifeEvents = props => {
	const eventsResults = [];

	for (let i = 0; i < props.eventRolls.length; i++) {
		eventsResults.push(
			<LifeEvent key={i} index={i} roll={props.eventRolls[i]} />
		);
	}
	return (
		<div className="w-80 table-margin">
			<h1>Life Events</h1>
			<TableHeader />
			{eventsResults}
			<Adventures />
			<ArcaneMatters />
			<Boons />
			<Crime />
			<Punishment />
			<SupernaturalEvents />
			<Tragedies />
			<War />
			<WeirdStuff />
		</div>
	);
};

const mapStateToProps = state => {
	return {
		eventRolls: state.lifeEventRolls,
	};
};

export default connect(mapStateToProps)(LifeEvents);

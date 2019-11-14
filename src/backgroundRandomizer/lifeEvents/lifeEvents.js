import React from "react";
import rollDice from "../../diceRoller";
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

const eventsDice = age => {
	if (age > 60) {
		return 12;
	} else if (age > 50) {
		return 10;
	} else if (age > 40) {
		return 8;
	} else if (age > 30) {
		return 6;
	} else if (age > 20) {
		return 4;
	} else {
		return 1;
	}
};

const LifeEvents = props => {
	const diceMax = eventsDice(props.age);
	const numEvents = rollDice(1, diceMax);

	const eventsResults = [];

	for (let i = 0; i < numEvents; i++) {
		eventsResults.push(<LifeEvent key={i} />);
	}
	return (
		<div>
			<h1>Life Events</h1>
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

export default LifeEvents;

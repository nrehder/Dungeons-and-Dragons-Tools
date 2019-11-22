import React from "react";
import Adventures from "./secondaryTables/adventures";
import ArcaneMatters from "./secondaryTables/arcaneMatters";
import Boons from "./secondaryTables/boons";
import Crime from "./secondaryTables/crime";
import WeirdStuff from "./secondaryTables/weirdStuff";
import War from "./secondaryTables/war";
import Tragedies from "./secondaryTables/tragedies";
import Punishment from "./secondaryTables/punishment";
import SupernaturalEvents from "./secondaryTables/supernaturalEvents";

const LifeEventsTables = () => {
	return (
		<div className="card-content">
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
export default LifeEventsTables;

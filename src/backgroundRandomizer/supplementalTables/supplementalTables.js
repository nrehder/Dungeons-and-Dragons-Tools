import React from "react";
import Status from "./status";
import Relationship from "./relationship";
import Race from "./race";
import Occupation from "./occupation";
import Class from "./class";
import CauseOfDeath from "./causeOfDeath";
import Alignment from "./alignment";

const SupplementalTables = () => {
	return (
		<div className="card-content">
			<Alignment />
			<CauseOfDeath />
			<Class />
			<Occupation />
			<Race />
			<Relationship />
			<Status />
		</div>
	);
};

export default SupplementalTables;

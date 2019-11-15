import React from "react";

import jsonData from "../origins.json";
import deathData from "../../otherTables.json";
import TableRow from "../../tableLayout/tableRow";

const AbsentParent = props => {
	const absentParent = [
		<TableRow
			key="absent_parent"
			category="Absent Parent"
			roll={props.absentRoll}
			result={jsonData["Absent_Parent"][props.absentRoll]}
		/>,
	];

	if (props.absentRoll === 1) {
		absentParent.push(
			<TableRow
				key="dead_parent"
				category="Cause of Death"
				roll={props.deadRoll}
				result={deathData["Cause_Of_Death"][props.deadRoll]}
			/>
		);
	}
	return absentParent;
};

export default AbsentParent;

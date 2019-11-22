import React from "react";

import jsonData from "../origins.json";
import TableRow from "../../tableLayout/tableRow";

const ChildhoodHome = props => {
	let result;
	if (props.roll + props.mod > 110) {
		result = jsonData["Childhood_Home"][9];
	} else if (props.roll + props.mod > 90) {
		result = jsonData["Childhood_Home"][8];
	} else if (props.roll + props.mod > 70) {
		result = jsonData["Childhood_Home"][7];
	} else if (props.roll + props.mod > 50) {
		result = jsonData["Childhood_Home"][6];
	} else if (props.roll + props.mod > 40) {
		result = jsonData["Childhood_Home"][5];
	} else if (props.roll + props.mod > 30) {
		result = jsonData["Childhood_Home"][4];
	} else if (props.roll + props.mod > 20) {
		result = jsonData["Childhood_Home"][3];
	} else if (props.roll + props.mod > 0) {
		result = jsonData["Childhood_Home"][2];
	} else {
		result = jsonData["Childhood_Home"][1];
	}

	return (
		<TableRow
			category="Childhood Home"
			roll={props.roll + " + " + props.mod}
			result={result}
		/>
	);
};

export default ChildhoodHome;

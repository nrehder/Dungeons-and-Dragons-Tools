import React from "react";

import jsonData from "./origins.json";
import TableRow from "../tableLayout/tableRow";

const NonHuman = props => {
	return (
		<TableRow
			category={props.race + " Parents"}
			roll={props.roll}
			result={jsonData[props.race][props.roll]}
		/>
	);
};

export default NonHuman;

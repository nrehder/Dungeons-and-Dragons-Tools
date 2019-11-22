import React from "react";

import jsonData from "./origins.json";
import TableRow from "../tableLayout/tableRow";

const Sibling = props => {
	return (
		<TableRow
			category="Siblings"
			roll={props.roll}
			result={jsonData["Siblings"][Math.ceil(props.roll / 2)]}
		/>
	);
};

export default Sibling;

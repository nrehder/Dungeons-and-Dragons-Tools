import React from "react";

import jsonData from "./origins.json";
import TableRow from "../tableLayout/tableRow";

const Parents = props => {
	const result =
		props.roll < 96 ? jsonData["Parents"][1] : jsonData["Parents"][2];
	return <TableRow category="Parents" roll={props.roll} result={result} />;
};

export default Parents;

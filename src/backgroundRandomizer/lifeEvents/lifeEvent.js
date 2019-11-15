import React from "react";
import jsonData from "./lifeEvents.json";
import TableRow from "../tableLayout/tableRow";

const LifeEvent = props => {
	let result;
	if (props.roll < 51) {
		result = jsonData["Life_Events"][Math.ceil(props.roll / 10)];
	} else if (props.roll < 71) {
		result = jsonData["Life_Events"][6];
	} else if (props.roll < 76) {
		result = jsonData["Life_Events"][7];
	} else if (props.roll < 81) {
		result = jsonData["Life_Events"][8];
	} else if (props.roll < 86) {
		result = jsonData["Life_Events"][9];
	} else if (props.roll < 91) {
		result = jsonData["Life_Events"][10];
	} else if (props.roll < 96) {
		result = jsonData["Life_Events"][11];
	} else if (props.roll < 100) {
		result = jsonData["Life_Events"][12];
	} else {
		result = jsonData["Life_Events"][13];
	}
	return (
		<TableRow
			category={"Life Event " + (props.index + 1)}
			roll={props.roll}
			result={result}
		/>
	);
};

export default LifeEvent;

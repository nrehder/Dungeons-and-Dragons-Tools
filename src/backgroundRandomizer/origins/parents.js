import React from "react";
import rollDice from "../../diceRoller";
import jsonData from "./origins.json";
import TableRow from "../tableLayout/tableRow";

const Parents = () => {
	const roll = rollDice(1, 100);
	const result = roll < 96 ? jsonData["Parents"][1] : jsonData["Parents"][2];
	return <TableRow category="Parents" roll={roll} result={result} />;
};

export default Parents;

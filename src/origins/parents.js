import React from "react";
import rollDice from "../randomizers/diceRoller";

const Parents = () => {
	return (
		<div>
			<h3>Parents:</h3>
			<p>
				{rollDice(1, 100) < 96
					? "You know who your parents are or were."
					: "You do not know who your parents were."}
			</p>
		</div>
	);
};

export default Parents;

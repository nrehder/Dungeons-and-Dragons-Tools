import React from "react";
import rollDice from "../../randomizers/diceRoller";

const ChildhoodMemories = () => {
	const roll = rollDice(3, 6);
	let rollResult = "";
	if (roll > 17) {
		rollResult =
			"Everyone knew who I was, and I had friends everywhere I went.";
	} else if (roll > 15) {
		rollResult =
			"I always found it easy to make friends, and I loved being around people.";
	} else if (roll > 12) {
		rollResult =
			"I had several friends, and my childhood was generally a happy one.";
	} else if (roll > 8) {
		rollResult =
			"I had a few close friends and lived an ordinary childhood.";
	} else if (roll > 5) {
		rollResult =
			"Others saw me as being different or strange, and so I had few companions.";
	} else if (roll > 3) {
		rollResult =
			"I spent most of my childhood alone, with no close friends.";
	} else {
		rollResult =
			"I am still haunted by my childhood, when I was treated badly by my peers.";
	}
	const result = [<h3 key="childhood_memories">Childhood Memories</h3>];
	result.push(<p key="childhood_memories_result">{rollResult}</p>);

	return result;
};

export default ChildhoodMemories;

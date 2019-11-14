const rollDice = (numDice, maxRoll) => {
	let roll = 0;
	for (let i = 0; i < numDice; i++) {
		roll += Math.floor(Math.random() * maxRoll) + 1;
	}
	return roll;
};

export default rollDice;

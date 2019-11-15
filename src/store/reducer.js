import rollDice from "../diceRoller";

const initialState = {
	race: "Half-Elf",
	background: "Acolyte",
	class: "Barbarian",
	age: 1,
	chaMod: 0,
	originRolls: {
		parentsRoll: 0,
		nonHumanRoll: 0,
		birthplaceRoll: 0,
		siblingRoll: 0,
		familyRoll: 0,
		absentParentRoll: 0,
		deadParentRoll: 0,
		familyLifeRoll: 0,
		childHomeRoll: 0,
		childMemoriesRoll: 0,
	},
	personalRolls: {
		charBackRoll: 0,
		charClassRoll: 0,
	},
	lifeEventRolls: [],
};

const rerollOrigins = () => {
	return {
		parentsRoll: rollDice(1, 100),
		nonHumanRoll: rollDice(1, 8),
		birthplaceRoll: rollDice(1, 100),
		siblingRoll: rollDice(1, 5),
		familyRoll: rollDice(1, 100),
		absentParentRoll: rollDice(1, 4),
		deadParentRoll: rollDice(1, 12),
		familyLifeRoll: rollDice(3, 6),
		childHomeRoll: rollDice(1, 100),
		childMemoriesRoll: rollDice(3, 6),
	};
};

const rerollPersonal = () => {
	return {
		charBackRoll: rollDice(1, 6),
		charClassRoll: rollDice(1, 6),
	};
};
const rerollLifeEvents = age => {
	let maxDice;
	if (age > 60) {
		maxDice = 12;
	} else if (age > 50) {
		maxDice = 10;
	} else if (age > 40) {
		maxDice = 8;
	} else if (age > 30) {
		maxDice = 6;
	} else if (age > 20) {
		maxDice = 4;
	} else {
		maxDice = 1;
	}
	const numEvents = rollDice(1, maxDice);
	const eventsResults = [];
	for (let i = 0; i < numEvents; i++) {
		eventsResults.push(rollDice(1, 100));
	}
	return eventsResults;
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "CHANGE_RACE":
			return { ...state, race: action.event.target.value };
		case "CHANGE_BACKGROUND":
			return { ...state, background: action.event.target.value };
		case "CHANGE_CLASS":
			return { ...state, class: action.event.target.value };
		case "CHANGE_AGE":
			const age = +action.event.target.value;
			return { ...state, age };
		case "CHANGE_CHAMOD":
			return { ...state, chaMod: action.event.target.value };
		case "REROLL":
			return {
				...state,
				originRolls: rerollOrigins(state.chaMod),
				personalRolls: rerollPersonal(),
				lifeEventRolls: rerollLifeEvents(state.age),
			};
		default:
			return state;
	}
};

export default reducer;

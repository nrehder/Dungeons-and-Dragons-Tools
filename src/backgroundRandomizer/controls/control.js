import React from "react";

const Control = props => {
	const controlList = props.controlList.map(ele => {
		return (
			<option key={ele} value={ele}>
				{ele}
			</option>
		);
	});

	return (
		<select
			value={props.value}
			onChange={event => {
				props.changeHandler(event, props.control);
			}}
		>
			{controlList}
		</select>
	);
};

export default Control;

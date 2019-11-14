import React from "react";

const TableRow = props => (
	<div className="row">
		<div className="col">
			<p>{props.category}</p>
		</div>
		<div className="col">
			<p>{props.roll}</p>
		</div>
		<div className="col">
			<p>{props.result}</p>
		</div>
	</div>
);

export default TableRow;

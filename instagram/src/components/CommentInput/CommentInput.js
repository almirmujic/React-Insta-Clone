import React from 'react';

import './CommentInput.css';

export default function CommentInput(props) {
	const handleChange = (e) => {
		props.setValue(e.target.value);
	};

	return (
		<form onSubmit={props.handleSubmit}>
			<input
				type="text"
				placeholder="Add a comment..."
				className="add-comment"
				onChange={handleChange}
				value={props.value}
			/>
		</form>
	);
}

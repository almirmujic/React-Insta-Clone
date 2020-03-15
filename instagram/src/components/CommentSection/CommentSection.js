import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';
import CommentInput from '../CommentInput/CommentInput';
import { v4 as uuidv4 } from 'uuid';

export default function CommentSection(props) {
	const [ comments, setComments ] = useState([]);
	const [ value, setValue ] = useState('');

	useEffect(() => {
		setComments(props.comments);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const comment = {
			id: uuidv4(),
			username: 'Current User',
			text: value
		};
		setComments((prevState) => {
			return [ ...prevState, comment ];
		});
		setValue('');
	};

	return (
		<div>
			{comments.map((comment) => (
				<Comment
					username={comment.username}
					text={comment.text}
					key={comment.id}
				/>
			))}
			<CommentInput
				handleSubmit={handleSubmit}
				setValue={setValue}
				value={value}
			/>
		</div>
	);
}

CommentSection.propTypes = {
	comments: PropTypes.array.isRequired
};

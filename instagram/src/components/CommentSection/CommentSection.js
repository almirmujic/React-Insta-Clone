import React from 'react';
import Comment from '../Comment/Comment';

export default function CommentSection(props) {
	return (
		<div>
			{props.comments.map((comment) => (
				<Comment
					username={comment.username}
					text={comment.text}
					key={comment.id}
				/>
			))}
		</div>
	);
}

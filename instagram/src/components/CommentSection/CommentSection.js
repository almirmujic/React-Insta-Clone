import React from 'react';

export default function CommentSection(props) {
	return (
		<div>
			{props.comments.map((comment) => (
				<div>
					<p>
						<span style={{ fontWeight: 'bold' }}>
							{comment.username}
						</span>
						{comment.text}
					</p>
				</div>
			))}
		</div>
	);
}

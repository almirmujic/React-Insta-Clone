import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

import './PostContainer.css';

export default function PostContainer(props) {
	return (
		<div>
			<header>
				<img
					className="thumbnail"
					alt={props.post.username}
					src={props.post.thumbnailUrl}
				/>
				<span>{props.post.username}</span>
			</header>

			<CommentSection comments={props.post.comments} />
			<input type="text" placeholder="Make a comment..." />
		</div>
	);
}

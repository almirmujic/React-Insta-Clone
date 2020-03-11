import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

import './PostContainer.css';

export default function PostContainer(props) {
	return (
		<div className="post-container">
			<header className="post-header">
				<img
					className="thumbnail"
					alt={props.post.username}
					src={props.post.thumbnailUrl}
				/>
				<span>{props.post.username}</span>
			</header>
			<img
				className="post-image"
				src={props.post.imageUrl}
				alt={props.post.username}
			/>
			<div className="post__details">
				<div className="post__content">
					<div className="like-comment">
						<img
							className="lc-icon"
							src="https://i.ya-webdesign.com/images/heart-symbol-png-19.png"
							alt="like"
						/>
						<img
							className="lc-icon2"
							src="https://cdn0.iconfinder.com/data/icons/instagram-ui-1/24/Instagram-UI_comment-512.png"
							alt="comment"
						/>
					</div>
					<span style={{ fontWeight: '600' }}>
						{props.post.likes} likes
					</span>
					<CommentSection comments={props.post.comments} />
				</div>

				<input
					className="add-comment"
					type="text"
					placeholder="Add a comment..."
				/>
			</div>
		</div>
	);
}

PostContainer.propTypes = {
	post: PropTypes.object.isRequired
};

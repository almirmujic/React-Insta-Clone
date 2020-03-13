import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

import Heart from '../../assets/Heart';

import './PostContainer.css';

export default function PostContainer(props) {
	const [ likes, setLikes ] = useState(props.post.likes);
	const [ liked, setLiked ] = useState(false);

	useEffect(
		() => {
			setLikes(
				(prevState) => (liked ? prevState + 1 : prevState - 1)
			);
		},
		[ liked ]
	);

	const toggleLike = () => {
		setLiked((prevState) => !prevState);
	};
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
						<Heart
							customClass="lc-icon"
							alt="heart"
							color={liked ? 'red' : '#333'}
							toggleLike={toggleLike}
						/>
					</div>
					<span style={{ fontWeight: '600' }}>
						{likes} likes
					</span>
					<CommentSection comments={props.post.comments} />
				</div>
			</div>
		</div>
	);
}

PostContainer.propTypes = {
	post: PropTypes.object.isRequired
};

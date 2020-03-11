import React from 'react';
import PropTypes from 'prop-types';

export default function Comment(props) {
	return (
		<div>
			<p>
				<span style={{ fontWeight: 'bold' }}>
					{props.username}
				</span>{' '}
				{props.text}
			</p>
		</div>
	);
}

Comment.propTypes = {
	username: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
};

Comment.defaultProps = {
	username: 'Default',
	text: 'Comment not provided.'
};

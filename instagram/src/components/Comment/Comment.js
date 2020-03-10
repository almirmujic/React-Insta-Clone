import React from 'react';

export default function Comment(props) {
	return (
		<div>
			<p>
				<span style={{ fontWeight: 'bold' }}>
					{props.username}
				</span>
				{props.text}
			</p>
		</div>
	);
}

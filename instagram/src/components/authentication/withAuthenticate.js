import React from 'react';

function withAuthenticate(WrappedComponent) {
	return class extends React.Component {
		render() {
			return <WrappedComponent />;
		}
	};
}

export default withAuthenticate;

import React from 'react';

import PostsPage from './components/PostsPage/PostsPage';

import withAuthenticate from './components/authentication/withAuthenticate';

import './App.css';

export default function App() {
	const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

	return <ComponentFromWithAuthenticate />;
}

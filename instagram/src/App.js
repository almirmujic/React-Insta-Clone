import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

import dummyData from './dummy-data';

export default function App() {
	return (
		<div>
			<SearchBar />
			{dummyData.map((post) => <PostContainer />)}
		</div>
	);
}

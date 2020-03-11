import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

import dummyData from './dummy-data';

import './App.css';

export default function App() {
	return (
		<div style={{ maxWidth: '1000px', margin: '0 auto' }}>
			<SearchBar />
			<div className="post-layout">
				{dummyData.map((post) => (
					<PostContainer key={post.id} post={post} />
				))}
			</div>
		</div>
	);
}

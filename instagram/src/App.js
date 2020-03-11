import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

import dummyData from './dummy-data';

import './App.css';

export default function App() {
	const [ data, setData ] = useState([]);

	useEffect(() => {
		setData(dummyData);
	}, []);

	return (
		<div style={{ maxWidth: '1000px', margin: '0 auto' }}>
			<SearchBar />
			<div className="post-layout">
				{data.map((post) => (
					<PostContainer key={post.id} post={post} />
				))}
			</div>
		</div>
	);
}

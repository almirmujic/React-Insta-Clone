import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';

import dummyData from '../../dummy-data';

import '../../App.css';

export default function PostPage() {
	const [ data, setData ] = useState([]);
	const [ filterData, setFilterData ] = useState([]);

	useEffect(() => {
		setData(dummyData);
	}, []);

	const handleFilter = (e) => {
		const posts = data.filter((post) => {
			if (post.username.includes(e.target.value)) {
				return post;
			}
			return null;
		});
		setFilterData(posts);
	};

	const filteredPosts =
		filterData.length > 0
			? filterData.map((post) => (
					<PostContainer key={post.id} post={post} />
				))
			: data.map((post) => (
					<PostContainer key={post.id} post={post} />
				));

	return (
		<div style={{ maxWidth: '1000px', margin: '0 auto' }}>
			<SearchBar handleFilter={handleFilter} />
			<div className="post-layout">{filteredPosts}</div>
		</div>
	);
}

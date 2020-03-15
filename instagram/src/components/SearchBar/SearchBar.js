import React from 'react';

import './SearchBar.css';

export default function SearchBar(props) {
	return (
		<div className="search__container">
			<div className="search__content">
				<div className="instagram__icon-container">
					<img
						className="instagram__icon"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Instagram_simple_icon.svg/1024px-Instagram_simple_icon.svg.png"
						alt="instagram"
					/>
				</div>
				<div className="search__items-container">
					<img
						className="instagram__logo"
						src="https://instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png%202x"
						alt="instagram"
					/>
					<input
						className="search__input"
						type="text"
						placeholder="Search"
						onChange={props.handleFilter}
					/>
					<div className="social__icons">
						<img
							className="icon"
							src="https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-12-512.png"
							alt=""
						/>
						<img
							className="icon"
							src="https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-12-512.png"
							alt=""
						/>
						<img
							className="icon"
							src="https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-12-512.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

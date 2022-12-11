import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import WorkIcon from '@mui/icons-material/Work';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import GridViewIcon from '@mui/icons-material/GridView';

import Logo from '../assets/images/logo.png';

import '../assets/styles/navbar.css';

const Navbar = () => {
	const [navigationBar, setNavigationBar] = useState(false);
	window.addEventListener('scroll', function () {
		const navbar = document.querySelectors('.navbar');
		navbar.classList.toggle('active', window.screenY > 200);
	});
	return (
		<nav className="navbar">
			<div className="container d-flex justify-content-center align-items-center">
				<img src={Logo} alt="logo" />
				<ul
					className={navigationBar ? 'nav-links-navigation-bar' : 'nav-links'}
					onClick={() => setNavigationBar(false)}
				>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/pages">Pages</Link>
					</li>
					<li>
						<Link to="/blog">Blog</Link>
					</li>
					<li>
						<Link to="/portfolio">Portfolio</Link>
					</li>
					<li>
						<Link to="/shop">Shop</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li className="icons">
						<SearchIcon className="icon" />
						<WorkIcon className="icon" />
						<GridViewIcon className="icon" />
					</li>
				</ul>
				<button
					className="toggle"
					onClick={() => setNavigationBar(!navigationBar)}
				>
					{navigationBar ? <CloseIcon /> : <MenuIcon />}
				</button>
			</div>
		</nav>
	);
};

export default Navbar;

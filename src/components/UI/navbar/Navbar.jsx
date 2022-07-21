import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<div>
			<nav className="navbar">
				<Link to="/about">О сайте</Link>
				<Link to="/posts">Посты</Link>
			</nav>
		</div>
	)
}

export default Navbar
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function DesktopNav() {
	return (
		<nav className="menu-block" id="append-menu-header">
			<ul className="site-menu-main">
				<li className="nav-item nav-item-has-children ">
					<Link to="/" className="nav-link-item drop-trigger">Home</Link>
				</li>
				<li className="nav-item nav-item-has-children">
					<Link to="/about" className="nav-link-item drop-trigger">About</Link>
				</li>
				<li className="nav-item nav-item-has-children">
					<Link to="/service" className="nav-link-item drop-trigger">Service</Link>
				</li>
				<li className="nav-item nav-item-has-children">
					<Link to="/blog" className="nav-link-item drop-trigger">Blog</Link>
				</li>
				<li className="nav-item nav-item-has-children">
					<Link to="/contact" className="nav-link-item drop-trigger">Contact</Link>
				</li>
			</ul>
		</nav>
	);
}

export default DesktopNav;

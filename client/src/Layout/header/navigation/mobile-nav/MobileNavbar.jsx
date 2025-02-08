/* eslint-disable react/prop-types */
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavLogo from './../../navLogo';
import UserStore from "../../../../store/UserStore";

const MobileNavbar = () => {
	const {isLogin, UserLogoutRequest} = UserStore();
	const navigate = useNavigate();
	const onLogout = async ()=>{
		let res = await UserLogoutRequest()
		sessionStorage.clear();
		localStorage.clear();
		navigate('/')
	}
	const [showMenu, setShowMenu] = useState(false);

	function handleOpenMobileMenu() {
		setShowMenu((prev) => !prev);
	}

	const animationVariants = {
		initial: {
			x: "-100%",
		},
		animate: () => {
			if (showMenu) {
				return {
					x: 0,
				};
			}
		},
	};
	const overlayAnimationVariants = {
		initial: {
			opacity: 0,
			visibility: "hidden",
		},
		animate: () => {
			if (showMenu) {
				return {
					opacity: 1,
					visibility: "visible",
				};
			}
		},
	};

	return (
		<div className="mobile-nav-wrap">
			<div className="mobile-menu-trigger" onClick={handleOpenMobileMenu}>
				<span></span>
			</div>
			{showMenu && (
				<motion.nav className="mobile-navbar" variants={animationVariants} initial="initial" animate="animate">
					<div className="mobile-menu-head">
						<div className="mobile-menu-head--title my-1"><NavLogo/></div>
						<div className="mobile-menu-head--close" onClick={() => setShowMenu(false)}>
							&times;
						</div>
					</div>

					<ul>
						<li className="nav-item nav-item-has-children">
							{
								isLogin()?
									<Link className="nav-item nav-item-has-children bg-dark mr-2 " to="/dashboard">
										<span className="text-white">Dashboard →</span>
									</Link>
								: ""
							}
						</li>
						<li className="nav-item nav-item-has-children">
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
							<Link to="/contact" className="nav-link-item drop-trigger">Contact Us</Link>
						</li>
						<li className="nav-item nav-item-has-children">
							{
								isLogin()?
									<button onClick={onLogout} className="nav-link-item drop-trigger sofax-default-btn pill bg-info pe">
										<span>Logout</span>
									</button>
								:
									<Link className="nav-link-item drop-trigger bg-dark" type="button" to="/login">
										<span className="text-white">Login</span>
									</Link>
							}
						</li>
					</ul>
				</motion.nav>
			)}

			<motion.div
				initial="initial"
				animate="animate"
				variants={overlayAnimationVariants}
				className="mobile-nav--overlay"
				onClick={handleOpenMobileMenu}
			></motion.div>
		</div>
	);
};

export default MobileNavbar;

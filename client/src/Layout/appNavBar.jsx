import NavLogo from "./header/navLogo";
import DesktopNav from "./header/navigation/desktop-nav/DesktopNav";
import { Link, useNavigate } from "react-router-dom";
import MobileNavbar from './header/navigation/mobile-nav/MobileNavbar';
import UserStore from "../store/UserStore";

function AppNavBar() {
	const {isLogin, UserLogoutRequest} = UserStore();
	const navigate = useNavigate();
	const onLogout = async ()=>{
		let res = await UserLogoutRequest()
		sessionStorage.clear();
		localStorage.clear();
		navigate('/')
	}
	return (
		<header className="site-header sofax-header-section site-header--menu-center bg-white" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<NavLogo />
					<div className="menu-block-wrapper">
						<DesktopNav />
					</div>
					<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
					{
						isLogin()?
							<>
								<Link className=" dashboard-btn sofax-default-btn pill sofax-header-btn bg-dark mr-2 " to="/dashboard">
									<span className="text-white">Dashboard</span>
								</Link>
								<button onClick={onLogout} className="sofax-default-btn pill sofax-header-btn" data-text="Logout">
									<span className="button-wraper">Logout</span>
								</button>
							</>	
						:
							<Link className="sofax-default-btn pill sofax-header-btn" data-text="Login" to="/login">
								<span className="button-wraper">Login</span>
							</Link>
					}
						

					</div>
					<MobileNavbar  />
				</nav>
			</div>
		</header>
	);
}

export default AppNavBar;

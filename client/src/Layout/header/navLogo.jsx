import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo/logo-dark.png";
function NavLogo() {
	return (
		<div className="brand-logo">
			<Link to="/">
				<img src={Logo} alt="Logo" className="light-version-logo" />
			</Link>
		</div>
	);
}

export default NavLogo;

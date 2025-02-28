
import { Link, useNavigate } from "react-router-dom";
import UserStore from "../../store/UserStore";
import ValidationHelper from './../../utility/ValidationHelper';
import toast from "react-hot-toast";
const LoginForm = ()=> {
	const {LoginFormValue,LoginFormOnChange,LoginRequest} = UserStore()
	let Email = LoginFormValue.email;
	let Password = LoginFormValue.password;
	let navigate = useNavigate();

	const onFormSubmit = async ()=>{
		if(ValidationHelper.IsEmpty(Password)){
			toast.error("Valid Password Required")
		}
		if(!ValidationHelper.IsEmail(Email)){
			toast.error("Valid Email Address Required")
		}
		else{
			let res = await LoginRequest(LoginFormValue);
			res?navigate('/') : toast.error("Something went wrong")
		}
	}

	return (
		<section className="sofax-section-padding2">
			<div className="container">
				<div className="row text-center pt-5 pt-md-0 justify-content-center">
					<h2>Welcome Admin</h2>
					<div className="col-lg-5 sofax-field-box">
						{/* <form > */}
							<div className="sofax-main-field">
									<input onChange={(e)=>{LoginFormOnChange('email',e.target.value)}} type="email" name="email" id="email"	placeholder="Admin Email"/>
							</div>
							<div className="sofax-main-field sofax-subscription-field-inner">
									<input onChange={(e)=>{LoginFormOnChange('password',e.target.value)}} type="password" name="password" id="password" placeholder="Enter password" className="form-control"/>
							</div>
							{/*<div className="sofax-form-box forgot-password">*/}
							{/*	<Link to="#">test@nomail.com & 1234</Link>*/}
							{/*</div>*/}
							<button onClick={onFormSubmit} className="sofax-subcribe-btn2" type="submit">Login</button>
						{/* </form> */}
					</div>
				</div>
			</div>
		</section>
	);
}

export default LoginForm;

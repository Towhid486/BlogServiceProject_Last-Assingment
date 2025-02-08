import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
function ContactForm() {
	const {
		register,
		handleSubmit,
		reset,
	} = useForm();
	const submitForm = () => {
		reset();
		toast.success("Form Submited!");
	};
	return (
		<div className="sofax-field-box ml-50">
			<h3>Send us a message</h3>
			<form onSubmit={handleSubmit(submitForm)}>
				<div className="row">
					<div className="col-lg-6">
						<div className="sofax-main-field">
							<label>Your Name</label>
								<input
									{...register("name", { required: "Name is required." })}
									type="name"
									name="name"
									id="name"
								/>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="sofax-main-field">
							<label>Enter email address</label>
								<input
									{...register("email", { required: "Email is required." })}
									type="email"
									name="email"
									id="email"
								/>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="sofax-main-field">
							<label>Your Comment</label>
							<textarea name="textarea" placeholder="Write Your Comment"></textarea>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="sofax-form-box">
							<input type="checkbox" id="css" />
							<label htmlFor="css">
								Save my name, email, & website in this browser for the next time I comment.
							</label>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="tac">
							<button id="sofax-submit-btn" className="mt-30" type="submit">
								Send Message
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ContactForm;

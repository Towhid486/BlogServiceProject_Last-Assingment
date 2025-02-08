import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
function Subscription() {
	const {
		register,
		handleSubmit,
		reset,
	} = useForm();
	const submitForm = () => {
		reset();
		toast.success("Your Email Submited!");
	};
	return (
		<div className="sofax-subscription-field5">
			<form onSubmit={handleSubmit(submitForm)}>
					<input {...register("email", { required: "Email is required." })}
						type="email"
						name="email"
						id="email"
						className="field-item"
						placeholder="Enter Your Email"
					/>
				<button type="submit" className="sofax-subcribe-btn2">
					Subscribe now
				</button>
			</form>
		</div>
	);
}

export default Subscription;

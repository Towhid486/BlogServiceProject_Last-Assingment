import { Link } from 'react-router-dom';
import Image1 from '../../../assets/images/v8/image1v8.png'
import Shape1 from "../../../assets/images/v8/shape1v8.png";
import Shape2 from "../../../assets/images/v8/shape2v8.png";

import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";
import FadeInUp from '../../animation/FadeInUp';

function Hero() {
	return (
		<div className=" section sofax-section-padding4" id="hero">
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className="sofax-hero-content hero-v8">
							<h1 className="slider-custom-anim-left" data-ani="slider-custom-anim-left" data-ani-delay="0.3s">
								Empower your business journey with IT expertise
							</h1>
							<p>
								IT expertise is crucial for the growth and sustainability of any business. Here’s how integrating robust
								IT solutions can empower your business journey:
							</p>

							<FadeInStaggerTwo className="sofax-hero-btn-wrap sofax-hero5-btn extra-mt">
								<FadeInStaggerTwoChildren>
									<Link className="sofax-default-btn pill" data-text="Explore More" to="/about">
										<span className="button-wraper">Explore More</span>
									</Link>
								</FadeInStaggerTwoChildren>
								<FadeInStaggerTwoChildren>
									<Link className="sofax-default-btn pill dark-btn" data-text="Contact Us" to="/contact">
										<span className="button-wraper">Contact Us</span>
									</Link>
								</FadeInStaggerTwoChildren>
							</FadeInStaggerTwo>
						</div>
					</div>
					<div className="col-lg-5">
						<FadeInUp className="sofax-hero-thumb8 position-ralatiove">
							<img src={Image1} alt="Thumb" />
							<div className="sofax-hero-shape-v8">
								<img src={Shape1} alt="Shape" />
							</div>
							<div className="sofax-hero-shape2-v8">
								<img src={Shape2} alt="Shape" />
							</div>
						</FadeInUp>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;

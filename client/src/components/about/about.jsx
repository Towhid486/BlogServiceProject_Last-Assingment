import Icon1 from "../../assets/images/v8/icon1v8.png";
import Icon2 from "../../assets/images/v8/icon2v8.png";
import Thumb from "../../assets/images/about/aboutthumb.png";
import Shape from "../../assets/images/about/shape2.png"
const AboutOne = () => {

	return (
		<div className="aboutversoin8 sofax-section-padding2 bg-light">
			<div className="container pt-5">
				<div className="row">
					<div className="col-lg-6">
						<div className="sofax-about-thumbv8 wow fadeInLeft">
							<img src={Thumb} alt="thumb" />
						</div>
						<div className="sofax-about-shapev5">
							<img src={Shape} alt="Shape" />
						</div>
					</div>
					<div className="col-lg-6">
						<div className="sofax-default-content about-vr8 tac">
							<div className="tg-heading-subheading animation-style3">
								<h4 className="text-heading">Trusted Excellence</h4>
								<h2>We are loyal to innovative brands</h2>
							</div>
							<p>We are a one-stop digital agency, taking care of everything from custom web design
							 to meticulous planning with strategies that increase your reach, drive traffic and 
							 engagement.With years of experience in the industry, we have built a reputation for 
							 excellence and have become the go-to choice for customers who seek the best.
							</p>
							
						</div>
						<div className="sofax-about-content-wrap">
							<div className="sofax-iconbox-wrap2">
								<div className="sofax-iconbox-icon2">
									<img src={Icon1} alt="icon" />
								</div>
								<div className="sofax-iconbox-data2 aboutv8">
									<h4>Best Services</h4>
									<p>Thorough problemsolving to prevent recurrence.</p>
								</div>
							</div>
							<div className="sofax-iconbox-wrap2">
								<div className="sofax-iconbox-icon2">
									<img src={Icon2} alt="icon" />
								</div>
								<div className="sofax-iconbox-data2 aboutv8">
									<h4>24/7 Call Support</h4>
									<p>Our teams available to 24 hours and 7 days a week.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
}

export default AboutOne;

import ServiceStore from "../../store/ServiceStore";
import FadeInStagger from "../animation/FadeInStagger";

const Services = () => {
	const {ServiceList} = ServiceStore();
	return (
		<section className="sofax-section-padding">
			<div className="container">
				<div className="row">
					<div className="sofax-section-title center">
						<h2>We provide all effective services</h2>
					</div>
					

					{
						ServiceList===null? (<h3>Content Loading...</h3>)
						: (
							ServiceList.map((item,index)=>(
								<FadeInStagger key={index} index={index} className="col-lg-6">
									<div className="sofax-service-iconbox-wrap">
										<div className="sofax-service-iconbox-data">
											<h4>{item?.title}</h4>
											<p>{item?.des}</p>
										</div>
										<div className="sofax-service-iconbox-icon">
											<img src={item?.img} alt="icon" />
										</div>
									</div>
								</FadeInStagger>
							))
						)

					}

				</div>
			</div>
		</section>
	);
}

export default Services;

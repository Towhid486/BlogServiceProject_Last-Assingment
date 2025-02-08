import FadeInStagger from './../animation/FadeInStagger';
import FadeInUp from './../animation/FadeInUp';
import TeamStore from './../../store/TeamStore';

const TeamMembers = () => {
	const {MemberList} = TeamStore();
	return (
		<section className="section sofax-section-padding5">
			<div className="container">
				<div className="sofax-section-title">
					<div className="row">
						<div className="col-xl-7 col-lg-8">
							<h2>Meet the team work behind our succees</h2>
						</div>
						<div className="col-xl-5 col-lg-4 d-flex justify-content-end align-items-center">
							<div className="sofax-aboutus-content-text our-teaminner">
								<p>
									Our team consists of a group of talents. We solve customer problems with sincerity.
									All of our team members are very intelligent and skilled.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					{
						MemberList===null? (<h3>Content Loading...</h3>)
						: (
							MemberList.map((item,index)=>(
								<FadeInStagger  key={index}  index={index} className="col-lg-3 col-md-6">
									<div className={`sofax-team-member-wrap ${item.className} `}>
										<FadeInUp className="sofax-team-member-img">
											<img src={item?.img} alt="team member" />
										</FadeInUp>
										<div className="sofax-team-member-content">
											<h4>{item?.name}</h4>
											<p>{item?.sector}</p>
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

export default TeamMembers;

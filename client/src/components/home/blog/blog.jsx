import Arrow from "../../../assets/images/blog/right-arrow.png";
import Shape12 from "../../../assets/images/blog/shape1.png";
import FadeInStagger from '../../animation/FadeInStagger';
import { Link } from 'react-router-dom';
import BlogStore from './../../../store/BlogStore';
import { TimestampToDate } from "../../../utility/utility";

function Blog() {
	const {BlogList} = BlogStore();
	const SixBlogList = BlogList?.slice(0,6)
	return (
		<section className="section sofax-section-padding bg-light position-ralatiove" id="blog">
			<div className="container">
				<div className="sofax-section-title center max-width-large2 ">
					<div className="tg-heading-subheading animation-style3">
						<h2>The latest news & tips for optimal marketing</h2>
					</div>
					<div className="sofax-blog-shapev4">
						<img src={Shape12} alt="Shape" />
					</div>
				</div>
				<div className="row">


				{
					BlogList===null? (<h3>Content Loading...</h3>)
					: (
						SixBlogList.map((item,index)=>(
							<FadeInStagger  key={index} index={index} className="col-lg-4">
								{/* <BlogCard blog={blog} /> */}
								<div className="sofax-blog-wrap-v4">
									<div className="sofax-blog-img">
										<Link to={`/blog-details/${item['_id']}`}>
											<img src={item?.img} alt="blog thumb" />
										</Link>
									</div>
									<Link to={`/blog-details/${item['_id']}`}>
										<div className="sofax-blog-content">
											<div className="sofax-blog-meta">
												<div className="blog-btn">{TimestampToDate(item?.createdAt)}</div>
											</div>
											<h4>{item?.title}</h4>
											<Link to={`/blog-details/${item['_id']}`}>
												<div className="sofax-icon-btn  sofax-blog-icon-btn">
													Read More <img src={Arrow} alt="arrow" />
												</div>
											</Link>
											
										</div>
									</Link>
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

export default Blog;

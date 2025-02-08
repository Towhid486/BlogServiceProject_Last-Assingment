import HTMLReactParser from "html-react-parser/lib/index";
import BlogStore from "../../../store/BlogStore";
import FadeInUp from "../../animation/FadeInUp";
import RecentPosts from "./RecentPosts";

function BlogDetails() {
	const {BlogDetail} = BlogStore();
	return (
		<section className="sofax-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="sofax-inner-blog-details-wrap">
							
							{
								BlogDetail===null? (<h3>Content Loading...</h3>)
								: (
										<div className="">
											<FadeInUp className="sofax-inner-blog-details-img ">
												<img src={BlogDetail.img} />
											</FadeInUp>
											{HTMLReactParser(BlogDetail.des)}
										</div>
								)

							}
							
						</div>
					</div>

					<div className="col-lg-4">
						<div className="right-sidebar">
							{/* <Search /> */}
							{/* <Categories /> */}
							<RecentPosts />
							{/* <Tags />
							<NewsLetter /> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default BlogDetails;

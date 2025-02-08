
import BlogStore from "../../../store/BlogStore";
import {TimestampToDate} from "../../../utility/utility";
import { Link } from 'react-router-dom';

function RecentPosts() {
	const {BlogList} = BlogStore();
	return (
		<div className="sofax-subscription-field-post">
			<h4>Recent Posts:</h4>
			{
				BlogList===null? (<h3>Content Loading...</h3>) : 
				(
					BlogList.map((item,index)=>(
						<Link to={`/blog-details/${item['_id']}`}>
							<div className="title-post-thumb">
								<div className="title-post-img">
									<img src={item?.img} alt="blog post image" />
								</div>
								<div className="title-post-content">
									<ul>
										<li>{TimestampToDate(item?.createdAt)}</li>
									</ul>
									<h6>{item?.title}</h6>
								</div>
							</div>
						</Link>
					))
				)
			}
		</div>
	);
}

export default RecentPosts;

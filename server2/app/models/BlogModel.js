import mongoose from "mongoose";
const BlogSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        img: {type: String, required: true},
        des: {type: String, required: true},
        user_id: {type:mongoose.Schema.Types.ObjectId, required: true},
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const Blog = mongoose.model('blogs', BlogSchema);
export default Blog;
import mongoose from "mongoose";
const ServiceSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        des: {type: String, required: true},
        img: {type: String, required: true},
        user_id: {type:mongoose.Schema.Types.ObjectId, required: true},
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const Service = mongoose.model('services', ServiceSchema);
export default Service;
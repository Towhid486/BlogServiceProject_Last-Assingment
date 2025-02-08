import mongoose from "mongoose";
const TeamSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        sector: {type: String, required: true},
        img: {type: String, required: true},
        className: {type: String},
        user_id: {type:mongoose.Schema.Types.ObjectId, required: true},
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const Team = mongoose.model('members', TeamSchema);
export default Team;
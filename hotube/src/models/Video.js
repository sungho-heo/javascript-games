import mongoose from "mongoose";


const videoSchema = new mongoose.Schema({
    title: String,
    description: String,
    createdBy: String,
    createdAt: Date,
    hashTag: [{ type: String }],
    meta: { 
        rating: Number,
        views: Number,
    }
    
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
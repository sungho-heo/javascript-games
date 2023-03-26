import mongoose from "mongoose";


const videoSchema = new mongoose.Schema({
    title: { type:String, required: true, maxlength: 30},
    description: { type:String, required: true, minlength:30},
    createdBy: { type:String, required: true},
    createdAt: {type: Date, required: true, default: Date.now},
    hashtags: [{ type: String, trim: true}],
    meta: { 
        rating: {type:Number,required: true,default:0},
        views: {type:Number, required: true,default:0},
    }
});

videoSchema.pre("save", async function () {
    this.hashtags = this.hashtags[0].split(",").map((word) => (word.startsWith("#") ? word : `#${word}`));
    console.log(this);
})

const Video = mongoose.model("Video", videoSchema);

export default Video;
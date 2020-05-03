const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name:String,
    date:Date,
    tags:String,
    type: String //education, tech, career, fun, other 
})

const Event = mongoose.model("Event",articleSchema)
module.exports = Event;
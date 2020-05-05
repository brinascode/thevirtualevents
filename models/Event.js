const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name:String,
    date:Date,
    tags:Array,
    type: String, //education, tech, career, fun, other 
    link:String
})

const Event = mongoose.model("Event",eventSchema)
module.exports = Event;
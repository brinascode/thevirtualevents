const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:String,
    password:String,
    email:String,
    stripeUserId:String
})

userSchema.methods.generateHash = function(password){
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt); //Salt is applied before hash is created
    return hash;
   }
   
   
   userSchema.methods.checkPassword = function(password) {
       return bcrypt.compareSync(password, this.password);
   };


const User= mongoose.model("User",userSchema)
module.exports = User;
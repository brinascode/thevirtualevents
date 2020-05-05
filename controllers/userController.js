var db = require("../models")

//Controller methods
module.exports = {
    create:function(req,res){
        db.User 
            .create(req.body)
            .then((newUser)=>{
                var hashedPassword = newUser.generateHash(req.body.password)
                newUser.password = hashedPassword
                newUser.save(function(err,savedUser){
                    if (err) throw err;
                    res.json(savedUser)
                })
                
            })
            .catch((err)=>{if (err) throw err})
    },
    findAll:function(req,res){
        db.User
            .find(req.query)
            .then((allUsers) => res.json(allUsers))
            .catch((err)=>{if (err) throw err})
    },
    findById:function(req,res){
            db.User
                .findById({_id:req.params.id})
                .then((User)=>{
                    res.json(User)})
                .catch((err)=>{if(err) throw err;})
    },
    update:function(req,res){
        db.User
            .findOneAndUpdate({_id:req.params.id},req.body)
            .then((User)=>{res.json(User)})  //returns the OLD object not the updated one!
            .catch((err)=>{res.status(422).json(err)})
    },
    delete:function(req,res){
        db.User.findById({_id:req.params.id})
        .then((User)=>{User.remove()})
        .then(()=>{res.json({Message:"Successfully removed"})})
        .catch(err => res.status(422).json(err))
    }
}
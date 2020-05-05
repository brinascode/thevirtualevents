var db = require("../models")

//Controller methods
module.exports = {
    create:function(req,res){
        db.Event 
            .create(req.body)
            .then((newEvent)=>{res.json(newEvent)})
            .catch((err)=>{if (err) throw err})
    },
    findAll:function(req,res){
        db.Event
            .find(req.query)
            .then((allEvents) => res.json(allEvents))
            .catch((err)=>{if (err) throw err})
    },
    findById:function(req,res){
            db.Event
                .findById({_id:req.params.id})
                .then((Event)=>{
                    res.json(Event)})
                .catch((err)=>{if(err) throw err;})
    },
    findByCriteria:function(req,res){
        db.Event
            .find(req.body)
            .then((Event)=>{
                res.json(Event)})
            .catch((err)=>{if(err) throw err;})
    },
    update:function(req,res){
        db.Event
            .findOneAndUpdate({_id:req.params.id},req.body)
            .then((Event)=>{res.json(Event)})  //returns the OLD object not the updated one!
            .catch((err)=>{res.status(422).json(err)})
    },
    delete:function(req,res){
        db.Event.findById({_id:req.params.id})
        .then((Event)=>{Event.remove()})
        .then(()=>{res.json({Message:"Successfully removed"})})
        .catch(err => res.status(422).json(err))
    }
}

const Food = require("../models/Food.models")

module.exports = {

    findAll: (req, res) => {
        Food.find()
            .then(allFoods => res.json(allFoods))
            .catch(err => res.status(400).json({ message: "error", error: err }))
    },

    findOne: (req, res) => {
        console.log("find one executed");
        Food.findById(req.params.id)
            .then(Food => res.json(Food))
            .catch(err => res.status(400).json({ message: "error", error: err }))
    },

    create: (req, res) => {
        // const {title, content, isImportant} = req.body
        Food.create(req.body)
            .then(newFood => res.json(newFood))
            .catch(err => res.status(400).json({ message: "error", error: err }))
    },

    update: (req, res) => {
        Food.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedFood => res.json(updatedFood))
            .catch(err => res.status(400).json({ message: "error", error: err }))
    },

    delete: (req, res) => {
        Food.findByIdAndDelete(req.params.id)
            .then( result => res.json({result: result}))
            .catch( err => res.status(400).json({err: err}))
    }
}
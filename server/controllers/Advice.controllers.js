
const Advice = require("../models/Advice.models")

module.exports = {

    findAll: (req, res) => {
        Advice.find()
            .then(allAdvices => res.json(allAdvices))
            .catch(err => res.status(400).json({ message: "error", error: err }))
    },

    findOne: (req, res) => {
        console.log("find one executed");
        Advice.findById(req.params.id)
            .then(Advice => res.json(Advice))
            .catch(err => res.status(400).json({ message: "error", error: err }))
    },

    create: (req, res) => {
        // const {title, content, isImportant} = req.body
        Advice.create(req.body)
            .then(newAdvice => res.json(newAdvice))
            .catch(err => res.status(400).json({ message: "error", error: err }))
    },

    update: (req, res) => {
        Advice.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedAdvice => res.json(updatedAdvice))
            .catch(err => res.status(400).json({ message: "error", error: err }))
    },

    delete: (req, res) => {
        Advice.findByIdAndDelete(req.params.id)
            .then( result => res.json({result: result}))
            .catch( err => res.status(400).json({err: err}))
    }
}
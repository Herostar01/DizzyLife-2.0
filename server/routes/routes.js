const Food = require("../controllers/Food.controllers");

const Advice = require("../controllers/Advice.controllers")

const PersonController = require('../controllers/Comment.controllers');

module.exports = (app) => {
    app.get("/api/foods", Food.findAll);
    app.get("/api/foods/:id", Food.findOne);
    app.post("/api/foods", Food.create);
    app.put("/api/foods/:id", Food.update);
    app.delete("/api/foods/:id", Food.delete)
}

module.exports = (app) => {
    app.get("/api/advices", Advice.findAll);
    app.get("/api/advices/:id", Advice.findOne);
    app.post("/api/advices", Advice.create);
    app.put("/api/advices/:id", Advice.update);
    app.delete("/api/advices/:id", Advice.delete)
}

module.exports = (app) => {
    app.get('/api', PersonController.index);
    app.post('/api/people', PersonController.createPerson);
    app.get('/api/people', PersonController.getAllPeople);
    app.get('/api/people/:id', PersonController.getPerson);
    app.put('/api/people/:id', PersonController.updatePerson);
    app.delete('/api/people/:id', PersonController.deletePerson);


}
const express = require('express');
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')

routes = express.Router();

routes.get('/ongs',OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/incidents',IncidentController.index)
routes.post('/incidents',IncidentController.create)
routes.delete('/incidents/:id',IncidentController.delete)

routes.get('/profiles',ProfileController.index)


module.exports = routes;


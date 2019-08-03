// NOTE: 
// this file contains central route mapping for all the different routes like teams, users etc 

const {Router} = require('express')

const {teamsRoutes} = require('./api/teams')

const getRoutes =  (express) => {

  var router = express.Router()
  return router.use('/', teamsRoutes)
}


module.exports = getRoutes
// NOTE : API layer for teams resource

const {Router} = require('express')
const TeamsController = require('../controller/teams')

const teamsRoutes = new Router()

teamsRoutes.get('/teams', (req, res)=>{
  const data = TeamsController.all()
  res.json(data)
})


teamsRoutes.get('/teams/:teamName', (req, res)=>{
  const data = TeamsController.getTeam(req.params.teamName)
  res.json(data)
})

teamsRoutes.post('/teams', (req, res)=>{
  const data = TeamsController.postTeam(req.body)
  res.json(data)
})


module.exports =  {teamsRoutes}
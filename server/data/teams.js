// NOTE:
// keeping data fetching logic at the model layer 

const footballTeamsList = require('./football')

// converting array to accessible objects
// like [{name:'team1', img:'something'}]
// converts to {'team1': {name:'team1', img:'something'}}

const teamsList = footballTeamsList.reduce((acc, obj)=>{
  acc[obj.name] = obj
  return acc
  
}, {})


exports.default = teamsList

// NOTE: Controller layer for the API 
// it tries tie together API layer and Model/data layer and any business logic can be also be accomodated here

const footballTeamsList = require('../data/teams').default

// fetches the all dataset and returns it
const all = () => {  
  const list = Object.values(footballTeamsList)
  return list
}

// fetchs the data for the requested team name
const getTeam = (teamName) => {
  
    return footballTeamsList[teamName]? footballTeamsList[teamName]: {error:'team does not exits'}
  
}

const postTeam = (data) => {
  const {name} = data
  
  if (footballTeamsList[name]) {
    // update the image
    footballTeamsList[name] = {
      img: data.img
    }
    
  } else {
    // if it does not exists, create one
    footballTeamsList[name] = data
  }
  
  return footballTeamsList
  
}


module.exports = {all, getTeam, postTeam}




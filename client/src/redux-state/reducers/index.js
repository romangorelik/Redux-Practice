const initialState = {
  teamInfo: {
    strDescriptionEN: ''
  },
  teamRSS: [],
  teamFavorites: []
}

function rootReducer(state = initialState, action) {
  if (action.type === 'ADD_TEAM') {
    return Object.assign({}, state, {
      teamInfo: action.payload
    })
  } else if (action.type === 'ADD_RSS') {
    return Object.assign({}, state, {
      teamRSS: action.payload
    })
  } else if (action.type === 'ADD_FAVORITE') {
    return Object.assign({}, state, {
      teamFavorites: state.teamFavorites.concat(action.payload)
    })
  }
  return state
}

export default rootReducer
const initialState = {
  teamInfo: {}
}

function rootReducer(state = initialState, action) {
  if (action.type === 'ADD_TEAM') {
    return Object.assign({}, state, {
      teamInfo: action.payload
    })
  }
  return state
}

export default rootReducer
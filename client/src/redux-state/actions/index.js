export function addTeam(payload) {
  return {type: 'ADD_TEAM', payload}
}

export function addRSSTeam(payload) {
  return {type: 'ADD_RSS', payload}
}

export function addFavorite(payload) {
  return {type: 'ADD_FAVORITE', payload}
}
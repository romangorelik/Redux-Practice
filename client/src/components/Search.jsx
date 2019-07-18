import React from 'react'

import '../../dist/styles/search.css'

import axios from 'axios'

import { connect } from 'react-redux'
import { addTeam } from '../redux-state/actions/index'

function mapDispatchToProps (dispatch) {
  return {
    addTeam: team => dispatch(addTeam(team))
  }
}

class SearchInformation extends React.Component {
  state = {
    teamName: ''
  }

  getTeamInformation = (e) => {
    e.preventDefault()
    let formattedName = this.state.teamName.split(' ').join('_')

    axios.get('/teamInfo', {
      params: {
        team: formattedName
      }
    })
    .then(response => {
      this.props.addTeam(response.data)
      this.setState({
        teamName: ''
      })
    })
    .catch(err => console.error(err))
  }

  getSelectedTeam = (e) => {
    this.setState({
      teamName: e.target.value
    })
  }

  render () {
    return (
      <div className='search-bar-container'>
        <div className='website-name-container'>
          <h1 className='website-name'>WikiTeam</h1>
        </div>

        <div>
          <form onSubmit={this.getTeamInformation}> 
            <input className='search-input' value={this.state.teamName} placeholder='e.g. New York Knicks' onChange={this.getSelectedTeam}/>
            <button className='search-button'><i className="fab fa-searchengin"></i></button>
          </form>
        </div>

        <div className='favorites-container'>
          <h1 className='favorites'>Favorites</h1>
        </div>
      </div>
    )
  }
}

const Search = connect(null, mapDispatchToProps)(SearchInformation)

export default Search
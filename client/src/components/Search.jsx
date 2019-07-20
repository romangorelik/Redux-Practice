import React from 'react'
import Favorites from './Favorites.jsx'

import '../../dist/styles/search.css'

import axios from 'axios'

import { connect } from 'react-redux'
import { addTeam, addRSSTeam } from '../redux-state/actions/index'

function mapDispatchToProps (dispatch) {
  return {
    addTeam: team => dispatch(addTeam(team)),
    addRSSTeam: teamRSS => dispatch(addRSSTeam(teamRSS))
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

      if (response.data.strRSS) {
        this.getNewInfo(response.data.strRSS)
      } else {
        this.props.addRSSTeam([])
      }
      this.setState({
        teamName: ''
      })
    })
    .catch(err => console.error(err))
  }

  getNewInfo = (link) => {
    axios.get('/teamRecentNews', {
      params: {
        teamRSS: link
      }
    })
      .then(response => {
        this.props.addRSSTeam(response.data.rss.channel.item)
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
            <input className='search-input' value={this.state.teamName} placeholder='e.g. Brooklyn Nets' onChange={this.getSelectedTeam}/>
            <button className='search-button'><i className="fab fa-searchengin"></i></button>
          </form>
        </div>

        <div className='favorites-container'>
          <Favorites />
        </div>
      </div>
    )
  }
}

const Search = connect(null, mapDispatchToProps)(SearchInformation)

export default Search
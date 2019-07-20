import React from 'react'
import { connect } from 'react-redux'
import '../../dist/styles/favorites.css'

import { addTeam, addRSSTeam } from '../redux-state/actions/index'

import axios from 'axios'

const mapStateToProps = state => {
  return {
    favorites: state.teamFavorites
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addTeam: team => dispatch(addTeam(team)),
    addRSSTeam: teamRSS => dispatch(addRSSTeam(teamRSS))
  }
}

class FavoritesInfo extends React.Component {
  state = {
    openFavorites: false
  }

  getTeamInformation = (e, name) => {
    let formattedName = name.split(' ').join('_')

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

  changeFavorites = () => {
    this.setState({
      openFavorites: !this.state.openFavorites
    })
  }

  render () {
    return (
      <React.Fragment>
        <h1 className='favorites' onClick={this.changeFavorites}>Favorites</h1>
        {(this.state.openFavorites && this.props.favorites.length > 0) && 
        <div className='favorites-container-holder'>
          <ul>
            {this.props.favorites.map((favorite, index) => {
              return (
                <li key={index} onClick={(e) => this.getTeamInformation(e, favorite)}>{favorite.split('_').join(' ')}</li>
              )
            })}
          </ul>
        </div>
        }
      </React.Fragment>
    )
  }
}

const Favorites = connect(mapStateToProps, mapDispatchToProps)(FavoritesInfo)

export default Favorites
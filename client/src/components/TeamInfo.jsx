import React from 'react'
import { connect } from 'react-redux'
import { addFavorite } from '../redux-state/actions'
import '../../dist/styles/teamInfo.css'

const mapStateToProps = state => {
  return {
    teamShort: state.teamInfo.strTeamShort,
    teamDescr: state.teamInfo.strDescriptionEN,
    teamName: state.teamInfo.strTeam,
    favorites: state.teamFavorites
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addFavorite: favorite => dispatch(addFavorite(favorite))
  }
}

class TeamDescription extends React.Component {
  addToFavorites = () => {
    let formattedName = this.props.teamName.split(' ').join('_')
    if (!this.props.favorites.includes(formattedName)) {
      this.props.addFavorite(formattedName)
    }
  }

  render () {
    return (
      <React.Fragment>
        {this.props.teamDescr.length > 0 && 
        <div className='team-description-container'> 
          <div className='team-description-box'>
            <div className='team-short'>{this.props.teamShort}</div>
            <p>{this.props.teamDescr}</p>
            <div className='favorite-button' onClick={this.addToFavorites}>add</div>
          </div>
        </div>}
      </React.Fragment>
    )
  }
}

const TeamInfo = connect(mapStateToProps, mapDispatchToProps)(TeamDescription)

export default TeamInfo
import React from 'react'
import { connect } from 'react-redux'
import '../../dist/styles/teamInfo.css'

const mapStateToProps = state => {
  return {
    teamShort: state.teamInfo.strTeamShort,
    teamDescr: state.teamInfo.strDescriptionEN
  }
}

const TeamDescription = ({ teamShort, teamDescr }) => (
  <React.Fragment>
    {teamDescr.length > 0 && 
    <div className='team-description-container'> 
      <div className='team-description-box'>
        <div className='team-short'>{teamShort}</div>
        <p>{teamDescr}</p>
      </div>
    </div>}
  </React.Fragment>
)

const TeamInfo = connect(mapStateToProps)(TeamDescription)

export default TeamInfo
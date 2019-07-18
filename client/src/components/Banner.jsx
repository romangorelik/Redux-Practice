import React from 'react'

import '../../dist/styles/banner.css'

import { connect } from 'react-redux'

const mapStateToProps = state => {
  return { 
    teamName: state.teamInfo.strTeam,
    teamBadge: state.teamInfo.strTeamBadge
   }
}

const BannerInfo = ({ teamName, teamBadge }) => (
  <div className='banner-container'>
    <img className='banner-badge' src={teamBadge}/>
    <h1 className='banner-name'>{teamName}</h1>
  </div>
)

const Banner = connect(mapStateToProps)(BannerInfo)

export default Banner
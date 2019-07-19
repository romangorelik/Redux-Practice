import React from 'react'
import { connect } from 'react-redux'
import '../../dist/styles/topImage.css'

const mapStateToProps = state => {
  return { stadiumImage: state.teamInfo.strStadiumThumb }
}

const TopImage = ({ stadiumImage }) => (
  <div className='top-image-container'>
    <img src={stadiumImage}/>
    <div></div>
  </div>
)

const TopImageBanner = connect(mapStateToProps)(TopImage)

export default TopImageBanner
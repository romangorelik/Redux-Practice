import React from 'react'
import { connect } from 'react-redux'
import '../../dist/styles/rss.css'

const mapStateToProps = state => {
  return { rssFeed: state.teamRSS }
}

const RSS = ({ rssFeed }) => (
  <React.Fragment>
    {rssFeed.length > 0 && 
      <div className='rss-feed-container'>
        <marquee behavior="scroll" direction="right" scrollamount="15">
          {rssFeed.map((news, index)=> {
            return (
              <div key={index} className='feedStory'>
                <a href={news.link._text} target='_blank'>{news.title._text}</a>
              </div>
            )
          })}
        </marquee>
      </div>}
  </React.Fragment>
)

const RSSfeed = connect(mapStateToProps)(RSS)

export default RSSfeed
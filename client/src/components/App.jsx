import React from 'react'

import Search from './Search.jsx'
import Banner from './Banner.jsx'
import TopImageBanner from './TopImageBanner.jsx'
import RSSfeed from './RSSfeed.jsx'
import TeamInfo from './TeamInfo.jsx'

import axios from 'axios'

import store from '../redux-state/store'

window.store = store

const App = () => (
  <div>
    <Search />
    <Banner />
    <TopImageBanner />
    <RSSfeed />
    <TeamInfo />
  </div>
)

export default App
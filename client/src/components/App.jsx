import React from 'react'

import Search from './Search.jsx'

import axios from 'axios'

import store from '../redux-state/store'

window.store = store

const App = () => (
  <div>
    <Search />
  </div>
)

export default App
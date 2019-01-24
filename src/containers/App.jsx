import React from 'react'

import '../style/main.sass'

import Home from 'Components/Home/Home'
import Search from 'Components/Search/Search'
import UIShowcase from 'Sparkle/Components/Showcase/Showcase'

import { AnimatedRouter } from 'Sparkle'

console.log(Home)

export default class App extends React.Component {
  render () {
    return (
      <AnimatedRouter
        routes={[
          { path: '/', exact: true, component: Home },
          { path: '/search/:query', component: Search },
          { path: '/ui', component: UIShowcase }
        ]}
      />
    )
  }
}

import React from 'react'

import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {
  Switch,
  Route,
  Link
} from 'react-router-dom'

import '../style/main.sass'

import Home from 'Components/Home/Home'
import Search from 'Components/Search/Search'
import UIShowcase from 'Generic/Showcase/Showcase'

console.log(Home)

export default class App extends React.Component {
  render () {
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames='route'
              timeout={250}
            >
              <Switch location={location}>
                <Route exact path='/' component={Home} />
                <Route path='/search/:query' component={Search} />
                <Route path='/ui' component={UIShowcase} />
                <Route render={() => <div className='route'><Link to='/'>Go Home</Link></div>} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    )
  }
}

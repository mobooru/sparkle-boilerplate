import React, { Component } from 'react'
import Connector from 'Connector'

import { Link } from 'react-router-dom'

import * as styles from './styles'

class Search extends Component {
  render () {
    return (
      <div className='route' style={styles.container}>
        <p style={styles.container.title}>{this.props.match.params.query}</p>
        <Link style={styles.container.link} to={'/'}>Go Back.</Link>
      </div>
    )
  }
}

export default Connector(Search, ['search'])

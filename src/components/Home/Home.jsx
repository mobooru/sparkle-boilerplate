import React, { Component } from 'react'
import { Connector } from 'Diluter'

import { Link } from 'react-router-dom'

import * as styles from './styles.js'
import { fetchAutocomplete } from 'Actions'

import Suggestions from './Suggestions'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.props.fetchAutocomplete(e.target.value)
  }

  render () {
    return (
      <div className='route' style={styles.container}>
        <p style={styles.container.title}>Search something.</p>
        <input style={styles.searchBox} placeholder='Something' value={this.props.SEARCH.query} onChange={this.handleChange} />
        <Suggestions items={this.props.SEARCH.suggestions} loading={this.props.SEARCH.state === 'LOADING'} />
        <Link to='/ui' style={styles.container.link}>UI Demo.</Link>
      </div>
    )
  }
}

const connected = Connector(Home, ['SEARCH'], [fetchAutocomplete])
export default connected

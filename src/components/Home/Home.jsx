import React, { Component } from 'react'
import Connector from 'Connector'

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
    fetchAutocomplete(this.props.dispatch, e.target.value)
  }

  render () {
    return (
      <div className='route' style={styles.container}>
        <p style={styles.container.title}>Search something.</p>
        <input style={styles.searchBox} placeholder='Something' value={this.props.search.query} onChange={this.handleChange} />
        <Suggestions items={this.props.search.suggestions} loading={this.props.search.state === 'LOADING'} />
        <Link to='/ui' style={styles.container.link}>UI Demo.</Link>
      </div>
    )
  }
}

const connected = Connector(Home, ['search'])
export default connected

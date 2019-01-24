import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import { Hover } from 'Sparkle'
import { AbbreviateNumber } from 'Helpers'
import * as styles from './styles.js'

class Suggestions extends Component {
  render () {
    return (
      <div style={styles.suggestions}>
        {this.props.items.map(item => <Suggestion {...item} />)}
      </div>
    )
  }
}

class Suggestion extends Component {
  render () {
    return (
      <Link to={`/search/${this.props.name}`}>
        <Hover style={{ ...styles.suggestion, ...(this.props.loading && styles.suggestion.loading) }}>
          <span style={styles.suggestion.name}>{this.props.name}</span>
          <span style={styles.suggestion.count}>{AbbreviateNumber(this.props.post_count)}</span>
        </Hover>
      </Link>
    )
  }
}

export default Suggestions

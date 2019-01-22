import { connect } from 'react-redux'
import { FilterObjectKeys } from 'Helpers'

export default function (Component, States) {
  const mapStateToProps = state => {
    const states = FilterObjectKeys(state, (key) => States.indexOf(key) > -1) || {}
    return states
  }
  const mapDispatchToProps = dispatch => {
    return {
      dispatch
    }
  }

  const connected = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)

  return connected
}

import { combineReducers } from 'redux'
import GenerateReducer from './GenerateReducer'

import * as defaults from './defaultStates.js'

let reducers

try {
  reducers = combineReducers({
    search: GenerateReducer('SEARCH', defaults.search, {})
  })
} catch (e) {

}

export default reducers

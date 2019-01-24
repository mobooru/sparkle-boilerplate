/* global fetch */
export const fetchAutocomplete = (query) => async (dispatch) => {
  dispatch({
    type: 'SEARCH',
    state: 'LOADING',
    query
  })

  if (query.length === 0) {
    dispatch({
      type: 'SEARCH',
      state: 'READY',
      suggestions: []
    })
    return
  }

  var results = await fetch(`https://mobooru.com/api/autocomplete/${query}`)
  results = await results.json()

  dispatch({
    type: 'SEARCH',
    state: 'READY',
    suggestions: results.result || []
  })
}

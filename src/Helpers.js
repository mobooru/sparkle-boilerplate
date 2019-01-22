export const FilterObjectKeys = (obj, predicate) =>
  Object.keys(obj)
    .filter(key => predicate(key))
    .reduce((res, key) => (res[key] = obj[key], res), {}) // eslint-disable-line

export const FilterObject = (obj, predicate) =>
  Object.keys(obj)
    .filter(key => predicate(obj[key]))
    .reduce((res, key) => (res[key] = obj[key], res), {}) // eslint-disable-line

const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E']
export const AbbreviateNumber = (number) => {
  var tier = Math.log10(number) / 3 | 0
  if (tier === 0) return number
  var suffix = SI_SYMBOL[tier]
  var scale = Math.pow(10, tier * 3)
  var scaled = number / scale
  return scaled.toFixed(1) + suffix
}

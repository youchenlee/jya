const reverse = require('./a')

const reverseWords = s => {
  if (typeof s !== 'string') {
    return ''
  }

  return s.split(/\s/)
    .map(x => reverse(x))
    .join(' ')
}

module.exports = reverseWords

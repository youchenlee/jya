const reverse = s => {
  let sr = ''

  if (typeof s !== 'string') {
    return sr
  }

  for (i = s.length - 1; i >= 0; i--) {
    sr = sr + s[i]
  }
  return sr
}

module.exports = reverse

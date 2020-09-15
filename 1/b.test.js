const reverseWords = require('./b')

test('Reverse string', () =>{
  expect(reverseWords('abc def')).toBe('cba fed')
})

test('Reverse empty string', () => {
  expect(reverseWords('')).toBe('')
  expect(reverseWords(null)).toBe('')
})

const reverse = require('./a')

test('Reverse string', () =>{
  expect(reverse('abc')).toBe('cba')
})

test('Reverse empty string', () => {
  expect(reverse('')).toBe('')
  expect(reverse(null)).toBe('')
})

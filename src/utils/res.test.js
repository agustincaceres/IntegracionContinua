const res = require('./res')

test('Restar al numero 5 el numero 3 y que devuelva 2', () => {
  expect(res(5, 3)).toBe(2)
})
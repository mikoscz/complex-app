import { expect, test } from 'vitest'
import { greet } from './greet.js';


test('greeter()', () => {
  expect(greet("mikoscz")).toMatch(/Hi+ mikoscz\./)
})

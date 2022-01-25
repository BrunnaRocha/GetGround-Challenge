import React from 'react'
import renderer from 'react-test-renderer'
import Footer from '../components/Footer'

function toJson(component) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result
}

test('Footer match snapshot', () => {
  const component = renderer.create(
    <Footer />,
  )
  let tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
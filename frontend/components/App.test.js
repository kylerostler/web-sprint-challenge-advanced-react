import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AppFunctional from './AppFunctional'

// Write your tests here
test('sanity', () => {
  expect(true).toBe(true)
})

beforeEach(() => {
  render(<AppFunctional />)
})

afterEach(() => {
  document.body.innerHTML = ''
})

test('test left button on grid', () => {
  fireEvent.click(screen.getByText('LEFT'))
  expect(screen.queryByText('Coordinates (1, 2)'))
})

test('test right button on grid', () => {
  fireEvent.click(screen.getByText('RIGHT'))
  expect(screen.queryByText('Coordinates (3, 2)'))
})

test('test reset button resets grid', () => {
  fireEvent.click(screen.getByText('LEFT'))
  fireEvent.click(screen.getByText('reset'))
  expect(screen.queryByText('Coordinates (2, 2)'))
})

test('check for gridlimit messages', () => {
  fireEvent.click(screen.getByText('LEFT'))
  fireEvent.click(screen.getByText('LEFT'))
  fireEvent.click(screen.getByText('LEFT'))
  expect(screen.queryByText("You can't go left"))
})

test('steps counter operates', () => {
fireEvent.click(screen.getByText('LEFT'))
fireEvent.click(screen.getByText('LEFT'))
fireEvent.click(screen.getByText('RIGHT'))
expect(screen.queryByText('You moved 2 times')).toBeInTheDocument()
})
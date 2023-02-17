import { MemoryRouter } from 'react-router-dom';
import { act, cleanup, screen, render, fireEvent, waitFor } from '@testing-library/react'

import Debug from '../pages/Debug'

test('renders Discover the Taste of Tradition', () => {
  render(<Debug />)

  const linkElement = screen.getByText(/discover the taste of tradition/i)

  expect(linkElement).toBeInTheDocument()
})

test('renders I had an amazing time at this restaurant!', () => {
  render(<Debug />)

  const linkElement = screen.getByText(/I had an amazing time at this restaurant!/i)

  expect(linkElement).toBeInTheDocument()
})
import { screen, render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import { MainProvider } from '../hooks/main'
import Home from '../pages/Home'

test('renders Home page test', () => {

  const history = createMemoryHistory({ initialEntries: ['/']})

  render(
    <MainProvider>
      <Router location={history.location} navigator={history}>
        <Home/>
      </Router>
    </MainProvider>
  )

  const linkElement1 = screen.getByText(/Our special menu/i)
  const linkElement2 = screen.getByText(/Testimonials/i)
  const linkElement3 = screen.getByText(/Little Lemon is a charming neighbourhood/i)

  expect(linkElement1).toBeInTheDocument()
  expect(linkElement2).toBeInTheDocument()
  expect(linkElement3).toBeInTheDocument()

})

import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { act, cleanup, screen, render, fireEvent, waitFor } from '@testing-library/react'

import { MainProvider } from '../hooks/main'
import Checkout from '../pages/Checkout'

describe('Checkout', () => {

  afterEach(cleanup)

  test('renders Checkout Steps test', () => {

    const history = createMemoryHistory({
      initialEntries: ['/checkout']
    })

    render(
      <MainProvider cartItems={[
          { key: 10, title: "Sunday Roast", price: 19.99, qty: 3 }
        ]}>
        <Router location={history.location} navigator={history}>
          <Checkout initialStep={0}/>
        </Router>
      </MainProvider>
    )

    const linkElement = screen.getByText(/Provide Your Contact and Delivery Information/i)

    expect(linkElement).toBeInTheDocument()
  })

  test('renders Checkout Step 1# shop-cart summary test', () => {

    const history = createMemoryHistory({
      initialEntries: ['/checkout']
    })

    render(
      <MainProvider cartItems={[
          { key: 9, title: "Sheet-Pan Curry Pork", price: 18.99, qty: 1 },
          { key: 10, title: "Sunday Roast", price: 19.99, qty: 3 }
        ]}>
        <Router location={history.location} navigator={history}>
          <Checkout initialStep={0}/>
        </Router>
      </MainProvider>
    )

    const linkElement = screen.getByText(/Sheet-Pan Curry Pork/i)

    expect(linkElement).toBeInTheDocument()

  })


})


import { BrowserRouter, Routes, Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { act, cleanup, screen, render, fireEvent, waitFor } from '@testing-library/react'

import { ConfigProvider, App as AppProvider } from 'antd'
import { MainProvider } from '../hooks/main'
import Checkout from '../pages/Checkout'

test('renders Checking your shopping cart test', () => {

  const history = createMemoryHistory({
    initialEntries: ['/checkout']
  })

  render(
    <ConfigProvider>
      <AppProvider>
        <MainProvider cartItems={[{ key: 1, title: "Salad Mokkon", price: 3.44, qty: 3 }]}>
          <Router location={history.location} navigator={history}>
            <Checkout initialStep={1}/>
          </Router>
        </MainProvider>
      </AppProvider>
    </ConfigProvider>
  )

  const linkElement = screen.getByText(/Your name/i)

  expect(linkElement).toBeInTheDocument()
})

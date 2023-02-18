import { act, cleanup, screen, render, fireEvent, waitFor } from '@testing-library/react'

import { App as AppProvider } from 'antd'
import App from '../App'

describe('App', () => {
  afterEach(cleanup)

  test('renders Header test', async () => {
    act(() => {
      render(
        <AppProvider>
          <App />
        </AppProvider>
      )
    })

    const linkElement1 = screen.getByText(/Reserve a table/i)
    await waitFor(() => {
      expect(linkElement1).toBeInTheDocument()
    })

  })

  test('renders Footer test', async () => {
    act(() => {
      render(
        <AppProvider>
          <App />
        </AppProvider>
      )
    })

    const linkElement2 = screen.getByText(/20B Lorem Street/i)
    await waitFor(() => {
      expect(linkElement2).toBeInTheDocument()
    })

  })

})



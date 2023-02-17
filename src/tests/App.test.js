import { MemoryRouter } from 'react-router-dom';
import { act, cleanup, screen, render, fireEvent, waitFor } from '@testing-library/react'

import { ConfigProvider, App as AppProvider } from 'antd'
import App from '../App'

describe('App', () => {
  afterEach(cleanup)

  test('renders Reserve a table test', async () => {
    act(() => {
      render(
        <ConfigProvider
            theme={{
                "token": {
                  "fontFamily": "'Karla', sans-serif",
                  "colorPrimary": "#495e57",
                  "colorError": "#d44444",
                  "colorPrimaryBg": "#f4ce14",
                  "borderRadius": 10,
                }
            }}
        >
          <AppProvider>
            <App />
          </AppProvider>
        </ConfigProvider>
      )
    })

    const linkElement = screen.getByText(/Reserve a table/i)

    await waitFor(() => {
      expect(linkElement).toBeInTheDocument()
    })

    const linkElement2 = screen.getByText(/Our special menu/i)

    await waitFor(() => {
      expect(linkElement2).toBeInTheDocument()
    })


  })


})



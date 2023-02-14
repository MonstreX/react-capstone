import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ConfigProvider, App as AppProvider } from 'antd'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
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
  </React.StrictMode>
);


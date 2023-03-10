import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from 'antd'

import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Checkout from './pages/Checkout'
import Booking from './pages/Booking'
import Header from './components/Header'
import Footer from './components/Footer'

import { MainProvider } from './hooks/main'

import './assets/css/app.css'
import './assets/css/antd.css'

const { Header: HeaderLayout, Content: ContentLayout, Footer: FooterLayout } = Layout

function App() {

  return (
      <Layout className="layout">
        <MainProvider>
          <BrowserRouter>

            <HeaderLayout className='lemon-header'>
              <Header/>
            </HeaderLayout>

            <ContentLayout className="lemon-content">
              <main>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/menu' element={<Menu />} />
                  <Route path='/checkout' element={<Checkout />} />
                  <Route path='/booking' element={<Booking />} />
                </Routes>
              </main>
            </ContentLayout>

            <FooterLayout className='lemon-footer'>
              <Footer/>
            </FooterLayout>

          </BrowserRouter>
        </MainProvider>
      </Layout>
  )
}

export default App

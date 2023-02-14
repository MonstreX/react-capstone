import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from 'antd'

import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Order from './pages/Order'
import Booking from './pages/Booking'
import Result from './pages/Result'
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
                  <Route path='/order' element={<Order />} />
                  <Route path='/booking' element={<Booking />} />
                  <Route path='/result' element={<Result />} />
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

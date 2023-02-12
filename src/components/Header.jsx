import { NavLink, Link } from 'react-router-dom'
import { Menu, Col, Row } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

import logo from '../assets/images/logo-small.png'

const Header = () => {
    return (
        <div className='container'>
            <div className='lemon-header-row'>
                <Col flex="270px" className="lemon-header-logo">
                    <Link to='/'>
                        <img src={logo} alt="Little lemon" />
                    </Link>
                </Col>
                <Col flex="auto" className="lemon-header-menu">
                    <nav>
                        <Menu
                        theme="light"
                        mode="horizontal"
                        overflowedIndicator={<MenuOutlined />}
                        defaultSelectedKeys={['home']}
                        items={[
                            {
                                key: 'home', label: (<NavLink to='/' className='menu-link'>Home</NavLink>),
                            },
                            {
                                key: 'about', label: (<NavLink to='/about' className='menu-link'>About</NavLink>),
                            },
                            {
                                key: 'menu', label: (<NavLink to='/menu' className='menu-link'>Menu</NavLink>),
                            },
                            {
                                key: 'order', label: (<NavLink to='/order' className='menu-link'>Order</NavLink>),
                            },
                            {
                                key: 'booking', label: (<NavLink to='/booking' className='menu-link'>Booking</NavLink>),
                            }
                        ]}
                        />
                    </nav>
                </Col>
            </div>
        </div>
    )
}

export default Header
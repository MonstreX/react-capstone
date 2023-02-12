import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/images/logo-footer.png'
import { Col, Row, Space } from 'antd'
import { HomeOutlined, EnvironmentOutlined, PhoneOutlined } from '@ant-design/icons'

const Footer = () => {
    return (
        <div className="container">
            <Row gutter={[50, 20]}>
                <Col span={24} md={12} lg={8} className="lemon-footer-col lemon-footer-logo">
                    <Link to='/'>
                        <img src={logo} alt="Little lemon" />
                    </Link>
                    <span>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</span>
                </Col>
                <Col span={24} md={12} lg={8} className="lemon-footer-col">
                    <h3>Pages</h3>
                    <ul>
                        <li>
                            <NavLink to='/' className='menu-link'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className='menu-link'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/menu' className='menu-link'>Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to='/order' className='menu-link'>Order</NavLink>
                        </li>
                        <li>
                            <NavLink to='/booking' className='menu-link'>Booking</NavLink>
                        </li>
                    </ul>
                </Col>
                <Col span={24} md={12} lg={8} className="lemon-footer-col lemon-footer-contact">
                    <h3>Contacts</h3>
                    <ul>
                        <li><Space><HomeOutlined /> Chicago, US</Space></li>
                        <li><Space><EnvironmentOutlined /> 20B Lorem Street</Space></li>
                        <li><Space><PhoneOutlined /><a href="tel:8(800)90-90-900">8(800)90-90-900</a></Space></li>
                    </ul>
                </Col>
            </Row>
        </div>
    )
}

export default Footer
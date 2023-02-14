import { NavLink, Link } from 'react-router-dom'
import { Menu, Button, Row, Col, Avatar, Badge, Popover, Space } from 'antd'
import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { useMain } from '../hooks/main'
import MiniShopCartList from './MiniShopCartList'

import logo from '../assets/images/logo-small.png'

const Header = () => {

    const { cart } =  useMain()

    const text = <span>Title</span>

    const content = (
      <Space direction="vertical">
        <MiniShopCartList items={cart.items}/>
        <Button className="lemon-btn-a" size="large" type="primary" shape="round">Checkout</Button>
      </Space>
    )

    return (
        <div className='container'>
            <div className='lemon-header-row'>
                <Col flex="270px" className="lemon-header-logo">
                    <Link to='/'>
                        <img src={logo} alt="Little lemon" />
                    </Link>
                </Col>
                <Col flex="auto" className="lemon-header-cart">
                    <Badge count={cart.items.length}>
                        <Popover placement="bottom" title={text} content={content}>
                            <Avatar shape="circle" size={42} icon={<ShoppingCartOutlined />} />
                        </Popover>
                    </Badge>
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
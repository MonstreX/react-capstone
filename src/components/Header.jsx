import { NavLink, Link, useNavigate } from 'react-router-dom'
import { Menu, Button, Row, Col, Avatar, Badge, Popover, Space } from 'antd'
import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { useMain } from '../hooks/main'
import MiniShopCartList from './MiniShopCartList'

import logo from '../assets/images/logo-small.png'

const Header = () => {

    const { cart, cartDispatch } =  useMain()
    const navigate = useNavigate()

    return (
        <div className='container'>
            <div className='lemon-header-row'>
                <Col flex="270px" className="lemon-header-logo">
                    <Link to='/'>
                        <img src={logo} alt="Little lemon" />
                    </Link>
                </Col>
                <Col flex="auto" className="lemon-header-cart">
                    {
                        !!cart.items.length && (
                            <Badge count={cart.items.length}>
                            <Popover
                                placement="bottom"
                                title={<h3>Shop-Cart</h3>}
                                content={
                                    <Space direction="vertical">
                                        <MiniShopCartList items={cart.items}/>
                                        <Space style={{justifyContent: "space-between", width:"100%"}}>
                                            <Button className="lemon-btn-a" 
                                                size="large" 
                                                type="primary" 
                                                shape="round"
                                                onClick={() => { navigate("/checkout", {replace: true})}}
                                                >
                                                    Checkout
                                            </Button>
                                            <Button className="lemon-btn-b"
                                                size="large"
                                                type="primary"
                                                shape="round"
                                                onClick={() => cartDispatch({type: 'clear'})}>
                                                    Clear the cart
                                            </Button>
                                        </Space>
                                    </Space>
                                }>
                                <Avatar shape="circle" size={42} icon={<ShoppingCartOutlined />} style={{backgroundColor: "var(--cl-primary)"}} />
                            </Popover>
                        </Badge>
                        )
                    }
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
                            !!cart.items.length && 
                            {
                                key: 'order', label: (<NavLink to='/checkout' className='menu-link'>Checkout</NavLink>),
                            },
                            {
                                key: 'booking', label: (<NavLink to='/booking' className='menu-link'>Reserve a table</NavLink>),
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
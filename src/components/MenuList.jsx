import { Button, Row, Col } from 'antd'
import { useMain } from '../hooks/main'

const MenuList = ({menuList, special = false}) => {
    const { cart, cartDispatch } =  useMain()

    const addToCart = (item) => {
        cartDispatch({
            type: 'add', 
            payload: {
                key: item.key,
                title: item.title,
                image: item.image,
                qty: 1,
                price: item.price,
            }
        })
    }

    return (
    <Row gutter={[30, 30]}>
        {
            menuList.filter(item => {
                if (special) {
                    return item.special
                } else {
                    return true
                }
            }).map(item => {
                return (
                <Col span={24} sm={12} lg={8}  key={item.key}>
                    <div className="lemon-menu-item">
                        <div className="lemon-menu-item__image">
                            <img className="" src={item.image} alt={item.title} />
                            <div className="lemon-menu-item__overlay"></div>
                        </div>
                        <div className="lemon-menu-item__content">
                            <div className="lemon-menu-item__header">
                                <h3>{item.title}</h3>
                                <span>{item.price}</span>
                            </div>
                            <div className="lemon-menu-item__desc">
                                <p>{item.description}</p>
                            </div>
                            <div className="lemon-menu-item__footer">
                                <Button 
                                    className="lemon-btn-b" 
                                    size="large" 
                                    type="primary" 
                                    shape="round" 
                                    onClick={() => addToCart(item)}>
                                    Add to shop-cart
                                </Button>
                            </div>
                        </div>
                    </div>
                </Col>
                )
            })
        }
    </Row>
    )
}

export default MenuList
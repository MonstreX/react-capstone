import { useNavigate } from "react-router-dom"
import { Button, Row, Col } from 'antd'

const MenuList = ({menuList, special = false}) => {
    const navigate = useNavigate()
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
                <Col span={24} sm={12} lg={8}>
                    <div className="lemon-menu-item" key={item.title}>
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
                                <Button className="lemon-btn-b" size="large" type="primary" shape="round" onClick={() => { navigate("/booking", {replace: true})}}>
                                    Order the dish
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
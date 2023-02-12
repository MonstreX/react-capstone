import { useNavigate } from "react-router-dom"
import { Button } from 'antd'

const MenuList = ({menuList, special = false}) => {
    const navigate = useNavigate()
    return (
    <div className="lemon-menu-list mg-section-bottom">
        {
            menuList.filter(item => {
                if (special) {
                    return item.special
                } else {
                    return true
                }
            }).map(item => {
                return (
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
                )
            })
        }
    </div>
    )
}

export default MenuList
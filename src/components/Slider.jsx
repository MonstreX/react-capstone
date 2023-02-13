import { useNavigate } from "react-router-dom"
import { Carousel, Button } from 'antd'
import banner1 from '../assets/images/b0.jpg'
import banner2 from '../assets/images/b1.jpg'
import banner3 from '../assets/images/b2.jpg'

const Slider = () => {
    const navigate = useNavigate()
    return (
        <Carousel effect="fade">
            <div className='lemon-banner-item'>
                <img className='image-fit v-top' src={banner1} alt="" />
                <div className='lemon-banner-item__box'>
                    <div className="lemon-banner-item__content">
                        <h2 className='lemon-title light'>Little Lemon</h2>
                        <h3 className='lemon-subtitle light'>Chicago</h3>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <Button className="lemon-btn-a" size="large" type="primary" shape="round" onClick={() => { navigate("/booking", {replace: true})}}>
                            Reserv a table
                        </Button>
                    </div>
                </div>
            </div>
            <div className='lemon-banner-item'>
                <img className="image-fit" src={banner2} alt="" />
                <div className='lemon-banner-item__box'>
                    <div className="lemon-banner-item__content">
                        <h2 className='lemon-title light'>A Restaurant for All Tastes</h2>
                        <h3 className='lemon-subtitle light'>Always Something New</h3>
                        <p>We offer a wide selection of dishes for all tastes, including vegetarian, vegan, and gluten-free options. Every day we offer something new and exciting, so you never get bored.</p>
                        <Button className="lemon-btn-a" size="large" type="primary" shape="round" onClick={() => { navigate("/booking", {replace: true})}}>
                            Reserv a table
                        </Button>
                    </div>
                </div>
            </div>
            <div className='lemon-banner-item'>
                <img className="image-fit" src={banner3} alt="" />
                <div className='lemon-banner-item__box'>
                    <div className="lemon-banner-item__content">
                        <h2 className='lemon-title light'>Cozy Interior</h2>
                        <h3 className='lemon-subtitle light'>Great Place for Meetings</h3>
                        <p>We've created a cozy and comfortable interior, so you can enjoy your favorite dishes in a relaxed and peaceful environment. It's also a great place for meetings with friends, family, or business partners.</p>
                        <Button className="lemon-btn-a" size="large" type="primary" shape="round" onClick={() => { navigate("/booking", {replace: true})}}>
                            Reserv a table
                        </Button>
                    </div>
                </div>
            </div>
        </Carousel>
    )
}

export default Slider
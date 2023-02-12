import Slider from "../components/Slider"
import menuList from "../data/menu"
import MenuList from "../components/MenuList"
import testimonialsList from "../data/testimonials"
import Testimonials from "../components/Testimonials"

const Home = () => {
    return (
        <div className="container">
            <Slider />
            <>
                <h2 className="lemon-title mg-title-section">Our special menu</h2>
                <MenuList menuList={menuList} special={true} />

                <h2 className="lemon-title mg-title-section">Testimonials</h2>
                <Testimonials testimonialsList={testimonialsList}/>

            </>
        </div>
    )
}

export default Home
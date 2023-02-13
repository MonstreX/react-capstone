import Slider from "../components/Slider"
import menuList from "../data/menu"
import MenuList from "../components/MenuList"
import testimonialsList from "../data/testimonials"
import Testimonials from "../components/Testimonials"
import About from "../components/About"

const Home = () => {
    return (
        <>

        <Slider />

        <section className="pd-section bg-main">
            <div className="container">
                <h2 className="lemon-title mg-title-section">Our special menu</h2>
                <MenuList menuList={menuList} special={true} />
            </div>
        </section>

        <section className="pd-section">
            <div className="container">
                <h2 className="lemon-title mg-title-section">Testimonials</h2>
                <Testimonials testimonialsList={testimonialsList}/>
            </div>
        </section>

        <section className="pd-section bg-main">
            <div className="container">
                <About/>
            </div>
        </section>

        </>
    )
}

export default Home
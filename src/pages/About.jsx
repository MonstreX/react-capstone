import { Row, Col, Image } from 'antd'

import PageHeader from '../components/PageHeader'
import headerImage from '../assets/images/header2.jpg'
import testimonialsList from "../data/testimonials"
import Testimonials from "../components/Testimonials"
import about1 from '../assets/images/about1.jpg'
import about2 from '../assets/images/about2.jpg'

const About = () => {
    return (
        <>
            <PageHeader title="About" subtitle="about us" image={headerImage}/>

            <div className="container mg-section-top mg-section-bottom">
                <Row gutter={[50,30]}>
                    <Col md={14}>
                        <div className="media-text__content">
                            <h2 className="lemon-title">Discover the Taste of Tradition at Our Family-Owned Restaurant</h2>
                            <p>Welcome to our traditional restaurant, where we bring the flavors of the past to the present. Our family-owned and operated establishment has been serving up delicious dishes for generations, and we're proud to share our passion for good food with our customers.</p>
                            <p>At our restaurant, you'll find a menu full of classic dishes made with the freshest ingredients. From savory soups and stews to hearty roasts and grilled meats, there's something for everyone. And of course, no meal is complete without one of our homemade desserts.</p>
                        </div>
                    </Col>
                    <Col md={10}>
                        <div className="media-text__image">
                            <Image className="media-round" src={about1}></Image>
                        </div>
                    </Col>
                </Row>

                <Row gutter={[50,30]} className="mg-section-top">
                    <Col md={10}>
                        <div className="media-text__image">
                            <Image className="media-round" src={about2}></Image>
                        </div>
                    </Col>
                    <Col md={14}>
                        <div className="media-text__content">
                            <p>We believe that eating is about more than just sustenance. It's a social experience, a chance to gather with friends and family, and to celebrate life's joys and pleasures. That's why we've created a warm and inviting atmosphere that's perfect for any occasion.</p>
                            <p>Our restaurant can accommodate up to 10 guests at a time, making it the ideal place for intimate gatherings, special events, or a quiet night out. We also offer catering services, so you can bring the taste of tradition to your own home.</p>
                            <p>At our restaurant, we're committed to sustainability. We source our ingredients from local farmers and purveyors whenever possible, and we make an effort to minimize our waste and reduce our carbon footprint.</p>
                        </div>
                    </Col>
                </Row>

                <section className="mg-section-top">
                    <h2 className="lemon-title mg-title-section">Testimonials</h2>
                    <Testimonials testimonialsList={testimonialsList}/>
                </section>

            </div>
        </>
    )
}

export default About
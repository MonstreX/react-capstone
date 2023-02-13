import { Row, Col, Image } from 'antd'

import pic2 from '../assets/images/pic2.jpg'
import pic3 from '../assets/images/pic3.jpg'

const About = () => {

    return (
        <Row gutter={[50, 30]} className="mg-section-bottom">
            <Col className="double-media-text" md={12}>
                <h2 className="lemon-title mg-title-text">Little Lemon</h2>
                <h3 className="lemon-subtitle">Chicago</h3>
                <p>Little Lemon is a charming neighbourhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
            </Col>
            <Col md={12}>
                <div className="double-holder">
                    <img className="double-one" src={pic3} alt="Little Lemon #1" width="300" height="300"/>
                    <img className="double-two" src={pic2} alt="Little Lemon #2" width="300" height="300"/>
                </div>
            </Col>
        </Row>
    )
}

export default About
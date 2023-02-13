import { Row, Col, Avatar, Space, Rate } from 'antd'

const Testimonials = ({testimonialsList}) => {
    return (
    <Row gutter={[30, 30]} justify="center" className="lemon-testimonials-list">
        {
            testimonialsList.map(item => {
                return (
                    <Col span={24} sm={12} md={8} lg={6} key={item.name}>
                        <Space className="lemon-testimonials-item" direction="vertical" size="middle">
                            <Space size="middle">
                                <Avatar size="large" src={item.avatar}/>
                                <h3>{item.name}</h3>
                            </Space>
                            <Rate disabled defaultValue={item.rate} style={{color: "#f5f5f5"}}/>
                            <p>{item.description}</p>
                        </Space>
                    </Col>
                )
            })
        }
    </Row>
    )
}

export default Testimonials
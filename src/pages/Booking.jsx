import { useState } from 'react'
import { App, Steps, Result, Button, Descriptions, Badge } from 'antd'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import headerImage from '../assets/images/header6.jpg'
import BookingForm from '../forms/BookingForm'
import { submitAPI } from '../api'

const Booking = ({initialStep = 0}) => {

    const navigate = useNavigate()

    const { notification } = App.useApp()

    const [ step, setStep ] = useState(initialStep)
    const [ formData, setFopmData ] = useState()

    const onFinish = (values) => {

        const response = submitAPI(values);

        if (response) {
            setFopmData(values)
            setStep(1)
        } else {
            notification.error({
                message: `Order error `,
                description: `Oops! Something went wrong. Please try again.`,
            })
        }

    }

    const onFinishFailed = ({ values, errorFields, outOfDate }) => {}

    return (
        <div className='fadein-200'>
            <PageHeader title="Table Reservation" subtitle="Indulge in Taste and Atmosphere with Us" image={headerImage}/>

            <div className="container mg-section-top mg-section-bottom">
                <section className="mg-section-top">
                    <h2 className="lemon-title mg-title-section">Booking Completion</h2>
                    <Steps className=""
                        current={step}
                        items={[
                            {
                                title: 'Provide Reservation Details',
                                description: 'Fill out the form and choose a convenient time',
                            },
                            {
                                title: 'Reservation Confirmed',
                                description: 'Your table is reserved and ready for your visit!'
                            },
                        ]}
                    />

                    {
                        step === 0 && (
                            <div className="lemon-form">
                                <BookingForm {...{onFinish, onFinishFailed, step, setStep }} />
                            </div>
                        )
                    }

                    {
                        step === 1 && (
                            <>
                                <Result
                                    status="success"
                                    title="Your table reservation is confirmed!"
                                    subTitle={`Thank you for reserving a table at *Little Lemon* through our website. Your reservation is now confirmed and we look forward to welcoming you on ${ formData.date.format('YYYY/MM/DD') } at ${ formData.time }. Please find the details of your reservation below:`}
                                />
                                <Descriptions 
                                    style={{ maxWidth: "700px", margin: "0 auto" }} 
                                    title="Reservation Details:" 
                                    bordered
                                    column={{
                                        sm: 2,
                                        xs: 1,
                                      }}
                                    >
                                    <Descriptions.Item label="Your name">{ formData.name }</Descriptions.Item>
                                    <Descriptions.Item label="Reservation date">{ formData.date.format('YYYY/MM/DD') }</Descriptions.Item>
                                    <Descriptions.Item label="Reservation time">{ formData.time }</Descriptions.Item>
                                    <Descriptions.Item label="Number of persons">{ formData.persons }</Descriptions.Item>
                                    <Descriptions.Item label="Occasion">{ formData.occasion }</Descriptions.Item>
                                </Descriptions>
                                <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
                                    <Button
                                        className="lemon-type-a"
                                        size="large"
                                        shape="round"
                                        type="primary"
                                        key="ok"
                                        onClick={() => navigate("/", {replace: true})}
                                        >
                                        Go Home
                                    </Button>
                                </div>
                            </>
                        )
                    }
                </section>
            </div>
        </div>
    )
}

export default Booking
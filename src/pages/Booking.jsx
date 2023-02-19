import { useState } from 'react'
import { Steps, Result, Space, Button, Checkbox, Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import headerImage from '../assets/images/header6.jpg'
import BookingForm from '../forms/BookingForm'

const Booking = ({initialStep = 0}) => {

    const navigate = useNavigate()

    const [ step, setStep ] = useState(initialStep)

    //const isFormValid = () => !form.getFieldsError().some(({ errors }) => errors.length)
    const onFinish = (values) => {}
    const onFinishFailed = ({ values, errorFields, outOfDate }) => {}

    return (
        <>
            <PageHeader title="Table Reservation" subtitle="Indulge in Taste and Atmosphere with Us" image={headerImage}/>

            <div className="container mg-section-top mg-section-bottom">
                <section className="mg-section-top">
                    <h2 className="lemon-title mg-title-section">Booking Completion</h2>
                    <Steps className="mg-section-bottom"
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
                            <Result
                                status="success"
                                title="Your reserving a table is confirmed!"
                                subTitle="We have received your order and it will be prepared and delivered to you shortly. You will receive a confirmation email with your order details and estimated delivery time. If you have any questions or concerns, please do not hesitate to contact us. We hope you enjoy your meal!"
                                extra={[
                                <Button
                                    className="lemon-type-a"
                                    size="large"
                                    shape="round"
                                    type="primary"
                                    key="ok"
                                    onClick={() => navigate("/", {replace: true})}
                                    >
                                    Go Home
                                </Button>,
                                ]}
                            />
                        )
                    }
                </section>
            </div>
        </>
    )
}

export default Booking
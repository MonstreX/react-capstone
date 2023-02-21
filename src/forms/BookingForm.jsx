import { useState, useReducer, useEffect } from 'react'
import { Form, Button, Row, Col, Divider } from 'antd'
import EmailInput from '../ui/EmailInput'
import NameInput from '../ui/NameInput'
import PhoneInput from '../ui/PhoneInput'
import DateInput from '../ui/DateInput'
import TimeInput from '../ui/TimeInput'
import PersonsInput from '../ui/PersonsInput'
import OccasionInput from '../ui/OccasionInput'
import CommentInput from '../ui/CommentInput'

const BookingForm = ({ onFinish, onFinishFailed, setTargetDate, times }) => {

    const [isValid, setIsValid] = useState(false)
    const [form] = Form.useForm()

    const onFieldsChange = () => {
        setIsValid(!form.getFieldsError().some(({ errors }) => errors.length))
    }

    const onDateChange = (date) => {
        if (date) {
            setTargetDate(date.toDate())
        }
    }

    return (
        <Form
            form={form}
            size="large"
            name="booking"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            onFieldsChange={onFieldsChange}
            autoComplete="off"
            >
            <div className="lemon-form-inner">
                <Divider plain>Customer info</Divider>
                <NameInput />
                <Row gutter={[20, 20]}>
                    <Col span="24" md={12}>
                        <EmailInput />
                    </Col>
                    <Col span="24" md={12}>
                        <PhoneInput />
                    </Col>
                </Row>
                <Divider plain>Reservation data</Divider>
                <Row gutter={[20, 20]}>
                    <Col span="24" md={12}>
                        <DateInput onDateChange={onDateChange}/>
                    </Col>
                    <Col span="24" md={12}>
                        <TimeInput times={times}/>
                    </Col>
                </Row>
                <Row gutter={[20, 20]}>
                    <Col span="24" md={12}>
                        <PersonsInput />
                    </Col>
                    <Col span="24" md={12}>
                        <OccasionInput />
                    </Col>
                </Row>
                <CommentInput />
            </div>
            <Form.Item style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
                <Button className="lemon-btn-b"
                    id="submit-booking"
                    shape="round"
                    size="large"
                    type="primary"
                    htmlType="submit"
                    disabled={!isValid}
                    >
                    Confirm Your Booking
                </Button>
            </Form.Item>
        </Form>
    )
}

export default BookingForm
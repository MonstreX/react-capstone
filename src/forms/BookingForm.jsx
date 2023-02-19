import { useState, useReducer, useEffect } from 'react'
import { Form, Button, Row, Col, Divider } from 'antd'
import Email from '../ui/Email'
import Name from '../ui/Name'
import Phone from '../ui/Phone'
import DateInput from '../ui/DateInput'
import Time from '../ui/Time'
import Persons from '../ui/Persons'
import Occasion from '../ui/Occasion'
import Comment from '../ui/Comment'

import { fetchAPI, submitAPI } from '../api'

const BookingForm = ({ onFinish, onFinishFailed, step, setStep, cart }) => {

    const timesReducer = (state, action) => {
        switch (action.type) {
            case 'updateList':
                return { ...state, list: action.payload.times }
            case 'initializeList':
                return { ...state, list: [] }
            default:
                return state
        }
    }

    const [times, timesDispatch] = useReducer(timesReducer, { list: [] })

    const updateTimes = async (date = new Date()) => {
        const times = await fetchAPI(date)
        timesDispatch({ type: 'updateList', payload: { times: times } })
    }

    useEffect(() => {
        updateTimes()
    }, [])

    const [isValid, setIsValid] = useState(false)
    const [form] = Form.useForm()

    const onFieldsChange = () => {
        setIsValid(!form.getFieldsError().some(({ errors }) => errors.length))
    }

    const onDateChange = (date) => {
        if (date) {
            updateTimes(date.$d)
        }
    }

    return (
        <Form
            form={form}
            size="large"
            name="checkout"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            onFieldsChange={onFieldsChange}
            autoComplete="off"
            >
            <div className="lemon-form-inner">
                <Divider plain>Customer info</Divider>
                <Name />
                <Row gutter={[20, 20]}>
                    <Col md={12}>
                        <Email />
                    </Col>
                    <Col md={12}>
                        <Phone />
                    </Col>
                </Row>
                <Divider plain>Reservation data</Divider>
                <Row gutter={[20, 20]}>
                    <Col md={12}>
                        <DateInput onDateChange={onDateChange}/>
                    </Col>
                    <Col md={12}>
                        <Time times={times}/>
                    </Col>
                </Row>
                <Row gutter={[20, 20]}>
                    <Col md={12}>
                        <Persons />
                    </Col>
                    <Col md={12}>
                        <Occasion />
                    </Col>
                </Row>
                <Comment />
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
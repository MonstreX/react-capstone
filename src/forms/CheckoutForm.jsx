import { useState } from 'react'
import { Form, Input } from 'antd'
import StepsNav from '../components/StepsNav'
import AddressInput from '../ui/AddressInput'
import EmailInput from '../ui/EmailInput'
import NameInput from '../ui/NameInput'
import PhoneInput from '../ui/PhoneInput'

const CheckoutForm = ({ onFinish, onFinishFailed, step, setStep, cart }) => {

    const [isValid, setIsValid] = useState(false)
    const [form] = Form.useForm()

    const onFieldsChange = () => {
        setIsValid(!form.getFieldsError().some(({ errors }) => errors.length))
    }

    return (
    <Form
        form={form}
        size="large"
        name="checkout"
        layout="vertical"
        onFinish={onFinish}
        onFieldsChange={onFieldsChange}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
        <div className="lemon-form-inner">
            <NameInput />
            <EmailInput />
            <PhoneInput />
            <AddressInput />
        </div>
        <Form.Item>
            <StepsNav
                step={step}
                setStep={setStep}
                hasItems={!!cart.items.length}
                next="Complete"
                isFormValid={isValid}
            />
        </Form.Item>
    </Form>
    )
}

export default CheckoutForm
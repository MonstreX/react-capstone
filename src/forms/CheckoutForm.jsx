import { Form, Input } from 'antd'
import StepsNav from '../components/StepsNav'
import Address from '../ui/Address'
import Email from '../ui/Email'
import Name from '../ui/Name'
import Phone from '../ui/Phone'

const CheckoutForm = ({ onFinish, onFinishFailed, step, setStep, cart }) => {

    const [form] = Form.useForm()

    return (
    <Form
        form={form}
        size="large"
        name="checkout"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
        <div className="lemon-form-inner">
            <Name />
            <Email />
            <Phone />
            <Address />
        </div>
        <Form.Item>
            <StepsNav
                step={step}
                setStep={setStep}
                hasItems={!!cart.items.length}
                next="Complete"
            />
        </Form.Item>
    </Form>
    )
}

export default CheckoutForm
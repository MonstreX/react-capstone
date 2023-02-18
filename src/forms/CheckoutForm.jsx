import { Form, Input } from 'antd'
import StepsNav from '../components/StepsNav'

const CheckoutForm = ({ onFinish, step, setStep, cart }) => {

    const [form] = Form.useForm()

    return (
    <Form
        form={form}
        size="large"
        name="checkout"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        >
        <div className="lemon-form-inner">
            <Form.Item
                test-id="name"
                label="Your name"
                name="name"
                rules={[
                    {
                        required: true,
                        min: 3,
                        message: 'Too short or empty. Please input your username!',
                        whitespace: true,
                    }
                ]}
                >
                <Input />
            </Form.Item>

            <Form.Item
                label="E-Mail address"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your email address',
                    },
                    {
                        type: 'email',
                        message: 'Should be email address',
                    },
                ]}
                >
                <Input />
            </Form.Item>

            <Form.Item
                label="Your phone number"
                name="phone"
                rules={[
                    {
                        required: true,
                        min: 7,
                        message: "Wrong phone format!",
                        whitespace: false,
                    },
                ]}
                >
                <Input type="phone" />
            </Form.Item>

            <Form.Item
                label="Shipping Address"
                name="address"
                rules={[
                    {
                        required: true,
                        min: 3,
                        message: 'Please input your shipping address!',
                        whitespace: true,
                    }
                ]}
                >
                <Input />
            </Form.Item>
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
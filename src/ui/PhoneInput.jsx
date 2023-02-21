import { Form, Input } from 'antd'

const PhoneInput = () => {
    return (
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
    )
}

export default PhoneInput
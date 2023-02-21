import { Form, Input } from 'antd'

const Address = () => {
    return (
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
    )
}

export default Address
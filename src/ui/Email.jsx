import { Form, Input } from 'antd'

const Email = () => {
    return (
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
    )
}

export default Email
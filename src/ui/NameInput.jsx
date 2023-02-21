import { Form, Input } from 'antd'

const NameInput = () => {
    return (
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
    )
}

export default NameInput
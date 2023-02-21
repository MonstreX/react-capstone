import { Form, Input } from 'antd'

const CommentInput = () => {
    const { TextArea } = Input
    return (
        <Form.Item
            test-id="comment"
            label="Your comment"
            name="comment">
            <TextArea rows={4} />
        </Form.Item>
    )
}

export default CommentInput
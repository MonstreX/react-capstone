import { Form, Select } from 'antd'

const TimeInput = ({times}) => {
    return (
        <Form.Item
            label="Reservation time"
            name="time"
            style={{ width: "100%" }}
            rules={[{ required: true, message: 'Please select time!' }]}>
            <Select
                placeholder="Select time"
                options={times.map(time => ({ value: time, label: time }))}/>
        </Form.Item>
    )
}

export default TimeInput
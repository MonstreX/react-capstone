import { Form, DatePicker } from 'antd'
import dayjs from 'dayjs'

const DateInput = ({onDateChange}) => {

    const dateFormat = 'YYYY-MM-DD'

    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current < dayjs().endOf('day')
    }

    return (
        <Form.Item
            label="Reservation date"
            name="date"
            style={{ width: "100%" }}
            rules={[{ required: true, message: 'Please select a date!' }]}>
            <DatePicker
                format={dateFormat}
                disabledDate={disabledDate}
                onChange={onDateChange}
            />
        </Form.Item>
    )
}

export default DateInput
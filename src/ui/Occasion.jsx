import { Form, Select } from 'antd'

const Occasion = () => {
    const occasions = ['Birthday', 'Engagement', 'Anniversary', 'Others']
    return (
        <Form.Item
            label="Reservation occasion"
            name="occasion"
            style={{ width: "100%" }}
            >
            <Select
                placeholder="Select occasion"
                options={
                    occasions.map(ocassion => ({ value: ocassion, label: ocassion }))
                }
            />
        </Form.Item>
    )
}

export default Occasion
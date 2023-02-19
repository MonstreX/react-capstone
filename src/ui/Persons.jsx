import { Form, Select } from 'antd'

const Persons = () => {
    return (
        <Form.Item
            label="How many persons"
            name="persons"
            style={{ width: "100%" }}
            rules={[{ required: true, message: 'Please select number of persons!' }]}>
            <Select
                placeholder="Select seats"
                options={[
                    { value: 1, label: '1 person' },
                    { value: 2, label: '2 persons' },
                    { value: 3, label: '3 persons' },
                    { value: 4, label: '4 persons' },
                    { value: 5, label: '5 persons' },
                    { value: 6, label: '6 persons' },
                    { value: 7, label: '7 persons' },
                    { value: 8, label: '8 persons' },
                    { value: 9, label: '9 persons' },
                    { value: 10, label: '10 persons' },
                ]}/>
        </Form.Item>
    )
}

export default Persons
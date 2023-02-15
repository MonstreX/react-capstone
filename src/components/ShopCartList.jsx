import { Table, Image, Button, InputNumber, Popconfirm } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

const ShopCartList = ({ items, onChangeQty, onRemoveProduct }) => {

    const columns = [
        {
            key: 'image',
            title: 'Image',
            dataIndex: 'image',
            render: (value) => <Image src={value} height={50}/>
        },
        {
            key: 'title',
            title: 'Title',
            dataIndex: 'title',
        },
        {
            align: 'right',
            key: 'qty',
            title: 'Qty',
            dataIndex: 'qty',
            render: (value, record) => {
                return <InputNumber
                    min={1}
                    max={50}
                    defaultValue={value}
                    onChange={(value) => onChangeQty({key: record.key, value})} />
            }
        },
        {
            align: 'right',
            key: 'price',
            title: 'Price',
            render: (value, record) => `$${(record.qty * record.price).toFixed(2)}`
        },
        {
            key: 'remove',
            title: 'Remove',
            render: (value, record) => (
                <Popconfirm
                    title="Remove product"
                    description="Are you sure to remove the product?"
                    onConfirm={() => onRemoveProduct(record.key)}
                    okText="Yes"
                    cancelText="No">
                    <Button danger type="primary" shape="circle" icon={<DeleteOutlined />} />
                </Popconfirm>
            )
        },
    ]

    return (
        <Table
            columns={columns}
            dataSource={items}
            pagination={false}
            footer={() => {
                let sum = 0.0
                if (items.length > 0) {
                    sum = items.reduce((accumulator, item) => {
                        return accumulator + item.price * item.qty;
                      }, 0)
                }
                return <h2>{`Total: $${sum.toFixed(2)}`}</h2>
            }}
        />
    )
}

export default ShopCartList
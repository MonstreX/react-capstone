import { Table, Image } from 'antd'

const MiniShopCartList = ({items}) => {

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
        },
        {
            align: 'right',
            key: 'price',
            title: 'Price',
            dataIndex: 'price',
            render: (value) => `$${value}`
        },
    ]

    return (
        <Table
            columns={columns}
            dataSource={items}
            footer={() => {
                let sum = 0.0
                if (items.length > 0) {
                    const sum = items.reduce((accumulator, item) => {
                        return accumulator + item.price * item.qty;
                      }, 0)
                }
                return <strong>{`Total: ${sum}`}</strong>
            }}
        />
    )
}

export default MiniShopCartList
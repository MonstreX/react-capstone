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
            key: 'qty',
            title: 'Qty',
            dataIndex: 'qty',
        },
        {
            key: 'price',
            title: 'Price',
            dataIndex: 'price',
        },
    ]

    return (
        <Table
            columns={columns}
            dataSource={items}
        />
    )
}

export default MiniShopCartList
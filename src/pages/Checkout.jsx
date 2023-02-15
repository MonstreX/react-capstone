import { useState } from 'react'
import { Steps, Result, Space, Button, Checkbox, Form, Input } from 'antd'
import PageHeader from '../components/PageHeader'
import ShopCartList from '../components/ShopCartList'
import StepsNav from '../components/StepsNav'
import { useMain } from '../hooks/main'
import headerImage from '../assets/images/header6.jpg'

const Checkout = () => {

    const { cart, cartDispatch } =  useMain()
    const [ step, setStep ] = useState(0)
    const [ form, setForm ] = useState()

    const onFinish = (values) => {
        console.log('Success:', values, form)
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    const onFieldsChange = (changedFields, allFields) => {
        console.log('onFieldsChange', changedFields, allFields)
    }

    const onValuesChange = (changedValues, allValues) => {
        console.log('onValuesChange', changedValues, allValues)
    }


    const onChangeQty = ({key, value}) => {
        cartDispatch({
            type: 'change', 
            payload: {
                key: key,
                qty: value,
            }
        })
    }

    const onRemoveProduct = (key) => {
        cartDispatch({ type: 'remove', payload: { key } })
    }

    return (
        <>
            <PageHeader title="Checkout" subtitle="Check your products" image={headerImage}/>

            <div className="container mg-section-top mg-section-bottom">
                <section className="mg-section-top">
                    <h2 className="lemon-title mg-title-section">Checkout</h2>
                    <Steps className="mg-section-bottom"
                        current={step}
                        items={[
                            {
                                title: 'Shopping cart',
                                description: 'Checking your shopping cart',
                            },
                            {
                                title: 'Enter customer info',
                                description: 'Fill up every field'
                            },
                            {
                                title: 'Finish',
                                description: 'Finishing the order'
                            },
                        ]}
                    />

                    {
                        step === 0 && (
                        <>
                            <ShopCartList
                                items={cart.items}
                                onChangeQty={onChangeQty}
                                onRemoveProduct={onRemoveProduct}
                                />

                            <StepsNav step={step} setStep={setStep} hasItems={!!cart.items.length} next="Next" />
                        </>
                        )
                    }

                    {
                        step === 1 && (
                        <>
                            <Form
                                form={form}
                                name="basic"
                                labelCol={{ span: 8,}}
                                wrapperCol={{ span: 16, }}
                                style={{ maxWidth: 600, }}
                                initialValues={{ remember: true, }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                onFieldsChange={onFieldsChange}
                                onValuesChange={onValuesChange}
                                autoComplete="off"
                                >
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your username!',
                                            whitespace: true,
                                        },
                                        {
                                            validator: (_, value) =>
                                              value.length > 3 ? Promise.resolve() : Promise.reject(new Error('Should be more than 3 chars')),
                                        },
                                    ]}
                                    >
                                    <Input />
                                </Form.Item>

                                <Form.Item wrapperCol={{ offset: 8, span: 16,}}>
                                    <Button className="lemon-btn-b" shape="round" size="large" type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>

                            <StepsNav step={step} setStep={setStep} hasItems={!!cart.items.length} next="Complete" />
                        </>
                        )
                    }

                    {
                        step === 2 && (
                            <Result
                                status="success"
                                title="Successfully finishing the order"
                                subTitle="Order number: 0171 Your order will takes 30-50 minutes, please wait."
                                extra={[
                                <Button className="lemon-type-a" size="large" shape="round" type="primary" key="ok">
                                    Finish
                                </Button>,
                                ]}
                            />
                        )
                    }
                </section>
            </div>
        </>
    )
}

export default Checkout
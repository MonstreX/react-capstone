import { useState } from 'react'
import { Steps, Result, Space, Button, Checkbox, Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ShopCartList from '../components/ShopCartList'
import StepsNav from '../components/StepsNav'
import { useMain } from '../hooks/main'
import headerImage from '../assets/images/header6.jpg'

const Checkout = ({initialStep = 0}) => {

    const navigate = useNavigate()

    const { cart, cartDispatch } =  useMain()
    const [ step, setStep ] = useState(initialStep)
    const [ form, setForm ] = useState()

    const onFinish = (values) => {
        console.log('Success:', values, form)
        setStep(2)
        cartDispatch({type: 'clear'})
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
        cartDispatch({ 
            type: 'remove', 
            payload: { key } 
        })
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
                            <div className="lemon-form">
                                <Form
                                    size="large"
                                    name="basic"
                                    layout="vertical"
                                    //labelCol={{ span: 8,}}
                                    //wrapperCol={{ span: 16, }}
                                    initialValues={{ remember: true, }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    onFieldsChange={onFieldsChange}
                                    onValuesChange={onValuesChange}
                                    autoComplete="off"
                                    >
                                    <div className="lemon-form-inner">
                                        <Form.Item
                                            label="Your name"
                                            name="name"
                                            rules={[
                                                {
                                                    required: true,
                                                    min: 3,
                                                    message: 'Please input your usernam!',
                                                    whitespace: true,
                                                },
                                                {
                                                    type: 'string',
                                                    min: 3,
                                                    message: 'Should be more than 3 chars',
                                                },
                                            ]}
                                            >
                                            <Input />
                                        </Form.Item>

                                        <Form.Item
                                            label="E-Mail address"
                                            name="email"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your email address',
                                                },
                                                {
                                                    type: 'email',
                                                    message: 'Should be email address',
                                                },
                                            ]}
                                            >
                                            <Input />
                                        </Form.Item>

                                        <Form.Item
                                            label="Your phone number"
                                            name="phone"
                                            rules={[
                                                {
                                                    required: true,
                                                    min: 7,
                                                    message: "Wrong phone format!",
                                                    whitespace: false,
                                                },
                                            ]}
                                            >
                                            <Input type="phone" />
                                        </Form.Item>
                                    </div>
                                    <Form.Item>
                                        <StepsNav
                                            step={step}
                                            setStep={setStep}
                                            hasItems={!!cart.items.length}
                                            next="Complete"
                                        />
                                    </Form.Item>
                                </Form>
                            </div>


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
                                <Button 
                                    className="lemon-type-a" 
                                    size="large" 
                                    shape="round" 
                                    type="primary" 
                                    key="ok"
                                    onClick={() => navigate("/", {replace: true})}
                                    >
                                    Go Home
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
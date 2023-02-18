import { useState } from 'react'
import { Steps, Result, Space, Button, Checkbox, Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ShopCartList from '../components/ShopCartList'
import StepsNav from '../components/StepsNav'
import { useMain } from '../hooks/main'
import headerImage from '../assets/images/header6.jpg'
import CheckoutForm from '../forms/CheckoutForm'

const Checkout = ({initialStep = 0}) => {

    const navigate = useNavigate()

    const { cart, cartDispatch } =  useMain()
    const [ step, setStep ] = useState(initialStep)

    //const isFormValid = () => !form.getFieldsError().some(({ errors }) => errors.length)

    const onFinish = (values) => {
        setStep(2)
        cartDispatch({type: 'clear'})
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
            <PageHeader title="Checkout" subtitle="Complete Your Order" image={headerImage}/>

            <div className="container mg-section-top mg-section-bottom">
                <section className="mg-section-top">
                    <h2 className="lemon-title mg-title-section">Order Completion</h2>
                    <Steps className="mg-section-bottom"
                        current={step}
                        items={[
                            {
                                title: 'Shopping cart',
                                description: 'Review Your Order and Add/Remove Items',
                            },
                            {
                                title: 'Enter customer info',
                                description: 'Provide Your Contact and Delivery Information'
                            },
                            {
                                title: 'Finish',
                                description: 'Confirm Your Order and delivery'
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
                            <div className="lemon-form">
                                <CheckoutForm {...{onFinish, step, setStep, cart}} />
                            </div>
                        )
                    }

                    {
                        step === 2 && (
                            <Result
                                status="success"
                                title="Your order is confirmed!"
                                subTitle="We have received your order and it will be prepared and delivered to you shortly. You will receive a confirmation email with your order details and estimated delivery time. If you have any questions or concerns, please do not hesitate to contact us. We hope you enjoy your meal!"
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
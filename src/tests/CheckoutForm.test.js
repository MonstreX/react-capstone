import { act, cleanup, screen, render, fireEvent, waitFor } from '@testing-library/react'

import CheckoutForm from '../forms/CheckoutForm'

describe('CheckoutForm', () => {

    afterEach(cleanup)

    globalThis.ASYNC_VALIDATOR_NO_WARNING = 1

    test('renders Fields test', async () => {

        const step = 1
        const setStep = () => {}
        const onFinish = () => {}
        const cart = {items: [{ key: 9, title: "Sheet-Pan Curry Pork", price: 18.99, qty: 1 }]}

        render (<CheckoutForm {...{onFinish, step, setStep, cart}} />)

        const linkElement1 = screen.getByText('Your name')
        const linkElement2 = screen.getByText('E-Mail address')
        const linkElement3 = screen.getByText('Your phone number')
        const linkElement4 = screen.getByText('Shipping Address')

        expect(linkElement1).toBeInTheDocument()
        expect(linkElement2).toBeInTheDocument()
        expect(linkElement3).toBeInTheDocument()
        expect(linkElement4).toBeInTheDocument()

    })

    test('sets Fields values and Success submit test', async () => {

        const step = 1
        const setStep  = jest.fn()
        const onFinish  = jest.fn()
        const cart = {items: [{ key: 9, title: "Sheet-Pan Curry Pork", price: 18.99, qty: 1 }]}

        render (<CheckoutForm {...{onFinish, step, setStep, cart}} />)

        const inputName = screen.getByLabelText('Your name')
        const inputEmail = screen.getByLabelText('E-Mail address')
        const inputPhone = screen.getByLabelText('Your phone number')
        const inputAddress = screen.getByLabelText('Shipping Address')

        const inputSumbit = screen.getByTestId('submit-checkout')

        await act(() => {
            fireEvent.change(inputName, { target: { value: 'Peter Havkee' } })
            fireEvent.blur(inputName)

            fireEvent.change(inputEmail, { target: { value: 'mail@mail.com' } })
            fireEvent.blur(inputEmail)

            fireEvent.change(inputPhone, { target: { value: '8 700 54416 35' } })
            fireEvent.blur(inputPhone)

            fireEvent.change(inputAddress, { target: { value: '1500, Elm street, 123' } })
            fireEvent.blur(inputAddress)

            fireEvent.click(inputSumbit)
        })

        await waitFor(() => {
            expect(inputName.value).toBe('Peter Havkee')
            expect(inputEmail.value).toBe('mail@mail.com')
            expect(inputPhone.value).toBe('8 700 54416 35')
            expect(inputAddress.value).toBe('1500, Elm street, 123')
        })

        await waitFor(() => {
            expect(onFinish).toHaveBeenCalledWith({
                name: 'Peter Havkee',
                email: 'mail@mail.com',
                phone: '8 700 54416 35',
                address: '1500, Elm street, 123',
            })
        })
    })

    test('sets invalid Fields values and Error submit test', async () => {

        const step = 1
        const setStep  = jest.fn()
        const onFinish  = jest.fn()
        const onFinishFailed = jest.fn()
        const cart = {items: [{ key: 9, title: "Sheet-Pan Curry Pork", price: 18.99, qty: 1 }]}

        render (<CheckoutForm {...{onFinish, onFinishFailed, step, setStep, cart}} />)

        const inputName = screen.getByLabelText('Your name')
        const inputEmail = screen.getByLabelText('E-Mail address')
        const inputPhone = screen.getByLabelText('Your phone number')
        const inputAddress = screen.getByLabelText('Shipping Address')

        const inputSumbit = screen.getByTestId('submit-checkout')

        await act(() => {
            fireEvent.change(inputName, { target: { value: 'Pe' } })
            fireEvent.blur(inputName)

            fireEvent.change(inputEmail, { target: { value: 'mail' } })
            fireEvent.blur(inputEmail)

            fireEvent.change(inputPhone, { target: { value: '8000' } })
            fireEvent.blur(inputPhone)

            fireEvent.change(inputAddress, { target: { value: ' ' } })
            fireEvent.blur(inputAddress)

            fireEvent.click(inputSumbit)
        })

        await waitFor(() => {
            const errorName = screen.getByText(/Too short or empty. Please input your username!/i)
            const errorEmail = screen.getByText(/Should be email address/i)
            const errorPhone = screen.getByText(/Wrong phone format!/i)
            const errorAddress = screen.getByText(/Please input your shipping address!/i)

            expect(errorName).toBeInTheDocument()
            expect(errorEmail).toBeInTheDocument()
            expect(errorPhone).toBeInTheDocument()
            expect(errorAddress).toBeInTheDocument()
        })

        await waitFor(() => {
            expect(onFinishFailed).toHaveBeenCalled()
        })

    })

})


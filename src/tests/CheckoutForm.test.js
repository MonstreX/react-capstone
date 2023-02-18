import { act, cleanup, screen, render, fireEvent, waitFor } from '@testing-library/react'

import CheckoutForm from '../forms/CheckoutForm'

describe('CheckoutForm', () => {

  afterEach(cleanup)

  test('renders Checkout Form', async () => {

    const step = 1
    const setStep = () => {}
    const onFinish = () => {}
    const cart = {items: [{ key: 9, title: "Sheet-Pan Curry Pork", price: 18.99, qty: 1 }]}

    render (<CheckoutForm {...{onFinish, step, setStep, cart}} />)

    const linkElement1 = screen.getByText(/Your name/i)
    const linkElement2 = screen.getByText(/E-Mail address/i)
    const linkElement3 = screen.getByText(/Your phone number/i)
    const linkElement4 = screen.getByText(/Shipping Address/i)

    const nameInput = screen.getByTestId('checkout_name')

    await act(() => {
      fireEvent.change(nameInput, { target: { value: 'Peter Havkee' } })
      fireEvent.blur(nameInput)
    })

    await waitFor(() => {
       expect(nameInput.value).toBe('Peter Havkee')
    })

    expect(linkElement1).toBeInTheDocument()
    expect(linkElement2).toBeInTheDocument()
    expect(linkElement3).toBeInTheDocument()
    expect(linkElement4).toBeInTheDocument()

  })

})


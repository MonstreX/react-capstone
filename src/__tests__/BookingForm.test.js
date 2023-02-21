import { act, cleanup, screen, render, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import dayjs from 'dayjs'
import { fetchAPI, submitAPI } from '../api'

import BookingForm from '../forms/BookingForm'

describe('Booking Form', () => {

    afterEach(cleanup)

    globalThis.ASYNC_VALIDATOR_NO_WARNING = 1

    test('Meta FetchAPI test', async () => {

        const times = fetchAPI(new Date())
        expect(times.length).toBeGreaterThan(1);

    })

    test('Meta SumbitAPI test', async () => {

        const result = submitAPI({
            name: 'Peter Havkee',
            email: 'mail@mail.com',
            phone: '8 700 54416 35',
            date: dayjs('2025-01-21'),
            time: "21:21",
            persons: 3,
            occasion: "Others",
            comment: "Comment text",
        })

        expect(result).toBeTruthy()

    })

    test('renders Booking Form Fields test', async () => {

        const step = 0
        const setStep = jest.fn()
        const onFinish = jest.fn()
        const onFinishFailed = jest.fn()

        render (<BookingForm {...{onFinish, onFinishFailed, step, setStep}} />)

        const inputName = screen.getByLabelText('Your name')
        const inputEmail = screen.getByLabelText('E-Mail address')
        const inputPhone = screen.getByLabelText('Your phone number')

        const inputDate = screen.getByLabelText('Reservation date')
        const inputTime = screen.getByLabelText('Reservation time')
        const inputPerson = screen.getByLabelText('How many persons')
        const inputOccasion = screen.getByLabelText('Reservation occasion')
        const inputComment = screen.getByLabelText('Your comment')

        const inputSubmit = screen.getByTestId('submit-booking')

        await waitFor(() => {
            expect(inputName).toBeInTheDocument()
            expect(inputEmail).toBeInTheDocument()
            expect(inputPhone).toBeInTheDocument()

            expect(inputDate).toBeInTheDocument()
            expect(inputTime).toBeInTheDocument()
            expect(inputPerson).toBeInTheDocument()
            expect(inputOccasion).toBeInTheDocument()
            expect(inputComment).toBeInTheDocument()

            expect(inputSubmit).toBeInTheDocument()
            expect(inputSubmit).toHaveAttribute('disabled')
        })
    })

    test('success fill Booking Form Fields test', async () => {

        const onFinish = jest.fn()
        const onFinishFailed = jest.fn()

        const { queryAllByText, getByText, container } = render (
                <BookingForm {...{onFinish, onFinishFailed, timesList: ['21:21', '23:23']}} />
            )

        const inputName = screen.getByLabelText('Your name')
        const inputEmail = screen.getByLabelText('E-Mail address')
        const inputPhone = screen.getByLabelText('Your phone number')

        const inputDate = screen.getByLabelText('Reservation date')
        const inputTime = screen.getByLabelText('Reservation time')
        const inputPersons = screen.getByLabelText('How many persons')
        const inputOccasion = screen.getByLabelText('Reservation occasion')
        const inputComment = screen.getByLabelText('Your comment')

        await act(async () => {
            fireEvent.change(inputName, { target: { value: 'Peter Havkee' } })
            fireEvent.blur(inputName)

            fireEvent.change(inputEmail, { target: { value: 'mail@mail.com' } })
            fireEvent.blur(inputEmail)

            fireEvent.change(inputPhone, { target: { value: '8 700 54416 35' } })
            fireEvent.blur(inputPhone)

            fireEvent.mouseDown(inputDate)
            fireEvent.change(inputDate, { target: { value: '2025-01-21' } })
            fireEvent.click(document.querySelector('.ant-picker-cell-selected'))

            fireEvent.mouseDown(inputTime)
            fireEvent.mouseDown(inputPersons)
            fireEvent.mouseDown(inputOccasion)

            fireEvent.change(inputComment, { target: { value: 'Comment text' } })
            fireEvent.blur(inputComment)
        })

        await act(async () => {
            const time = queryAllByText('21:21')[1]
            userEvent.click(time, undefined, { skipPointerEventsCheck: true })
        })

        await act(async () => {
            const persons = queryAllByText('3 persons')[0]
            userEvent.click(persons, undefined, { skipPointerEventsCheck: true })
        })

        await act(async () => {
            const occasion = queryAllByText('Others')[0]
            userEvent.click(occasion, undefined, { skipPointerEventsCheck: true })
        })

        await act(async () => {
            fireEvent.click(screen.getByTestId('submit-booking'))
        })

        await waitFor(() => {
            expect(onFinish).toHaveBeenCalledWith({
                name: 'Peter Havkee',
                email: 'mail@mail.com',
                phone: '8 700 54416 35',
                date: dayjs('2025-01-21'),
                time: "21:21",
                persons: 3,
                occasion: "Others",
                comment: "Comment text",
            })
        })
    })

    test('fail fill Booking Form Fields test', async () => {

        const onFinish = jest.fn()
        const onFinishFailed = jest.fn()

        const { queryAllByText, getByText, container } = render (
                <BookingForm {...{onFinish, onFinishFailed, timesList: ['21:21', '23:23']}} />
            )

        const inputName = screen.getByLabelText('Your name')
        const inputEmail = screen.getByLabelText('E-Mail address')
        const inputPhone = screen.getByLabelText('Your phone number')

        const inputDate = screen.getByLabelText('Reservation date')
        const inputTime = screen.getByLabelText('Reservation time')
        const inputPersons = screen.getByLabelText('How many persons')
        const inputOccasion = screen.getByLabelText('Reservation occasion')
        const inputComment = screen.getByLabelText('Your comment')

        await act(async () => {
            fireEvent.change(inputName, { target: { value: 'Peter Havkee' } })
            fireEvent.blur(inputName)
        })

        await act(async () => {
            fireEvent.click(screen.getByTestId('submit-booking'))
        })

        await waitFor(() => {
            expect(onFinishFailed).toHaveBeenCalledTimes(1)

            const errorEmail = screen.getByText(/Please input your email address/i)
            const errorPhone = screen.getByText(/Wrong phone format!/i)
            const errorDate = screen.getByText(/Please select a date!/i)
            const errorTime = screen.getByText(/Please select time!/i)
            const errorPersons = screen.getByText(/Please select number of persons!/i)

            expect(errorEmail).toBeInTheDocument()
            expect(errorPhone).toBeInTheDocument()
            expect(errorDate).toBeInTheDocument()
            expect(errorTime).toBeInTheDocument()
            expect(errorPersons).toBeInTheDocument()
        })
    })

})


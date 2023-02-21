import { screen, render } from '@testing-library/react'

import About from '../pages/About'

test('renders Discover the Taste of Tradition test', () => {
    render(<About />)
    const linkElement = screen.getByText(/Discover the Taste of Tradition/i)
    expect(linkElement).toBeInTheDocument()
})

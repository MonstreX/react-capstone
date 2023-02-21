import { screen, render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import { MainProvider } from '../hooks/main'
import Menu from '../pages/Menu'

test('renders Menu page test', () => {

    const history = createMemoryHistory({ initialEntries: ['/menu']})

    render(
        <MainProvider>
        <Router location={history.location} navigator={history}>
            <Menu/>
        </Router>
        </MainProvider>
    )

    const linkElement1 = screen.getByText('Savor the Flavors')
    const linkElement2 = screen.getByText('Tomato Bruschetta')
    const linkElement3 = screen.getByText('Chocolate Cake')

    expect(linkElement1).toBeInTheDocument()
    expect(linkElement2).toBeInTheDocument()
    expect(linkElement3).toBeInTheDocument()

})

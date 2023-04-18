import { render, screen } from '@testing-library/react'
import { Header } from '../components'

describe('Testing Header component:', () => {
  let linkElement

  beforeEach(() => {
    render(<Header />)
    linkElement = screen.getByText(/React Test App/i)
  })

  test('It should have a title - "React Test App"', () => {
    expect(linkElement).toBeInTheDocument()
  })

  test('It should have a container with className - "header-wrapper"', () => {
    expect(linkElement.parentNode).toHaveClass('header-wrapper')
  })
})

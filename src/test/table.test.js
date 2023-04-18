import { render, screen } from '@testing-library/react'
import { Table } from '../components'

describe('Testing Table component:', () => {
  beforeEach(() => {
    render(<Table head={['ColumnA', 'ColumnB']} data={[]} />)
  })

  test('It should have a Table Header - "ColumnA"', () => {
    const linkElement = screen.getByText(/ColumnA/i)
    expect(linkElement).toBeInTheDocument()
  })

  test('It should have a Table Header - "ColumnB"', () => {
    const linkElement = screen.getByText(/ColumnB/i)
    expect(linkElement).toBeInTheDocument()
  })

  test('It should have a message when empty - "No data found"', () => {
    const linkElement = screen.getByText(/No data found/i)
    expect(linkElement).toBeInTheDocument()
  })
})

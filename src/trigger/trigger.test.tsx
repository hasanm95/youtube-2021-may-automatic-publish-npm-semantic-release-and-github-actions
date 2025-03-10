import { screen, render } from 'test-utils'
import userEvent from '@testing-library/user-event'
import Trigger from '.'

describe('<ActionSheet.Trigger/>', () => {
  it('should render correctly with children', () => {
    render(<Trigger>click here</Trigger>)
    const trigger = screen.getByText('click here')
    expect(trigger).toBeInTheDocument()
  })
  it('should call `handleToggle` method on click', async () => {
    const handleClickMock = jest.fn()
    render(<Trigger onClick={handleClickMock}>click here</Trigger>)
    const trigger = screen.getByText('click here')
    await userEvent.click(trigger)
    expect(handleClickMock).toHaveBeenCalled()
  })
})

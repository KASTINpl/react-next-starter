import renderWithRedux from 'tests/utils/renderWithRedux'
import { UserSessionStatus } from './UserSessionStatus'

describe('<UserSessionStatus />', () => {
  test('show the right status', async () => {
    const { getByText } = renderWithRedux(<UserSessionStatus />, {
      initialState: { session: { status: 'LOGGED_IN' } },
    })
    expect(getByText('LOGGED_IN')).not.toBeNull()
  })
})

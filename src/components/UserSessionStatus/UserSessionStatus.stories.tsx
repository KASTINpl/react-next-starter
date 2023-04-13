import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'store/AppStoreProvider'
import { setSessionStatus } from 'store/session'
import AppStoreDecorator from 'storybook/decorators/AppStoreDecorator'
import AppThemeDecorator from 'storybook/decorators/AppThemeDecorator'
import UserSessionStatus from '.'
import { Meta } from '@storybook/react'

export default {
  title: 'Components/UserSessionStatus',
  component: UserSessionStatus,
  decorators: [AppStoreDecorator, AppThemeDecorator],
} as Meta<typeof UserSessionStatus>

export const Basic: FC = () => {
  const dispatch: AppDispatch = useDispatch()
  useEffect(() => {
    dispatch(setSessionStatus('LOGGED_IN'))
  }, [])
  return <UserSessionStatus />
}

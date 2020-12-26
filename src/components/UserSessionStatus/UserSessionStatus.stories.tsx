import { Meta } from '@storybook/react/types-6-0'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'store/AppStoreProvider'
import { setSessionStatus } from 'store/session'
import AppThemeDecorator from 'storybook/decorators/AppThemeDecorator'
import UserSessionStatus from '.'
import AppStoreDecorator from 'storybook/decorators/AppStoreDecorator'

export default {
  title: 'Components/UserSessionStatus',
  component: UserSessionStatus,
  decorators: [AppStoreDecorator, AppThemeDecorator],
} as Meta

export const basic: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  useEffect(() => {
    dispatch(setSessionStatus('LOGGED_IN'))
  }, [])
  return <UserSessionStatus />
}

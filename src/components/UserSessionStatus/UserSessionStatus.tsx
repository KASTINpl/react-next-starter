import { Alert } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { getSessionStatus } from 'store/session'

export const UserSessionStatus: React.FC = () => {
  const status = useSelector(getSessionStatus)
  return <Alert security="success">{status}</Alert>
}

import UserSessionStatus from 'components/UserSessionStatus'
import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'store/AppStoreProvider'
import { setSessionStatus } from 'store/session'
import BaseLayout from 'ui/BaseLayout'

const Home: FC = () => {
  const dispatch: AppDispatch = useDispatch()
  useEffect(() => {
    dispatch(setSessionStatus('LOGGED_IN'))
  }, [])
  return (
    <BaseLayout title="react next starter">
      react-next-starter
      <UserSessionStatus />
    </BaseLayout>
  )
}

export default Home

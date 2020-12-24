import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'store/AppStoreProvider'
import { setSessionStatus } from 'store/session'
import BaseLayout from 'ui/BaseLayout'

const Home: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  useEffect(() => {
    dispatch(setSessionStatus('LOGGED_IN'))
  }, [])
  return <BaseLayout title="react next demo">react-next-demo</BaseLayout>
}

export default Home

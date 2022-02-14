import React from 'react'
import { useLocation } from 'react-router-dom'
import { get } from 'lodash'
import Page404 from '../pages/404'
import Page500 from '../pages/500'

const ErrorHandler: React.FC = ({ children }) => {
  const location = useLocation()

  switch (get(location.state, 'errorStatusCode')) {
    case 404:
      return <Page404 />
    case 500:
      return <Page500 />
    default:
      return <>{children}</>
  }
}

export default ErrorHandler

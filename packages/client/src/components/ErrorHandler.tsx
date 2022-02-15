import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { get } from 'lodash'
import Page500 from '../pages/500'

const ErrorHandler: React.FC = ({ children }) => {
  const location = useLocation()

  switch (get(location.state, 'errorStatusCode')) {
    case 404:
      return <Navigate replace to="/404" />
    case 500:
      return <Page500 />
    default:
      return <>{children}</>
  }
}

export default ErrorHandler

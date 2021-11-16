import React from 'react'
import { Link } from 'react-router-dom'

const Complete = () => {
  return (
    <>
      <h4>Komplettera din felanmälan med text, bild och film</h4>
      <Link to="/sammanfattning">Nästa</Link>
    </>
  )
}

export default Complete

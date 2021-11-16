import React from 'react'
import { Link } from 'react-router-dom'

const Item = () => {
  return (
    <>
      <h4>Välj ett Object du vill felanmäla</h4>
      <Link to="/komplettera">Nästa</Link>
    </>
  )
}

export default Item

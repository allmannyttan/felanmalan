import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Room from './pages/Room'
import Item from './pages/Item'
import Objects from './pages/Objects'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/room" element={<Room />} />
        <Route path="/item" element={<Item />} />
        <Route path="/objects" element={<Objects />} />
      </Routes>
    </Router>
  )
}

export default App
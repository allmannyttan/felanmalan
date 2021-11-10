import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Room from './pages/Room'
import Item from './pages/Item'
import Objects from './pages/Objects'
import Theme from './Theme'
import Place from './pages/Place'
const App = () => {
  return (
    <Theme>
      <Router>
        <Routes>
          <Route path="/place" element={<Place />} />
          <Route path="/room" element={<Room />} />
          <Route path="/item" element={<Item />} />
          <Route path="/objects" element={<Objects />} />
        </Routes>
      </Router>
    </Theme>
  )
}

export default App

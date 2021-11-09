import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Room from './pages/Room'
import Item from './pages/Item'
import Objects from './pages/Objects'
import Theme from './Theme'
import ProgressBar from './components/ProgressBar'
import { Provider as JotaiProvider } from 'jotai'

const App = () => {
  return (
    <Theme>
      <JotaiProvider>
        <ProgressBar />
        <Router>
          <Routes>
            <Route path="/room" element={<Room />} />
            <Route path="/objects" element={<Objects />} />
            <Route path="/item" element={<Item />} />
          </Routes>
        </Router>
      </JotaiProvider>
    </Theme>
  )
}

export default App

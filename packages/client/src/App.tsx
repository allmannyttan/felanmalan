import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Room from './pages/Room'
import Place from './pages/Place'
import Area from './pages/Area'
import Object from './pages/Object'
import Complete from './pages/Complete'
import Summary from './pages/Summary'
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
            <Route path="/plats" element={<Place />} />
            <Route path="/rum" element={<Room />} />
            <Route path="/omrade" element={<Area />} />
            <Route path="/objekt" element={<Object />} />
            <Route path="/komplettera" element={<Complete />} />
            <Route path="/sammanfattning" element={<Summary />} />
          </Routes>
        </Router>
      </JotaiProvider>
    </Theme>
  )
}

export default App

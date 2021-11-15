import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Room from './pages/Room'
import Place from './pages/Place'
import Area from './pages/Area'
import Item from './pages/Item'
import Complete from './pages/Complete'
import Summary from './pages/Summary'
import Theme from './Theme'
import Header from './components/Header'
import ProgressBar from './components/ProgressBar'
import { Provider as JotaiProvider } from 'jotai'
import Layout from './components/Layout'
import Confirmation from './pages/Confirmation'

const App = () => {
  return (
    <Theme>
      <JotaiProvider>
        <Router>
          <Header />
          <Layout>
            <>
              <ProgressBar />
              <Routes>
                <Route path="/plats" element={<Place />} />
                <Route path="/rum" element={<Room />} />
                <Route path="/omrade" element={<Area />} />
                <Route path="/objekt" element={<Item />} />
                <Route path="/komplettera" element={<Complete />} />
                <Route path="/sammanfattning" element={<Summary />} />
                <Route path="/bekraftelse" element={<Confirmation />} />
              </Routes>
            </>
          </Layout>
        </Router>
      </JotaiProvider>
    </Theme>
  )
}

export default App

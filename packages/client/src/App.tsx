import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Room from './pages/Room'
import Place from './pages/Place'
import Area from './pages/Area'
import Item from './pages/Item'
import Complete from './pages/Complete'
import Summary from './pages/Summary'
import Theme from './Theme'
import ProgressBar from './components/ProgressBar'
import { Provider as JotaiProvider } from 'jotai'
import Layout from './components/Layout'
import Confirmation from './pages/Confirmation'
import Start from './pages/Start'
import NotFound from './pages/404'
import ErrorHandler from './components/ErrorHandler'

const App = () => {
  const { pathname } = useLocation()

  const showProgressBar = [
    '/plats',
    '/rum',
    '/omrade',
    '/objekt',
    '/komplettera',
    '/sammanfattning',
  ]
  return (
    <Theme>
      <JotaiProvider>
        <Layout>
          <ErrorHandler>
            {showProgressBar.includes(pathname) && <ProgressBar />}
            <Routes>
              <Route path="/" element={<Start />} />
              <Route path="/plats" element={<Place />} />
              <Route path="/rum" element={<Room />} />
              <Route path="/omrade" element={<Area />} />
              <Route path="/objekt" element={<Item />} />
              <Route path="/komplettera" element={<Complete />} />
              <Route path="/sammanfattning" element={<Summary />} />
              <Route path="/bekraftelse" element={<Confirmation />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate replace to="/404" />} />
            </Routes>
          </ErrorHandler>
        </Layout>
      </JotaiProvider>
    </Theme>
  )
}

export default App

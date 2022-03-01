import { Routes, Route, useLocation } from 'react-router-dom'
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
import ErrorHandler from './components/ErrorHandler'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './pages/ErrorFallback'

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
    <ErrorBoundary FallbackComponent={ErrorFallback}>
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
              </Routes>
            </ErrorHandler>
          </Layout>
        </JotaiProvider>
      </Theme>
    </ErrorBoundary>
  )
}

export default App

import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Room from './pages/Room'
import Place from './pages/Place'
import Area from './pages/Area'
import Item from './pages/Item'
import Complete from './pages/Complete'
import Summary from './pages/Summary'
import Theme from './Theme'
import ProgressBar from './components/ProgressBar'
import { Provider as JotaiProvider, useAtom } from 'jotai'
import Layout from './components/Layout'
import Confirmation from './pages/Confirmation'
import Start from './pages/Start'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './pages/ErrorFallback'
import { initialErrorReportValues, reportAtom } from './utils/atoms'
import NotFoundPage from './pages/404'

const App = () => {
  const { pathname } = useLocation()
  const [, setErrorReport] = useAtom(reportAtom)
  const navigate = useNavigate()

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
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
              setErrorReport(initialErrorReportValues)
              navigate('/', { replace: true })
            }}>
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
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </ErrorBoundary>
        </Layout>
      </JotaiProvider>
    </Theme>
  )
}

export default App

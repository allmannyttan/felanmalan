import express, { Application } from 'express'
import timeout from 'connect-timeout'
import cors from 'cors'
import { routes as apiRoutes } from '@app/routes/api'
import formidable from 'express-formidable'

const app: Application = express()

app.use(express.json())
app.use(formidable())
app.use('/attachments', express.static('attachments'))

app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(cors())

apiRoutes(app)
// FIXME: setup routes for auth
// authRoutes(app)

app.use(timeout('300s'))

export default app

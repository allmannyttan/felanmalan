import { RequestHandler } from 'express'
import { authorize } from '@app/helpers/jwt'

export const authMiddleware: RequestHandler = (req, _, next) => {
  // FIXME: setup correct authentication
  // Object.assign(req, authorize(req.headers))
  next()
}

export default {
  authMiddleware,
}

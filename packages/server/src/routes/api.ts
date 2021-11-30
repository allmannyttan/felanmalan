import { Application, Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { authMiddleware } from '@app/middleware/auth'
import errorHandler from '@app/middleware/errorHandler'
import { fetchApiInventory, fetchApiRooms } from '@app/services/fastapi'

export const routes = (app: Application) => {
  app.get(
    '/rooms',
    authMiddleware,
    asyncHandler(async (req: Request, res: Response) => {
      const rooms = await fetchApiRooms(req.query.rentalId as string)
      res.send(rooms)
    }),
    errorHandler
  )

  app.get(
    '/inventory',
    authMiddleware,
    asyncHandler(async (req: Request, res: Response) => {
      const inventory = await fetchApiInventory(req.query.roomId as string)
      res.send(inventory)
    }),
    errorHandler
  )
}

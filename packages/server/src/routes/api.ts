import { Application, Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { authMiddleware } from '@app/middleware/auth'
import errorHandler from '@app/middleware/errorHandler'
import { fetchApiInventory, fetchApiRooms } from '@app/services/fastapi'
import { Area } from '@app/services/types'

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
    '/area',
    authMiddleware,
    asyncHandler(async (req: Request, res: Response) => {
      const inventory = await fetchApiInventory(req.query.roomId as string)
      const reduced = inventory.reduce((filtered: Area[], option) => {
        if (filtered.findIndex((object) => object.name === option.class.name)) {
          filtered.push({
            name: option.class.name,
            description: '',
            code: option.class.code,
          })
        }
        return filtered
      }, [])

      res.send(reduced)
    }),
    errorHandler
  )

  app.get(
    '/inventory',
    authMiddleware,
    asyncHandler(async (req: Request, res: Response) => {
      const inventory = await fetchApiInventory(req.query.roomId as string)
      const classCode = req.query.area

      const filteredData = inventory.filter((a) => a.class.code === classCode)

      res.send(filteredData)
    }),
    errorHandler
  )
}

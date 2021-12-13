import { Application, Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { authMiddleware } from '@app/middleware/auth'
import errorHandler from '@app/middleware/errorHandler'
import {
  fetchApiInventory,
  fetchApiRooms,
  postCase,
} from '@app/services/fastapi'
import { ErrorReportType } from '../../../../types'

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

  app.post(
    '/case',
    authMiddleware,
    asyncHandler(async (req: Request, res: Response) => {
      // const getImage = (obj: File | File[] | undefined): File | undefined => {
      //   if (!obj) {
      //     return undefined
      //   }
      //   if (obj && 'path' in obj) {
      //     return obj
      //   }
      //   return (<File[]>obj)[0]
      // }

      const data: ErrorReportType = {
        place: req.fields?.place as string,
        room: req.fields?.room as string,
        area: req.fields?.area as string,
        object: req.fields?.object as string,
        complete: {
          image: req.files?.image,
          video: req.files?.video,
        },
      }

      const errorReport = await postCase(data)
      if ('message' in errorReport) {
        res.status(400)
      }
      res.send(errorReport)
    }),
    errorHandler
  )
}

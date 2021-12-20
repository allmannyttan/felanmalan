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

  /**
   * TODO:
   * then go through this list http://www.fastapi.se/lists/classlist/Class_Equipment_Class_01.xml
   * and map over so that we show set data for each category.
   * names such as vattenberedare might be called something else?
   */

  app.get(
    '/area',
    authMiddleware,
    asyncHandler(async (req: Request, res: Response) => {
      const inventory = await fetchApiInventory(req.query.roomId as string)
      const reduced = inventory.reduce((filtered: Area[], option) => {
        if (!filtered.find((obj) => obj.code === option.class.code)) {
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
      const classCode = req.query.inventoryCode

      const filteredData = inventory.filter((a) => a.class.code === classCode)

      res.send(filteredData)
    }),
    errorHandler
  )

  app.post(
    '/case',
    authMiddleware,
    asyncHandler(async (req: Request, res: Response) => {
      const data: ErrorReportType = {
        place: req.fields?.place as string,
        room: req.fields?.room as string,
        area: req.fields?.area as string,
        object: req.fields?.object as string,
        complete: {
          text: req.fields?.text as string,
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

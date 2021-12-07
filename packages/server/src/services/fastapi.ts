import { client } from '@app/adapters/api'
import { Room, Inventory } from './types'
import { ErrorReportType, ApiExceptionType } from '../../../../types'
import { setAttachmentInDb } from '../adapters/api/databaseHelper'
import { Attachment } from '@app/adapters/api/types'
import fs from 'fs'

export const fetchApiRooms = async (rentalId: string): Promise<Array<Room>> => {
  const rooms: Array<Room> = await client.get({
    url: `rooms/?rentalId=${rentalId}`,
  })
  return rooms
}

export const fetchApiInventory = async (
  roomId: string
): Promise<Array<Inventory>> => {
  const inventory: Array<Inventory> = await client.get({
    url: `inventory/?roomId=${roomId}`,
  })
  return inventory
}

export const postCase = async (
  data: ErrorReportType
): Promise<ErrorReportType | ApiExceptionType> => {
  console.log('data', data)
  try {
    // console.log(1)
    // const errorReport: ErrorReportType = await client.post({
    //   url: `cases`,
    //   data,
    // })
    // console.log(2)
    // const { id } = errorReport
    const id = '12345'
    // TODO: store attachments and keep reference in DB
    if (id && (data.complete.image || data.complete.video)) {
      console.log('img', data.complete.image)
      const attachment: Attachment = {
        error_report_id: id,
        photo: data.complete.image,
        video: data.complete.video,
      }

      /*
      app.post('/receive', function(request, respond) {
          var body = '';
          filePath = __dirname + '/public/data.txt';
          request.on('data', function(data) {
              body += data;
          });

          request.on('end', function (){
              fs.appendFile(filePath, body, function() {
                  respond.end();
              });
          });
      });
      */

      /*

// Get the file contents before the append operation
console.log("\nFile Contents of file before append:",
  fs.readFileSync("example_file.txt", "utf8"));
  
fs.appendFile("example_file.txt", "World", (err) => {
  if (err) {
    console.log(err);
  }
  else {
    // Get the file contents after the append operation
    console.log("\nFile Contents of file after append:",
      fs.readFileSync("example_file.txt", "utf8"));
  }
});
*/

      // write content of data.complete.image to file system
      // set attachment.photo to relative file path
      const filePath = __dirname + '/hej.xyz'
      //fs.writeFile(filePath, attachment.photo, 'base64', (err) => {})
      const insertToDb = await setAttachmentInDb(attachment)
      console.log('insert?', insertToDb)
    }
    return <ApiExceptionType>{ message: 'hej' }
  } catch (e: any) {
    console.log('error', e.response.statusText)
    return <ApiExceptionType>{ message: e.response.statusText }
  }
}

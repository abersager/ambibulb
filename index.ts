import { getColorsFromScreen } from './screen-color'

require('dotenv').config()
const {
  cloudLogin,
  getDeviceInfo,
  listDevicesByType,
  loginDevice,
} = require('tp-link-tapo-connect')

// const tapoServerPort = process.env.TAPO_SERVER_PORT

// async function tapoLogin () {
//   return await `curl -i -X POST -H 'Content-Type: application/json' --data '{ "password": "potatoes" }' http://localhost:${tapoServerPort}/login`
// }

// async function setColor (sessionId, colors) {
//   await `curl -i -X GET -H 'Authorization: Bearer <your session ID>' 'http://localhost:8000/actions/l530/set_color/color=ff0000?device=test'`
// }

// async function setColor (sessionId, colors) {
//   await `curl -i -X GET -H 'Authorization: Bearer <your session ID>' 'http://localhost:8000/actions/l530/set_color/color=ff0000?device=test'`
// }

async function run() {
  // const cloudToken = await cloudLogin(process.env.TAPO_EMAIL, process.env.TAPO_PASSWORD)
  // console.log(cloudToken)
  // const devices = await listDevicesByType(cloudToken, 'SMART.TAPOBULB')
  // console.log(devices)
  // const deviceToken = await loginDevice(process.env.TAPO_EMAIL, process.env.TAPO_PASSWORD, devices[0])
  // console.log('device token', deviceToken)
  // const getDeviceInfoResponse = await getDeviceInfo(deviceToken)
  // console.log(getDeviceInfoResponse)
  console.log(await getColorsFromScreen())
}

run()

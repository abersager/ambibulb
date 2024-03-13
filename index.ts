import { getColorsFromScreen } from './screen-color'
import { findDevices } from './tapo'

require('dotenv').config()

async function run() {
  const devices = await findDevices(
    process.env.TAPO_EMAIL,
    process.env.TAPO_PASSWORD,
  )

  if (!devices.length) {
    console.log('No devices found.')
    process.exit(1)
  }

  setColors(devices)
}

async function setColors(devices: TapoActiveDevice[]) {
  const screenIndex = parseInt(process.env.SCREEN_INDEX || '0', 10)
  const colors = await getColorsFromScreen(screenIndex, devices.length)
  console.log('colors', colors)

  devices.forEach(async (device, index) => {
    try {
      await device.setColour(colors[index])
    } catch (e) {
      console.log('Error setting color', e)
    }
  })

  setTimeout(() => {
    setColors(devices)
  }, 200)
}

run()

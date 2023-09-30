const screenshot = require('screenshot-desktop')
const ColorThief = require('color-extr-thief')
const Jimp = require('jimp')
const fs = require('fs')
const getPixels = require('get-pixels')

async function run () {
  // displays: [{ id, name }, { id, name }]
  const displays = await screenshot.listDisplays()

  // img: Buffer of screenshot of the last display
  const imageBuffer = await screenshot({ screen: displays[displays.length - 1].id })
  const image = await Jimp.read(imageBuffer)
  const imageBase64 = await image.getBase64Async(Jimp.MIME_PNG)

  const palette = await ColorThief.getPalette(imageBase64, 2)

  console.log(palette)
}

run()

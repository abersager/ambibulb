import screenshot from 'screenshot-desktop'
import ColorThief from 'color-extr-thief'
import Jimp from 'jimp'

export async function getColorsFromScreen(screenIndex: number = 0) {
  // displays: [{ id, name }, { id, name }]
  const displays = await screenshot.listDisplays()

  // img: Buffer of screenshot of the last display
  const imageBuffer = await screenshot({
    screen: displays[screenIndex].id,
  })
  const image = await Jimp.read(imageBuffer)
  const imageBase64 = await image.getBase64Async(Jimp.MIME_PNG)

  return ColorThief.getPalette(imageBase64, 2)
}

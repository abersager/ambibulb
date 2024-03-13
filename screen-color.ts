import screenshot from 'screenshot-desktop'
import ColorThief from 'color-extr-thief'
import Jimp from 'jimp'
import { ColorTranslator } from 'colortranslator'

export async function getColorsFromScreen(
  screenIndex: number = 0,
  numColors: number = 2
): Promise<string[]> {
  // displays: [{ id, name }, { id, name }]
  const displays = await screenshot.listDisplays()

  // img: Buffer of screenshot of the last display
  const imageBuffer = await screenshot({
    screen: displays[screenIndex].id,
  })
  const image = await Jimp.read(imageBuffer)
  const imageBase64 = await image.getBase64Async(Jimp.MIME_PNG)

  const palette = await ColorThief.getPalette(imageBase64, Math.max(numColors, 2))

  if (!palette) return []

  return palette.map(rgbArrayToHexString)
}

function rgbArrayToHexString(rgb: number[]): string {
  return ColorTranslator.toHEX({ R: rgb[0], G: rgb[1], B: rgb[2], A: 1.0 })
}

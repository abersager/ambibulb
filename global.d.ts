declare module 'color-extr-thief' {
  export function getColor(img: string, quality?: number): Promise<number[]>
  export function getPalette(
    img: string,
    colorCount: number = 10,
    quality: number = 10,
  ): Promise<number[][] | null>
}

namespace NodeJS {
  interface ProcessEnv {
    TAPO_EMAIL: string
    TAPO_PASSWORD: string
    TAPO_DEVICES: string
  }
}

declare type TapoActiveDevice = {
  turnOn: () => Promise<void>
  turnOff: () => Promise<void>
  setBrightness: (brightnessLevel?: number) => Promise<void>
  setColour: (colour?: string) => Promise<void>
  getDeviceInfo: () => Promise<TapoDeviceInfo>
  getEnergyUsage: () => Promise<TapoDeviceInfo>
}

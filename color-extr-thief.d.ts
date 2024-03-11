declare module 'color-extr-thief' {
  export function getColor(img: string, quality?: number): Promise<number[]>
  export function getPalette(
    img: string,
    colorCount: number = 10,
    quality: number = 10,
  ): Promise<number[][] | null>
}

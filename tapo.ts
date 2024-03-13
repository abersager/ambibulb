import { cloudLogin, loginDevice } from 'tp-link-tapo-connect'

export async function findDevices(
  email: string,
  password: string,
): Promise<TapoActiveDevice[]> {
  const cloudApi = await cloudLogin(email, password)

  const devicesInfo = await cloudApi.listDevicesByType('SMART.TAPOBULB')
  console.log(devicesInfo)

  const devices = await Promise.all(
    devicesInfo.map(async (deviceInfo) => {
      try {
        return (await loginDevice(
          email,
          password,
          deviceInfo,
        )) as TapoActiveDevice
      } catch (e) {
        console.log(
          `Couldn't log in to device ${deviceInfo.deviceName} ${deviceInfo.deviceMac} ("${deviceInfo.alias}")`,
        )
      }
    }),
  )

  return devices.filter((x) => Boolean(x)) as TapoActiveDevice[]
}

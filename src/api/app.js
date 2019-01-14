import { resolve, reject } from "q";

export const getAppName = () => {
  return new Promise((resolve, reject) => {
    const err = null
    setTimeout(() => {
      if (!err) resolve({ code: 200, info: { shuju5: '狮子座' } })
      else reject(err)
    })
  })
}

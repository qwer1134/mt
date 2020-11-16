import axios from 'axios'
// 返回 response.data
export default function ajax (url, data = {}, method = 'GET') {
  return new Promise((resolve, reject) => {
    let pormise
    if (method === 'GET') {
      let dataStr = ''
      Object.keys(data).forEach((key) => {
        dataStr = dataStr + `${key}=${data[key]}&`
      })
      if (dataStr !== '') {
        let dataSub = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + dataSub
      }
      pormise = axios.get(url)
    }
    if (method === 'POST') {
      pormise = axios.post(url, data)
    }
    pormise.then((res) => {
      resolve(res.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

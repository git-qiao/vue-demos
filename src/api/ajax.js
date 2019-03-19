/*
* 返回一个promise对象，但是返回的值是response.data
* */
import axios from 'axios'

export default function ajax (url, data = {}, type = 'GET') {
  return new Promise((resolve, reject) => {
    let promise
    if (type === 'GET') {
      promise = axios.get(url, {params: data})
    } else if (type === 'POST') {
      promise = axios.post(url, data)
    }
    promise
      .then(response => {
        resolve(response.data) // 这里就是Ajax在外面将会直接处理的数据response.data
      })
      .catch(err => {
        reject(err)
        // 统一处理请求出错
        // alert('请求出错了' + err.message)
      })
  })
}

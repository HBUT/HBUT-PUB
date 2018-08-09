/**
 * Creator: 鸡爪<413807584@qq.com>
 * Date: 2018/7/24
 * Time: 16:12
 */
import axios from 'axios'
import {REQUEST_URL} from '../config'

export default class Ajax {
  constructor () {
    this.instance = axios.create({
      baseURL: REQUEST_URL
    })
  }

  setToken (token) {
    this.instance.defaults.headers.common['Authorization'] = token
  }

  post (data) {
    return this.instance.post(data.url, data.data || {}, data.config || {})
  }

  get (data) {
    return this.instance.get(data.url, {params: data.data || {}, ...(data.config || {})})
  }
}

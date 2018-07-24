/**
 * Creator: 鸡爪<413807584@qq.com>
 * Date: 2018/7/24
 * Time: 16:12
 */
export default class Ajax {
  constructor(data) {
    this.url = data.url
    this.desc = data.desc
    this.vueResource = data.resource
    this.data = data.data
    this.config = data.config || {}
  }
  post() {
    return this.vueResource.post(this.url, this.data, this.config)
  }

  get() {
    this.config.params = this.data
    return this.vueResource.get(this.url, this.config)
  }
}

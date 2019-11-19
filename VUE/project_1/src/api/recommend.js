import jsonp from '../common/js/jsonp'
import {commonParams, options} from './config'

export function getRecommend() {
  const url = '111'  //此处的url可以自行修改，本文是qq音乐链接

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

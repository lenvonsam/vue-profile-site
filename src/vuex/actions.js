import axios from 'axios'
import Qs from 'qs'

function serializeformQuery (requestParams) {
  let query = ''
  for (let param in requestParams) {
    if (param !== undefined && param !== '') {
      query += param + '=' + requestParams[param] + '&'
    }
  }
  if (query !== '') {
    query = query.substring(0, query.length - 1)
  }
  return query
}

let BASICURL = 'http://wechat.xingyun361.com/quasarserver'
// let BASICURL = 'http://192.168.20.149:8080/quasarserver'
let PROXYURL = BASICURL + '/common/proxy'

const actions = {
  httpRequest ({commit}, {reqUrl, params, type}) {
    let param = serializeformQuery(params)
    let reqBody = {
      reqUrl: reqUrl,
      params: param,
      type: type,
      charset: 'utf-8'
    }
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: PROXYURL,
        params: reqBody,
        paramsSerializer: (params) => {
          return Qs.stringify(params, {arrayFormat: 'brackets'})
        }
      }).then(resp => {
        if (resp.status === 200) {
          resolve(resp.data)
        } else {
          console.log('error')
          console.log(resp)
        }
      }).catch(err => {
        console.log('error')
        console.log(err)
      })
    })
  },
  postSamsite ({commit}, {reqUrl, params}) {
    console.log(`reqUrl:>>>${reqUrl}`)
    commit('changeKeyVal', {key: 'spinnerShow', val: true})
    return new Promise((resolve, reject) => {
      axios.post(`${BASICURL}/samsite/${reqUrl}`, params).then((resp) => {
        commit('changeKeyVal', {key: 'spinnerShow', val: false})
        if (resp.status === 200) {
          resolve(resp.data)
        } else {
          reject(resp.statusText)
        }
      }, (err) => {
        commit('changeKeyVal', {key: 'spinnerShow', val: false})
        reject(err)
      })
    })
  },
  validateNull ({commit}, obj) {
    let result = true
    return new Promise((resolve, reject) => {
      let keys = Object.keys(obj)
      for (let k in keys) {
        let val = obj[keys[k]]
        if (val === undefined || val.trim() === '') {
          result = false
          break
        }
      }
      resolve(result)
    })
  },
  configKeyVal ({commit}, {key, val}) {
    commit('changeKeyVal', {key, val})
  }
}

export default actions

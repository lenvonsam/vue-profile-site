import axios from 'axios'

// function serializeformQuery (requestParams) {
//   let query = ''
//   for (let param in requestParams) {
//     if (param !== undefined && param !== '') {
//       query += param + '=' + requestParams[param] + '&'
//     }
//   }
//   if (query !== '') {
//     query = query.substring(0, query.length - 1)
//   }
//   return query
// }

let BASICURL = 'http://wechat.unionb2b.com/quasarserver/samsite'

const actions = {
  httpPost ({commit}, {reqUrl, params}) {
    console.log(`reqUrl:>>>${reqUrl}`)
    commit('changeKeyVal', {key: 'spinnerShow', val: true})
    return new Promise((resolve, reject) => {
      axios.post(`${BASICURL}/${reqUrl}`, params).then((resp) => {
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

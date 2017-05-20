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
    return new Promise((resolve, reject) => {
      axios.post(`${BASICURL}/${reqUrl}`, params).then(resp => {
        if (resp.status === 200) {
          resolve(resp.data)
        } else {
          reject(resp.statusText)
        }
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default actions

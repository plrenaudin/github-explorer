import axios from 'axios'
import common from './common'

const search = (query) => {
  return axios.get(common.rootApiURL + '/search/repositories', {
    params: {
      q: query
    }
  })
}

const details = (owner, name) => {
  return axios.get(common.rootApiURL + '/repos/' + owner + '/' + name)
}

export default {
  search,
  details
}
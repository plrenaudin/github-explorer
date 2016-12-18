import axios from 'axios'
import common from './common'

const search =  (query) => {
  return axios.get(common.rootApiURL + '/search/repositories', {
    params: {
      q: query
    }
  })
}

export default {
  search
}
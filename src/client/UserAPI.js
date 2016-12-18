import axios from 'axios'
import common from './common'

const search = (query) => {
  return axios.get(common.rootApiURL + '/search/users', {
    params: {
      q: query
    }
  })
}

const events = (username) => axios.get(common.rootApiURL + '/users/' + username + '/events')

const details = (username) => axios.get(common.rootApiURL + '/users/' + username)

export default {
  search,
  events,
  details
}
import common from '../../client/common.js'
import ErrorUtils from '../../utils/ErrorUtils.js'

export default {
  props: ['query'],
  data() {
    return  {
      results: {},
      githubURL: common.websiteURL,
      loading: false
    }
  },
  watch: {
    query(val) {
      this.search()
    }
  },
  methods: {
    search() {
      let me = this
      if(!me.query) {
        me.reset()
        return
      }
      me.loading = true
      // Search Repositories
      this.apiSearch(me.query).then(function (response) {
        me.loading = false
        me.results = response.data
      })
      .catch(function (error) {
        me.loading = false
        ErrorUtils.displayError(me, error)
      })
    },
    reset() {
      this.results = {}
    }
  }
}
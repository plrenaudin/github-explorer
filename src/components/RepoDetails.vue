<template>
  <div class="repoDetails">
    <template v-if="loading">
      <div class="loading">
        <em>Loading...</em>
        <svg class="octicon" aria-hidden="true"><use xlink:href="#gear" /></svg>
      </div>
    </template>
    <template v-else>
      <md-card>
        <md-card-area md-inset>
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">{{details.name}}</div>
              <div class="md-subhead">{{details.description}}</div>
            </md-card-header-text>
            <md-card-media>
              <img :src="details.owner.avatar_url" :alt="details.owner.login">
            </md-card-media>
          </md-card-header>
        </md-card-area>
        <md-card-content>
          <repo-stats :details="details"></repo-stats>
        </md-card-content>
      </md-card>
    </template>
  </div>
</template>

<script>
import RepoAPI from '../client/RepoAPI.js'
import ErrorUtils from '../utils/ErrorUtils.js'
import RepoStats from './subComponents/RepoStats.vue'

export default {
  name: 'repo-details',
  components : {
    'repo-stats': RepoStats
  },
  data () {
    return {
      details: {},
      loading: false
    }
  },
  created () {
    let me = this
    if (me.$route.params.owner && me.$route.params.name) {
      RepoAPI.details(me.$route.params.owner, me.$route.params.name).then(function (response) {
        me.loading = false
        me.details = response.data
      })
      .catch(function (error) {
        ErrorUtils.displayError(me, error)
      })
      me.loading = true
    }
  }
}
</script>
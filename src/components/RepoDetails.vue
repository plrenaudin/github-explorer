<template>
  <div class="repoDetails">
    <template v-if="loading">
      <div class="loading">
        <em>Loading...</em>
        <i class="fa fa-spinner" aria-hidden="true"></i>
      </div>
    </template>
    <template v-else>
      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{details.name}}</div>
            <div class="md-subhead">{{details.description}}</div>
          </md-card-header-text>
          <ul>
            <li>{{details.open_issues_count}}<svg class="octicon" aria-hidden="true"><use xlink:href="#bug" /></svg></li>
            <li>{{details.forks_count}}<svg class="octicon" aria-hidden="true"><use xlink:href="#repo-forked" /></svg></li>
            <li>{{details.stargazers_count}}<svg class="octicon" aria-hidden="true"><use xlink:href="#star" /></svg></li>
            <li>{{details.subscribers_count}}<svg class="octicon" aria-hidden="true"><use xlink:href="#eye" /></svg></li>
          </ul>
          <a :href="details.html_url">See on Github</a>
          <md-card-media>
            <img :src="details.owner.avatar_url" :alt="details.owner.login">
          </md-card-media>
        </md-card-header>
      </md-card>
    </template>
  </div>
</template>

<script>
import RepoAPI from '../client/RepoAPI.js'

export default {
  name: 'repo-details',
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
        console.error(error)
      })
      me.loading = true
    }
  }
}
</script>
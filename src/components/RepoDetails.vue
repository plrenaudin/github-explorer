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
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{details.name}}</div>
            <div class="md-subhead">{{details.description}}</div>
          </md-card-header-text>
          <md-card-media>
            <img :src="details.owner.avatar_url" :alt="details.owner.login">
          </md-card-media>
        </md-card-header>
        <md-card-content>
          <div class="statistics">
            <div class="md-caption">
              {{details.language}}
            </div>
            <md-button @click.stop :href="details.html_url + '/network'">
              <svg class="octicon" aria-hidden="true"><use xlink:href="#repo-forked" /></svg>
              {{details.forks}}
            </md-button>
            <md-button @click.stop :href="details.html_url + '/watchers'">
              <svg class="octicon" aria-hidden="true"><use xlink:href="#eye" /></svg>
              {{details.subscribers_count}}
            </md-button>
            <md-button @click.stop :href="details.html_url + '/stargazers'">
              <svg class="octicon" aria-hidden="true"><use xlink:href="#star" /></svg>
              {{details.stargazers_count}}
            </md-button>
            <md-button @click.stop :href="details.html_url + '/issues'">
              <svg class="octicon" aria-hidden="true"><use xlink:href="#issue-opened" /></svg>

              {{details.open_issues_count}}
            </md-button>
          </div>
          <a :href="details.html_url"><svg class="octicon" aria-hidden="true"><use xlink:href="#mark-github" /></svg>See on Github</a>
        </md-card-content>
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
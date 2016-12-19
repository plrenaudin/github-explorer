<template>
  <div class="userDetails">
    <template v-if="loading">
      <div class="loading">
        <em>Loading...</em>
        <svg class="octicon" aria-hidden="true"><use xlink:href="#gear" /></svg>
      </div>
    </template>
    <template v-else>
      <md-card class="userInfo">
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{details.name}}</div>
            <div class="md-subhead">
              <md-tooltip md-direction="left">User</md-tooltip>
              <svg class="octicon" aria-hidden="true"><use xlink:href="#person" /></svg>
              {{details.login}}
            </div>
            <div class="md-subhead" v-if="details.location">
              <md-tooltip md-direction="left">Location</md-tooltip>
              <svg class="octicon" aria-hidden="true"><use xlink:href="#location" /></svg>
              {{details.location}}
            </div>
            <div class="md-subhead">
              <md-tooltip md-direction="left">Joined</md-tooltip>
              <svg class="octicon" aria-hidden="true"><use xlink:href="#clock" /></svg>
              {{formatDateToCalendar(details.created_at)}}
            </div>
            <div class="md-subhead" v-if="details.company">
              <md-tooltip md-direction="left">Company</md-tooltip>
              <svg class="octicon" aria-hidden="true"><use xlink:href="#organization" /></svg>
              {{details.company}}
            </div>
            <div class="md-subhead" v-if="details.email">
              <md-tooltip md-direction="left">Email</md-tooltip>
              <svg class="octicon" aria-hidden="true"><use xlink:href="#mail" /></svg>
              {{details.email}}
            </div>
            <div class="md-subhead" v-if="details.blog">
              <md-tooltip md-direction="left">Blog</md-tooltip>
              <svg class="octicon" aria-hidden="true"><use xlink:href="#globe" /></svg>
              <a :href="'//' + details.blog">
                {{details.blog}}
              </a>
            </div>
            <div class="md-subhead" v-if="details.bio">
              <md-tooltip md-direction="left">Bio</md-tooltip>
              <svg class="octicon" aria-hidden="true"><use xlink:href="#file" /></svg>
              {{details.bio}}
            </div>
          </md-card-header-text>
          <md-card-media>
            <img :src="details.avatar_url" :alt="details.login">
          </md-card-media>
        </md-card-header>
        <md-card-actions>
          <md-button :href="websiteUrl + '/' + name + '/following'">Following: {{details.following}}</md-button>
          <md-button :href="websiteUrl + '/' + name + '/followers'">Followers: {{details.followers}}</md-button>
        </md-card-actions>
      </md-card>
    </template>
    <user-history :username="name"></user-history>
  </div>
</template>

<script>
import UserAPI from '../client/UserAPI.js'
import UserHistory from './UserHistory.vue'
import common from '../client/common.js'
import DateUtils from '../utils/DateUtils.js'

export default {
  name: 'user-details',
  components: {
    'user-history': UserHistory
  },
  data () {
    return {
      name: '',
      details: {},
      loading: false,
      websiteUrl: common.websiteURL
    }
  },
  methods: {
    formatDateToCalendar(date) {
      return DateUtils.formatDateToCalendar(date)
    }
  },
  created () {
    let me = this
    if (me.$route.params.name) {
      me.name = me.$route.params.name
      UserAPI.details(me.name).then(function (response) {
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
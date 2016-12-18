<template>
  <div class="userHistory">
    <div class="md-headline">
      <svg version="1.1"  viewBox="0 0 10 16" class="octicon" aria-hidden="true"><use xlink:href="#history" /></svg>
      History
    </div>
    <template v-if="loading">
      <div class="loading">
        <em>Loading...</em>
        <i class="fa fa-spinner" aria-hidden="true"></i>
      </div>
    </template>
    <template v-else-if="!eventList.length">
      <div class="noResults">
        <em>No results</em>
      </div>
    </template>
    <template v-else>
      <md-list class="custom-list md-doulbe-line">
        <md-list-item v-for="item in eventList">

          <div class="md-list-text-container">
            <span>{{item.type}}</span>
            <span>{{item.created_at}}</span>
          </div>

        </md-list-item>
      </md-list>
    </template>
  </div>
</template>

<script>
import UserAPI from '../client/UserAPI.js'
import common from '../client/common.js'

export default {
  name: 'user-history',
  props: ['username'],
  data () {
    return {
      name: '',
      eventList: [],
      loading: false,
      websiteUrl: common.websiteURL
    }
  },
  created () {
    let me = this
    if (me.$route.params.name) {
      me.name = me.$route.params.name
      UserAPI.events(me.name).then(function (response) {
        me.loading = false
        me.eventList = response.data
      })
      .catch(function (error) {
        console.error(error)
      })
      me.loading = true
    }
  }
}
</script>
<template>
  <div class="userHistory">
    <div class="md-headline">
      <svg class="octicon" aria-hidden="true"><use xlink:href="#history" /></svg>
      History
    </div>
    <template v-if="loading">
      <div class="loading">
        <em>Loading...</em>
        <svg class="octicon" aria-hidden="true"><use xlink:href="#gear" /></svg>
      </div>
    </template>
    <template v-else-if="!eventList.length">
      <div class="noResults">
        <em>No results</em>
      </div>
    </template>
    <template v-else>
      <md-list class="custom-list md-double-line">
        <template v-for="item in eventList">
          <div :is="getComponentForEvent(item.type)" :event="item"></div>
        </template>
      </md-list>
    </template>
  </div>
</template>

<script>
import UserAPI from '../client/UserAPI.js'
import common from '../client/common.js'
import ErrorUtils from '../utils/ErrorUtils.js'

import defaulteventviewer from './historyItems/DefaultEventViewer.vue'
import watchevent from './historyItems/WatchEvent.vue'
import pullrequestevent from './historyItems/PullRequestEvent.vue'
import pushevent from './historyItems/PushEvent.vue'
import createevent from './historyItems/CreateEvent.vue'
import forkevent from './historyItems/ForkEvent.vue'
import releaseevent from './historyItems/ReleaseEvent.vue'
import deleteevent from './historyItems/DeleteEvent.vue'
import issuecommentevent from './historyItems/IssueCommentEvent.vue'
import commitcommentevent from './historyItems/CommitCommentEvent.vue'
import issuesevent from './historyItems/IssuesEvent.vue'
import memberevent from './historyItems/MemberEvent.vue'
import pullrequestreviewcommentevent from './historyItems/PullRequestReviewCommentEvent.vue'

let rootContext = this
export default {
  name: 'user-history',
  props: ['username'],
  components: {
    pullrequestreviewcommentevent,
    defaulteventviewer,
    watchevent,
    pullrequestevent,
    pushevent,
    issuecommentevent,
    commitcommentevent,
    createevent,
    forkevent,
    releaseevent,
    issuesevent,
    memberevent,
    deleteevent
  },
  data () {
    return {
      name: '',
      eventList: [],
      loading: false,
      websiteUrl: common.websiteURL
    }
  },
  methods: {
    getComponentForEvent(event) {
      let compName = event.toLowerCase()
      return rootContext.default.components.hasOwnProperty(compName) ? compName : 'defaulteventviewer'
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
        ErrorUtils.displayError(me, error)
      })
      me.loading = true
    }
  }
}
</script>
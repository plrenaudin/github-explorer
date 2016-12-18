<template>
  <div class="results">
    <template v-if="loading">
      <div class="loading">
        <em>Loading...</em>
        <i class="fa fa-spinner" aria-hidden="true"></i>
      </div>
    </template>
    <template v-else-if="!results.items || results.items.length < 1">
      <div class="noResults">
        <em>No results</em>
      </div>
    </template>
    <template v-else>
      <em>{{results.items.length}} of {{results.total_count}} results</em>
      <md-list class="md-dense">
        <md-list-item v-for="item in results.items" @click="details(item.login)">
          <md-avatar>
            <img :src="item.avatar_url" :alt="item.login">
          </md-avatar>
          <span>{{item.login}}</span>
        </md-list-item>
      </md-list>
    </template>
  </div>
</template>

<script>
import UserAPI from '../client/UserAPI.js'
import ResultList from './mixins/ResultList.js'


export default {
  name: 'user-list',
  mixins: [ResultList],
  methods: {
    apiSearch : (query) => UserAPI.search(decodeURIComponent(query)),
    details (username) {
      this.$router.push('/details/user/' + username)
    }
  }

}
</script>
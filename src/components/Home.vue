<template>
  <div class="home">
    <div class="searchBox">
      <div class="field">
          <input v-model="queryInput" @keyup.enter="search" placeholder="Search Repositories or Users"></input>
      </div>
      <div :class="['icon', {focused: queryInput}]">
        <i class="fa fa-search"></i>
      </div>
    </div>
    <div class="resultLists">
      <repo-list ref="repoList" :query="query"></repo-list>
      <user-list ref="userList" :query="query"></user-list>
    </div>
  </div>
</template>

<script>
import RepoList from './RepoList.vue'
import UserList from './UserList.vue'

export default {
  name:'home',

  data() {
    return {
      query: '',
      queryInput: '',
      userResults: {}
    }
  },

  components: {
    'repo-list': RepoList,
    'user-list': UserList
  },

  methods: {
    search() {
      this.query = encodeURIComponent(this.queryInput)
      this.$router.replace('/search/' + this.query )

    },
  },
  mounted() {
    if(this.$route.params.q) {
      this.queryInput = decodeURIComponent(this.$route.params.q)
      this.search()
    }
  }
}
</script>
<template>
  <div class="results">
    <svg class="octicon backheader" aria-hidden="true"><use xlink:href="#repo" /></svg>
    <template v-if="loading">
      <div class="loading">
        <em>Loading...</em>
        <svg class="octicon" aria-hidden="true"><use xlink:href="#gear" /></svg>
      </div>
    </template>
    <template v-else-if="!results.items || results.items.length < 1">
      <div class="noResults">
        <em>No results</em>
      </div>
    </template>
    <template v-else>
      <em>{{results.items.length}} of {{results.total_count}} results</em>
      <md-list class="custom-list md-doulbe-line">
        <md-list-item v-for="item in results.items" @click="details(item.full_name)">
          <md-avatar>
            <img :src="item.owner.avatar_url" :alt="item.full_name">
          </md-avatar>

          <div class="md-list-text-container">
            <span>{{item.full_name}}</span>
            <span>{{descriptionSummary(item.description)}}</span>
          </div>

          <div class="statistics">
            <div class="md-caption">
              {{item.language}}
            </div>
            <md-button @click.stop :href="item.html_url + '/network'">
              <svg class="octicon" aria-hidden="true"><use xlink:href="#repo-forked" /></svg>
              {{item.forks}}
            </md-button>
            <md-button @click.stop :href="item.html_url + '/stargazers'">
              <svg class="octicon" aria-hidden="true"><use xlink:href="#star" /></svg>
              {{item.stargazers_count}}
            </md-button>
            <md-button @click.stop :href="item.html_url + '/issues'">
              <svg class="octicon" aria-hidden="true"><use xlink:href="#issue-opened" /></svg>

              {{item.open_issues_count}}
            </md-button>
          </div>
        </md-list-item>
      </md-list>
    </template>
  </div>
</template>

<script>
import RepoAPI from '../client/RepoAPI.js'
import ResultList from './mixins/ResultList.js'

export default {
  name: 'repo-list',
  mixins: [ResultList],
  methods: {
    descriptionSummary: (text) => (text && text.length > 150) ? text.substr(0, 150-1) + '...' : text,
    apiSearch: (query) => RepoAPI.search(decodeURIComponent(query)),
    details (repoName) {
      this.$router.push('/details/repo/' + repoName)
    }
  }
}
</script>
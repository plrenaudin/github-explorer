<template>
  <div class="statistics" v-if="details">
    <div class="md-caption">
      {{details.language}}
    </div>
    <md-button @click.stop :href="details.html_url + '/network'">
      <svg class="octicon" aria-hidden="true"><use xlink:href="#repo-forked" /></svg>
      {{details.forks}}
    </md-button>
    <md-button @click.stop :href="details.html_url + '/watchers'">
      <svg class="octicon" aria-hidden="true"><use xlink:href="#eye" /></svg>
      {{details.watchers_count}}
    </md-button>
    <md-button @click.stop :href="details.html_url + '/stargazers'">
      <svg class="octicon" aria-hidden="true"><use xlink:href="#star" /></svg>
      {{details.stargazers_count}}
    </md-button>
    <md-button @click.stop :href="details.html_url + '/issues'">
      <svg class="octicon" aria-hidden="true"><use xlink:href="#issue-opened" /></svg>
      {{details.open_issues_count}}
    </md-button>
    <md-button @click.stop :href="details.html_url">
      <svg class="octicon" aria-hidden="true"><use xlink:href="#mark-github" /></svg>
    </md-button>
  </div>
</template>

<script>
export default {
  name: 'repo-stats',
  props: ['details']
}
</script>
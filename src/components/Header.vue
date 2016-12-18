<template>
  <div class="header">
    <md-toolbar class="md-dense">
      <md-button class="md-icon-button" @click="goHome">
        <md-icon>home</md-icon>
      </md-button>
      <h2 class="md-title" style="flex: 1">Github Explorer</h2>
    </md-toolbar>
  </div>
</template>
<script>
export default {
  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>
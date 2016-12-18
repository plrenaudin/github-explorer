<template>
  <div id="app">
    <div class="hidden" v-html="octicons"></div>
    <navigation></navigation>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import octicons from '../node_modules/octicons/build/sprite.octicons.svg'
export default {
  name: 'app',
  data() {
    return {
      octicons: octicons
    }
  },
  components: {
    'navigation': Header
  }
}
</script>

<style lang="sass">
  @import './assets/styles.scss';
  @import '../node_modules/vue-material/dist/vue-material.css';
  @import '../node_modules/octicons/build/octicons.css';
</style>
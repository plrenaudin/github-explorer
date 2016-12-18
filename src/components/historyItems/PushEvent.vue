<template>
  <default-event-viewer :event="event">
    <div slot="picto">
      <svg class="octicon" aria-hidden="true"><use xlink:href="#repo-push" /></svg>
    </div>
    <div slot="title">
      Pushed {{event.payload.commits.length}} commits
    </div>
  </default-event-viewer>
</template>

<script>
import DefaultEventViewer from './DefaultEventViewer.vue'
export default {
  name: 'push-event',
  components: {
    'default-event-viewer' : DefaultEventViewer
  },
  props: ['event']
}
</script>
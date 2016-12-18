<template>
  <default-event-viewer :event="event">
    <div slot="picto">
      <svg class="octicon" aria-hidden="true"><use xlink:href="#eye" /></svg>
    </div>
  </default-event-viewer>
</template>

<script>
import DefaultEventViewer from './DefaultEventViewer.vue'
export default {
  components: {
    'default-event-viewer' : DefaultEventViewer
  },
  name: 'watch-event',
  props: ['event']
}
</script>
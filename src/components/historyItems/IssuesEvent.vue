<template>
  <default-event-viewer :event="event">
    <div slot="picto">
      <svg class="octicon" aria-hidden="true"><use xlink:href="#issue-opened" /></svg>
    </div>
    <div slot="title">
      Opened this issue <a :href="event.payload.issue.html_url">#{{event.payload.issue.number}}</a>
    </div>
  </default-event-viewer>
</template>

<script>
import DefaultEventViewer from './DefaultEventViewer.vue'
export default {
  name: 'issues-event',
  components: {
    'default-event-viewer' : DefaultEventViewer
  },
  props: ['event']
}
</script>
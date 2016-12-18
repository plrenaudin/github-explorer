<template>
  <default-event-viewer :event="event">
    <div slot="picto">
      <svg class="octicon" aria-hidden="true"><use xlink:href="#git-pull-request" /></svg>
    </div>
    <div slot="title">
      Opened this Pull Request <a :href="event.payload.pull_request.html_url">#{{event.payload.pull_request.number}}</a>
    </div>
  </default-event-viewer>
</template>

<script>
import DefaultEventViewer from './DefaultEventViewer.vue'
export default {
  name: 'pull-request-event',
  components: {
    'default-event-viewer' : DefaultEventViewer
  },
  props: ['event']
}
</script>
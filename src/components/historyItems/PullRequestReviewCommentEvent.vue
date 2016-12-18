<template>
  <default-event-viewer :event="event">
    <div slot="picto">
      <svg class="octicon" aria-hidden="true"><use xlink:href="#comment-discussion" /></svg>
    </div>
    <div slot="title">
      Commented on this Pull Request <a :href="event.payload.comment.html_url">#{{event.payload.pull_request.number}}</a>
    </div>
  </default-event-viewer>
</template>

<script>
import DefaultEventViewer from './DefaultEventViewer.vue'
export default {
  name: 'pull-request-review-comment-event',
  components: {
    'default-event-viewer' : DefaultEventViewer
  },
  props: ['event']
}
</script>
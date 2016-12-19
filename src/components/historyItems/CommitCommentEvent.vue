<template>
  <default-event-viewer :event="event">
    <div slot="picto">
      <svg class="octicon" aria-hidden="true"><use xlink:href="#git-commit" /></svg>
    </div>
    <div slot="title">
      Commented on commit <a :href="event.payload.comment.html_url">{{formatCommitHash(event.payload.comment.commit_id)}}...</a>
    </div>
  </default-event-viewer>
</template>

<script>
import DefaultEventViewer from './DefaultEventViewer.vue'
import Formatter from '../../utils/Formatter.js'
export default {
  name: 'commit-comment-event',
  components: {
    'default-event-viewer' : DefaultEventViewer
  },
  props: ['event'],
  methods: {
    formatCommitHash (hash) {
      return Formatter.formatGitCommitHash(hash)
    }
  }
}
</script>
<template>
  <default-event-viewer :event="event">
    <div slot="picto">
      <svg class="octicon" aria-hidden="true"><use xlink:href="#trashcan" /></svg>
    </div>
    <div slot="title">
      Deleted the {{event.payload.ref_type}} {{event.payload.ref}}</a>
    </div>
  </default-event-viewer>
</template>

<script>
import DefaultEventViewer from './DefaultEventViewer.vue'
export default {
  name: 'delete-event',
  components: {
    'default-event-viewer' : DefaultEventViewer
  },
  props: ['event']
}
</script>
<template>
  <default-event-viewer :event="event">
    <div slot="picto">
      <svg class="octicon" aria-hidden="true"><use v-bind="{'xlink:href' : '#' + computedModel.picto}" /></svg>
    </div>
    <div slot="title">
      {{computedModel.title}}
    </div>
  </default-event-viewer>
</template>

<script>
import DefaultEventViewer from './DefaultEventViewer.vue'
export default {
  name: 'create-event',
  components: {
    'default-event-viewer' : DefaultEventViewer
  },
  props: ['event'],
  computed: {
    computedModel() {
      switch(this.event.payload.ref_type) {
        case 'repository':
          return {
            picto:'repo',
            title: 'Created the repository'
          }
        case 'branch':
          return {
            picto:'git-branch',
            title: `Created the branch '${this.event.payload.ref}'`
          }
        case 'tag':
          return {
            picto:'tag',
            title: `Created the tag '${this.event.payload.ref}'`
          }
        default:
          return {
            picto:'plus',
            title: 'Creation Event'
          }
      }
    }
  }
}
</script>
<template>
  <default-event-viewer :event="event">
    <div slot="picto">
      <svg class="octicon" aria-hidden="true"><use v-bind="{'xlink:href' : '#' + computedModel.picto}" /></svg>
    </div>
    <div slot="title">
      {{computedModel.title}}
      <a v-if="computedModel.ref" :href="computedModel.location">{{computedModel.ref}}</a>
    </div>
  </default-event-viewer>
</template>

<script>
import DefaultEventViewer from './DefaultEventViewer.vue'
import common from '../../client/common.js'
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
            title: 'Created the branch',
            ref: this.event.payload.ref,
            location: common.websiteURL + '/' + this.event.repo.name + '/tree/' + this.event.payload.ref
          }
        case 'tag':
          return {
            picto:'tag',
            title: 'Created the tag',
            ref: this.event.payload.ref,
            location: common.websiteURL + '/' + this.event.repo.name + '/tree/' + this.event.payload.ref
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
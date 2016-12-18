<template>
  <md-list-item class="eventTemplate">
    <div class="icon">
      <slot name="picto">
        <svg class="octicon" aria-hidden="true"><use xlink:href="#mark-github" /></svg>
      </slot>
    </div>
    <div class="md-list-text-container">
      <slot name="title">
        <span>{{event.type}}</span>
      </slot>
      <slot name="description">
        <span>{{formatDateToCalendar(event.created_at)}}</span>
      </slot>
    </div>
    <div class="target">
      {{event.repo.name}}
    </div>
  </md-list-item>
</template>

<script>
import DateUtils from '../../utils/DateUtils.js'
export default {
  name: 'default-event',
  props: ['event'],
  methods: {
    formatDateToCalendar(date) {
      return DateUtils.formatDateToCalendar(date)
    }
  }
}
</script>
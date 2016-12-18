import moment from 'moment'

const formatDateToCalendar = (date) => moment(date).calendar()

export default {
  formatDateToCalendar
}
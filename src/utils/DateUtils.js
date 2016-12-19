import moment from 'moment'
moment.locale('en-GB')
const formatDateToCalendar = (date) => moment(date).calendar()

export default {
  formatDateToCalendar
}
import moment from 'moment'

function dateToString (date) {
  if (date) {
    return moment(date).format('DD/MM/YY')
  }
  return ''
}

export { dateToString }

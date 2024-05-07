import moment from 'moment'

/**
 * 时间格式化
 * @param {number} time
 * @param {string} format
 */
export function timeFormat(time, format) {
  return moment(time).format(format)
}

//获取时间戳
export function getTimeStamp(time) {
  return moment(time).valueOf()
}

//获取某一天所在的周的开始时间与结束时间
export function getWeek(dayTime) {
  const start = moment(dayTime).startOf('week').format('YYYY-MM-DD HH:mm:ss')
  const end = moment(dayTime).endOf('week').format('YYYY-MM-DD HH:mm:ss')
  return [start, end]
}

//获取某一天所在月的开始时间与结束时间
export function getMonth(monthTime) {
  const start = moment(monthTime).startOf('month').format('YYYY-MM-DD HH:mm:ss')
  const end = moment(monthTime).endOf('month').format('YYYY-MM-DD HH:mm:ss')
  return [start, end]
}

// 获取某一天所在年的开始时间与结束时间
export function getYear(yearTime) {
  const start = moment(yearTime).startOf('year').format('YYYY-MM-DD HH:mm:ss')
  const end = moment(yearTime).endOf('year').format('YYYY-MM-DD HH:mm:ss')
  return [start, end]
}

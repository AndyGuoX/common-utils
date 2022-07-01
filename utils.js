/**
 * @description 获取url参数
 * @param name:String 不传则返回全部参数
 * @returns {{}|null|*}
 */
function getQueryString (name) {
  const result = {}
  const search = decodeURIComponent(window.location.search)
  const params = search.substr(1).split('&')
  for (const param of params) {
    const paramArr = param.split('=')
    result[paramArr[0]] = paramArr[1]
  }

  if (!name) {
    return result
  } else {
    if (typeof name !== 'string') return null
    return result[name]
  }
}
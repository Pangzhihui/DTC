/**
 * 取得cookie,如果没有找到则返回null
 * @memberof  util
 * @param { String } name cookie名称
 * @author
 * @example
 *   dtc.util.cookieGet('cookieName')
 */

function cookieGet(name) {
  var nameEQ = name + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) == ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

export default cookieGet

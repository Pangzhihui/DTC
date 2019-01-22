/*-------------array----------------*/
const arrayConcat = require('./array/arrayConcat')
const arrShuffle = require('./array/arrShuffle')
const max = require('./array/max')
const min = require('./array/min')
const unique = require('./array/unique')

/*-------------commmon----------------*/
const urlArgs = require('./common/urlArgs')
const moment = require('./common/moment')

/*-------------object----------------*/
const eq = require('./object/eq')
const isEqual = require('./object/isEqual')
const cloneDeep = require('./object/cloneDeep')
const merge = require('./object/merge')
const merge2 = require('./object/merge2')

/*-------------storage----------------*/
const cookieDel = require('./storage/cookieDel')
const cookieGet = require('./storage/cookieGet')
const cookieSet = require('./storage/cookieSet')

/*-------------string----------------*/
const excerpt = require('./string/excerpt')
const trim =  require('./string/trim')
const uId = require('./string/uId')

/*-------------typeCheck----------------*/
const isArray = require('./typeCheck/isArray')
const isEmptyObject = require('./typeCheck/isEmptyObject')
const isFunction = require('./typeCheck/isFunction')
const isNaN = require('./typeCheck/isNaN')
const isNull = require('./typeCheck/isNull')
const isNumber = require('./typeCheck/isNumber')
const isObject = require('./typeCheck/isObject')
module.exports = {
  /*--array--*/
  arrayConcat,
  arrShuffle,
  max,
  min,
  unique,
  /*--common--*/
  urlArgs,
  moment,
  /*--object--*/
  eq,
  isEqual,
  cloneDeep,
  merge,
  merge2,
  /*--storage--*/
  cookieDel,
  cookieGet,
  cookieSet,
  /*--string--*/
  excerpt,
  trim,
  uId,
  /*--typeCheck--*/
  isArray,
  isEmptyObject,
  isFunction,
  isNaN,
  isNull,
  isNumber,
  isObject
}

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eachLimit;

var _eachOfLimit = require('./internal/eachOfLimit');

var _eachOfLimit2 = _interopRequireDefault(_eachOfLimit);

var _withoutIndex = require('./internal/withoutIndex');

var _withoutIndex2 = _interopRequireDefault(_withoutIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The same as [`each`]{@link module:Collections.each} but runs a maximum of `limit` async operations at a time.
 *
 * @name eachLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.each]{@link module:Collections.each}
 * @alias forEachLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {Function} iteratee - A function to apply to each item in `coll`. The
 * iteratee is passed a `callback(err)` which must be called once it has
 * completed. If no error has occurred, the `callback` should be run without
 * arguments or with an explicit `null` argument. The array index is not passed
 * to the iteratee. Invoked with (item, callback). If you need the index, use
 * `eachOfLimit`.
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 */
function eachLimit(coll, limit, iteratee, callback) {
  (0, _eachOfLimit2.default)(limit)(coll, (0, _withoutIndex2.default)(iteratee), callback);
}
module.exports = exports['default'];
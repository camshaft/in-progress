/**
 * Module dependencies
 */

var Emitter = require('emitter');

/**
 * Keep track of the open operations
 */

var loading = 0;

/**
 * Start an operation
 *
 * @param {Any} startData
 * @return {Function}
 * @api public
 */

exports = module.exports = function(startData) {
  var used = false;

  if (loading === 0) exports.emit('loading');

  loading++;

  exports.emit('update', loading);

  return function(endData) {
    // If this has already been called don't decrement
    if (used) return;

    used = true;
    loading--;
    exports.emit('update', loading, startData, endData);
    if (loading === 0) exports.emit('idle');
  };
};

/**
 * Mixin an emitter api
 */

Emitter(exports);

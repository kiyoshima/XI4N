/*
 * Library
 * For use only when you want to require('xi4n'); and not rely on ./bin/xi4n
 */

var path = require('path');

exports.insim = require('./lib/insim');
exports.client = require('./lib/client');
exports.clientmanager = require('./lib/clientmanager');
exports.logger = require('./lib/logger');
exports.strings = require('./lib/strings');
exports.product = require('./lib/product');

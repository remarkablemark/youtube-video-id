'use strict';

/**
 * Module dependencies.
 */
var assert = require('assert');
var getYouTubeVideoId = require('../index');

/**
 * Main tests.
 */
describe('getYouTubeVideoId()', function() {

    it('errors if the first parameter is not a string', function() {
        [undefined, null, {}, [], 1, Function].forEach(function(parameter) {
            assert.throws(function() {
                getYouTubeVideoId(parameter);
            }, TypeError);
        });
    });

    it('returns passed string if not a url', function() {
        assert.equal(getYouTubeVideoId('X3pTXG9a1oQ'), 'X3pTXG9a1oQ');
    });

});

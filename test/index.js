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

    it('returns passed string if not a url', function() {
        assert.equal(getYouTubeVideoId('X3pTXG9a1oQ'), 'X3pTXG9a1oQ');
    });

});

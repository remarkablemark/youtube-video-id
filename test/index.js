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

    it('gets the ID from long url', function() {
        assert.equal(
            getYouTubeVideoId('https://www.youtube.com/watch?v=X3pTXG9a1oQ'),
            'X3pTXG9a1oQ'
        );

        assert.equal(
            getYouTubeVideoId('http://www.youtube.com/watch?v=F2uovvU-dLA'),
            'F2uovvU-dLA'
        );

        assert.equal(
            getYouTubeVideoId('https://www.youtube.com/watch?v=k66bOHX8MnY&feature=youtu.be'),
            'k66bOHX8MnY'
        );
    });

    it('gets the ID from short url', function() {
        assert.equal(
            getYouTubeVideoId('https://youtu.be/Yqnk_kjVPH4'),
            'Yqnk_kjVPH4'
        );

        assert.equal(
            getYouTubeVideoId('http://youtu.be/Uf1Vk3RnXsk'),
            'Uf1Vk3RnXsk'
        );

        assert.equal(
            getYouTubeVideoId('https://youtu.be/JdxSm9-NllI?t=1s'),
            'JdxSm9-NllI'
        );
    });

    it('returns passed string if not a url', function() {
        assert.equal(
            getYouTubeVideoId('qwgNv27366Q'),
            'qwgNv27366Q'
        );
    });

});

'use strict';

/**
 * YouTube url regex.
 *
 * Pattern: https://www.youtube.com/watch?v=<ID>
 */
var regex = /youtube\.com\/watch\?v=([a-zA-Z0-9]+)/;

/**
 * Get the YouTube video ID from a url or string.
 *
 * @param  {String} string - The url or string.
 * @return {String}        - The video ID.
 */
function getYouTubeVideoId(string) {
    if (typeof string !== 'string') {
        throw new TypeError('First argument must be a string.');
    }
    var match = string.match(regex);
    if (match && match.length) {
        return match[1];
    }
    return string;
}

module.exports = getYouTubeVideoId;

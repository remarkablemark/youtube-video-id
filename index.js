'use strict';

/**
 * YouTube url regex.
 *
 * Patterns:
 *   https://www.youtube.com/watch?v=<ID>
 *   https://www.youtube.com/watch?v=<ID>&feature=youtu.be
 *   https://youtu.be/<ID>
 *   https://youtu.be/<ID>?t=1s
 */
var regex = /(youtube\.com\/watch\?v=|youtu\.be\/)([0-9A-Za-z_-]{10}[048AEIMQUYcgkosw])/;

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
    if (match && match.length > 1) {
        return match[2];
    }
    return string;
}

module.exports = getYouTubeVideoId;

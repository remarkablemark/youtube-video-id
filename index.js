'use strict';

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
    return string;
}

module.exports = getYouTubeVideoId;

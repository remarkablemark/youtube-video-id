# youtube-video-id

[![NPM](https://nodei.co/npm/youtube-video-id.png)](https://nodei.co/npm/youtube-video-id/)

[![NPM version](https://img.shields.io/npm/v/youtube-video-id.svg)](https://www.npmjs.com/package/youtube-video-id)
[![Build Status](https://travis-ci.org/remarkablemark/youtube-video-id.svg?branch=master)](https://travis-ci.org/remarkablemark/youtube-video-id)
[![Coverage Status](https://coveralls.io/repos/github/remarkablemark/youtube-video-id/badge.svg?branch=master)](https://coveralls.io/github/remarkablemark/youtube-video-id?branch=master)

Extracts the YouTube video ID from a url or string:

```
YouTubeVideoId(string)
```

## Installation

[NPM](https://www.npmjs.com/package/youtube-video-id):

```sh
$ npm install youtube-video-id
```

[Yarn](https://yarn.fyi/youtube-video-id):

```sh
$ yarn add youtube-video-id
```

[CDN](https://unpkg.com/youtube-video-id/):

```html
<script src="https://unpkg.com/youtube-video-id@latest/dist/youtube-video-id.min.js"></script>
```

## Examples

Server:

```js
var YouTubeVideoId = require('youtube-video-id');

// returns video ID
YouTubeVideoId('https://www.youtube.com/watch?v=X3pTXG9a1oQ'); // 'X3pTXG9a1oQ'
YouTubeVideoId('https://youtu.be/X3pTXG9a1oQ'); // 'X3pTXG9a1oQ'
YouTubeVideoId('X3pTXG9a1oQ'); // 'X3pTXG9a1oQ'
```

Client:

```html
<script src="https://unpkg.com/youtube-video-id@latest/dist/youtube-video-id.min.js"></script>
<script>
  var videoId = YouTubeVideoId('https://www.youtube.com/watch?v=F2uovvU-dLA')
  console.log(videoId);
</script>
```

Also see [JSFiddle](https://jsfiddle.net/remarkablemark/93fkfb22/) and other [examples](examples).

## Testing

```sh
$ npm test
$ npm run lint
```

## License

[MIT](LICENSE)

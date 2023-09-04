# youtube-video-id

[![NPM](https://nodei.co/npm/youtube-video-id.png)](https://nodei.co/npm/youtube-video-id/)

[![NPM version](https://img.shields.io/npm/v/youtube-video-id.svg)](https://www.npmjs.com/package/youtube-video-id)
[![build](https://github.com/remarkablemark/youtube-video-id/actions/workflows/build.yml/badge.svg)](https://github.com/remarkablemark/youtube-video-id/actions/workflows/build.yml)
[![codecov](https://codecov.io/gh/remarkablemark/youtube-video-id/graph/badge.svg?token=PQL6PG63WG)](https://codecov.io/gh/remarkablemark/youtube-video-id)

Extracts the YouTube video ID from a url or string:

```
YouTubeVideoId(string)
```

## Installation

[NPM](https://www.npmjs.com/package/youtube-video-id):

```sh
npm install youtube-video-id
```

[Yarn](https://yarn.fyi/youtube-video-id):

```sh
yarn add youtube-video-id
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
npm test
npm run lint
```

## License

[MIT](LICENSE)

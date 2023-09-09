# youtube-video-id

[![NPM](https://nodei.co/npm/youtube-video-id.png)](https://nodei.co/npm/youtube-video-id/)

[![NPM version](https://img.shields.io/npm/v/youtube-video-id.svg)](https://www.npmjs.com/package/youtube-video-id)
[![build](https://github.com/remarkablemark/youtube-video-id/actions/workflows/build.yml/badge.svg)](https://github.com/remarkablemark/youtube-video-id/actions/workflows/build.yml)
[![codecov](https://codecov.io/gh/remarkablemark/youtube-video-id/graph/badge.svg?token=PQL6PG63WG)](https://codecov.io/gh/remarkablemark/youtube-video-id)

Extracts the YouTube video ID from a URL or string:

```
YouTubeVideoId(string)
```

[Replit](https://replit.com/@remarkablemark/youtube-video-id) | [JSFiddle](https://jsfiddle.net/remarkablemark/93fkfb22/) | [Examples](https://github.com/remarkablemark/youtube-video-id/tree/master/examples)

## Installation

[NPM](https://www.npmjs.com/package/youtube-video-id):

```sh
npm install youtube-video-id
```

[Yarn](https://yarnpkg.com/package?name=youtube-video-id):

```sh
yarn add youtube-video-id
```

[CDN](https://unpkg.com/browse/youtube-video-id/):

```html
<script src="https://unpkg.com/youtube-video-id@latest/dist/youtube-video-id.min.js"></script>
```

## Usage

### Server

Import with ES Modules:

```js
import YouTubeVideoId from 'youtube-video-id';
```

Or require with CommonJS:

```js
const YouTubeVideoId = require('youtube-video-id');
```

Extract YouTube video ID from URL or string:

```js
YouTubeVideoId('https://www.youtube.com/watch?v=X3pTXG9a1oQ'); // 'X3pTXG9a1oQ'
YouTubeVideoId('https://youtu.be/X3pTXG9a1oQ'); // 'X3pTXG9a1oQ'
YouTubeVideoId('X3pTXG9a1oQ'); // 'X3pTXG9a1oQ'
```

### Client

Load script:

```html
<script src="https://unpkg.com/youtube-video-id@latest/dist/youtube-video-id.min.js"></script>
```

Extract YouTube video ID from URL or string:

```html
<script>
  const videoId = YouTubeVideoId('https://www.youtube.com/watch?v=F2uovvU-dLA');
  console.log(videoId);
</script>
```

## Release

Release is automated with [Release Please](https://github.com/googleapis/release-please).

## License

[MIT](https://github.com/remarkablemark/youtube-video-id/blob/master/LICENSE)

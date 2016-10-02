# youtube-video-id

Extracts the YouTube video ID from a url or string:

```
YouTubeVideoId(string)
```

#### Example

```js
var YouTubeVideoId = require('youtube-video-id');

// returns the video ID
YouTubeVideoId('https://www.youtube.com/watch?v=X3pTXG9a1oQ');
YouTubeVideoId('https://youtu.be/X3pTXG9a1oQ');
YouTubeVideoId('X3pTXG9a1oQ');
```

## Installation

```sh
$ npm install
```

## Testing

```sh
$ npm test
```

## License

[MIT](https://github.com/remarkablemark/youtube-video-id/blob/master/LICENSE)

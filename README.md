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

NPM:

```sh
$ npm install youtube-video-id
```

CDN:

```html
<script src="https://unpkg.com/youtube-video-id@latest/dist/youtube-video-id.min.js">
<script>
    console.log(YouTubeVideoId('https://www.youtube.com/watch?v=F2uovvU-dLA'));
</script>
```

## Testing

```sh
$ npm test
```

## License

[MIT](https://github.com/remarkablemark/youtube-video-id/blob/master/LICENSE)

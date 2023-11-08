import { describe, it } from 'node:test';

import assert from 'assert';

import YouTubeVideoId from '../esm/index.mjs';

describe('YouTubeVideoId', () => {
  it('throws error for invalid argument', () => {
    assert.throws(() => {
      YouTubeVideoId();
    });
  });

  it('gets id from long url', () => {
    assert.strictEqual(
      YouTubeVideoId('https://www.youtube.com/watch?v=X3pTXG9a1oQ'),
      'X3pTXG9a1oQ',
    );
  });

  it('gets id from short url', () => {
    assert.strictEqual(
      YouTubeVideoId('https://youtu.be/Yqnk_kjVPH4'),
      'Yqnk_kjVPH4',
    );
  });

  it('gets id', () => {
    assert.strictEqual(YouTubeVideoId('qwgNv27366Q'), 'qwgNv27366Q');
  });
});

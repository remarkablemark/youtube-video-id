'use strict';

/**
 * Module dependencies.
 */
var getYouTubeVideoId = require('../index');

/**
 * Main tests.
 */
describe('getYouTubeVideoId()', function () {
  it('errors if the first parameter is not a string', function () {
    [undefined, null, {}, [], 1, Function].forEach(function (parameter) {
      expect(function () {
        getYouTubeVideoId(parameter);
      }).toThrow(TypeError);
    });
  });

  it('gets the ID from long url', function () {
    expect(
      getYouTubeVideoId('https://www.youtube.com/watch?v=X3pTXG9a1oQ')
    ).toBe('X3pTXG9a1oQ');

    expect(
      getYouTubeVideoId('http://www.youtube.com/watch?v=F2uovvU-dLA')
    ).toBe('F2uovvU-dLA');

    expect(
      getYouTubeVideoId(
        'https://www.youtube.com/watch?v=k66bOHX8MnY&feature=youtu.be'
      )
    ).toBe('k66bOHX8MnY');
  });

  it('gets the ID from short url', function () {
    expect(getYouTubeVideoId('https://youtu.be/Yqnk_kjVPH4')).toBe(
      'Yqnk_kjVPH4'
    );

    expect(getYouTubeVideoId('http://youtu.be/Uf1Vk3RnXsk')).toBe(
      'Uf1Vk3RnXsk'
    );

    expect(getYouTubeVideoId('https://youtu.be/JdxSm9-NllI?t=1s')).toBe(
      'JdxSm9-NllI'
    );
  });

  it('returns passed string if not a url', function () {
    expect(getYouTubeVideoId('qwgNv27366Q')).toBe('qwgNv27366Q');
  });
});

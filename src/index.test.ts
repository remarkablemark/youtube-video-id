import YouTubeVideoId from '.';

describe('YouTubeVideoId', function () {
  describe('error', () => {
    it.each([undefined, null, {}, [], 0, 1, () => {}, new Date()])(
      'throws if the first argument is %p',
      (value) => {
        expect(() => {
          YouTubeVideoId(value as string);
        }).toThrow(new TypeError('First argument must be a string'));
      }
    );
  });

  describe('long url', () => {
    it.each([
      ['https://www.youtube.com/watch?v=X3pTXG9a1oQ', 'X3pTXG9a1oQ'],
      ['http://www.youtube.com/watch?v=F2uovvU-dLA', 'F2uovvU-dLA'],
      [
        'https://www.youtube.com/watch?v=k66bOHX8MnY&feature=youtu.be',
        'k66bOHX8MnY'
      ]
    ])('receives %p and returns %p', (input, output) => {
      expect(YouTubeVideoId(input)).toBe(output);
    });
  });

  describe('short url', () => {
    it.each([
      ['https://youtu.be/Yqnk_kjVPH4', 'Yqnk_kjVPH4'],
      ['http://youtu.be/Uf1Vk3RnXsk', 'Uf1Vk3RnXsk'],
      ['https://youtu.be/JdxSm9-NllI?t=1s', 'JdxSm9-NllI']
    ])('receives %p and returns %p', (input, output) => {
      expect(YouTubeVideoId(input)).toBe(output);
    });
  });

  describe('string', () => {
    it('returns string', function () {
      expect(YouTubeVideoId('qwgNv27366Q')).toBe('qwgNv27366Q');
    });
  });
});

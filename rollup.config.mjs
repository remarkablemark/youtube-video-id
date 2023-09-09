import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

/**
 * Build rollup config for development (default) or production (minify = true).
 *
 * @param {boolean} [minify=false]
 * @returns - Rollup config.
 */
const getConfig = (minify = false) => ({
  input: 'index.js',
  output: {
    file: `dist/youtube-video-id${minify ? '.min' : ''}.js`,
    format: 'umd',
    name: 'YouTubeVideoId',
    sourcemap: true
  },
  plugins: [commonjs(), minify && terser()]
});

export default [getConfig(), getConfig(true)];

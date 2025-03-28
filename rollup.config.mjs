import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

const config = (minify = false) => ({
  input: 'src/index.ts',
  output: {
    file: `dist/youtube-video-id${minify ? '.min' : ''}.js`,
    format: 'umd',
    name: 'YouTubeVideoId',
    sourcemap: true,
  },
  plugins: [
    typescript({
      declaration: false,
      declarationMap: false,
      module: 'esnext',
      compilerOptions: {
        outDir: 'dist',
      },
    }),
    commonjs(),
    minify && terser(),
  ],
});

export default [config(), config(true)];

# Changelog

## [1.0.1](https://github.com/remarkablemark/youtube-video-id/compare/v1.0.0...v1.0.1) (2023-09-10)


### Bug Fixes

* **index:** don't return undefined and always return string ([dc09d70](https://github.com/remarkablemark/youtube-video-id/commit/dc09d707d68f78eea09ceed5c3650d8fe9978b7c))

## [1.0.0](https://github.com/remarkablemark/youtube-video-id/compare/v0.0.4...v1.0.0) (2023-09-10)


### ⚠ BREAKING CHANGES

* CommonJS import requires `.default` key

### Build System

* refactor to TypeScript and build ESM ([0c92c02](https://github.com/remarkablemark/youtube-video-id/commit/0c92c026b018b616316b1187c1cda3f162e1c4c9))

## [0.0.4](https://github.com/remarkablemark/youtube-video-id/compare/v0.0.3...v0.0.4) (2023-09-09)


### Build System

* replace webpack with rollup to optimize bundle size ([fe4b1c7](https://github.com/remarkablemark/youtube-video-id/commit/fe4b1c78fb8549e9b43a3d0472315e48b2d221c4))

## [0.0.3](https://github.com/remarkablemark/youtube-video-id/compare/v0.0.2...v0.0.3) (2018-10-07)

### Features

- use maximally-constrained regex for videoId (see [explanation](https://webapps.stackexchange.com/questions/54443/format-for-id-of-youtube-video/101153#101153)) ([345e6f2](https://github.com/remarkablemark/youtube-video-id/commit/345e6f2))

## [0.0.2](https://github.com/remarkablemark/youtube-video-id/compare/v0.0.1...v0.0.2) - 2017-07-12

### Added

- npm scripts
  - `clean` removes `dist` directory
  - `build:min` builds minified bundle
  - `build:unmin` builds uncompressed bundle
  - `cover` generates coverage report with istanbul and mocha
  - `coveralls` sends coverage report to coveralls
- Documentation
  - HTML examples of using the library with `var` and `amd`
  - Improve README.md
  - Create CHANGELOG.md
- devDependencies
  - istanbul@0.4.5
  - coveralls@2.13.1

### Changed

- Build
  - Update npm script `build` to run `clean`, `build:min`, and `build:unmin`
  - Use webpack's ModuleConcatenationPlugin
- Test
  - Update travis to run coveralls after script
- devDependencies
  - eslint@4.1.1
  - webpack@3.0.0

## [0.0.1](https://github.com/remarkablemark/youtube-video-id/tree/v0.0.1) - 2016-10-02

### Added

- Module that extracts YouTube video ID from string or url
- UMD build found in the `dist` directory
- Tests, linter, README, LICENSE, and other files

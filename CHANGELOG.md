# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="0.0.3"></a>
## [0.0.3](https://github.com/remarkablemark/youtube-video-id/compare/v0.0.2...v0.0.3) (2018-10-07)

### Features

* use maximally-constrained regex for videoId (see [explanation](https://webapps.stackexchange.com/questions/54443/format-for-id-of-youtube-video/101153#101153)) ([345e6f2](https://github.com/remarkablemark/youtube-video-id/commit/345e6f2))

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

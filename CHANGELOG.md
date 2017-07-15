# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com)
and this project adheres to [Semantic Versioning](http://semver.org).

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

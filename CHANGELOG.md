# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2024-1-10

### Fixed

- build time warning in post-process fixed

### Removed

- React removed in favour of solid-js
- helpers: createReactStyles and createAstroStyles in favour of common createStyles

### Added

- solid-js as preferred component creator
- helpers: createStyles added with solid-js type checking

## [1.1.0] - 2024-1-10

### Removed

- csstype removed in favour of React

### Added

- React as preferred component creator
- Pre-made components: Div, Heading, Image, List, Paragraph

## [1.0.2] - 2024-1-10

### Removed

- my-npx-create bin script.

## [1.0.1] - 2024-1-10

### Fixed

- `dist` added to `.prettierignore`.

## [1.0.0] - 2024-1-10

### Added

- CSS typing using csstype.
- Project created.

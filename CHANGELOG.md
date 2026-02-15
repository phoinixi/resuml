# [1.3.0](https://github.com/phoinixi/resuml/compare/v1.2.6...v1.3.0) (2026-02-15)


### Bug Fixes

* **ci:** bump Node.js to 22 for semantic-release compatibility ([62bac15](https://github.com/phoinixi/resuml/commit/62bac1511cc9d9d394d4ca3e22d74f0202ae32d6))
* **ci:** configure git identity for semantic-release commits ([1343d2d](https://github.com/phoinixi/resuml/commit/1343d2d5f7632882d4792286e5e24188168a3791))
* **ci:** disable husky in release workflow ([8d151cd](https://github.com/phoinixi/resuml/commit/8d151cd4e55854d59463bbd6bc61c84d60dd4d43))
* **ci:** use npm OIDC trusted publishing, remove duplicate releaserc ([178eedf](https://github.com/phoinixi/resuml/commit/178eedfc6385c5ef6ccb3c35a4d2bd905be12f89))


### Features

* add interactive init command to scaffold resume.yaml ([#5](https://github.com/phoinixi/resuml/issues/5)) ([6d289f7](https://github.com/phoinixi/resuml/commit/6d289f7c4f2b0776c16fb52a4fa02c1e62bd4772))
* add PDF export command using Puppeteer ([#6](https://github.com/phoinixi/resuml/issues/6)) ([4e71fec](https://github.com/phoinixi/resuml/commit/4e71fec9afa87e5fc7c46712dd283e698e4fd170))
* add resuml themes command ([f191aec](https://github.com/phoinixi/resuml/commit/f191aeca3d7a0ed7686c3937d4f5af75ce26cf09))

## [1.2.6](https://github.com/phoinixi/resuml/compare/v1.2.5...v1.2.6) (2025-06-22)


### Bug Fixes

* Potential fix for code scanning alert no. 1: Unsafe shell command constructed from library input ([eeb6685](https://github.com/phoinixi/resuml/commit/eeb66858d4aea61215118dbb3e1cb8e9a952c285))
* Potential fix for code scanning alert no. 2: Unsafe shell command constructed from library input ([8a9dcdd](https://github.com/phoinixi/resuml/commit/8a9dcddde7756606e5fce98ffceab714d656e2f3))

## [1.2.5](https://github.com/phoinixi/resuml/compare/v1.2.4...v1.2.5) (2025-06-09)


### Bug Fixes

* ensure robust theme loading and consistent imports in dev command and API ([281e87f](https://github.com/phoinixi/resuml/commit/281e87f1bc209ba575ab33b526c19fe90ebe0d58))

## [1.2.4](https://github.com/phoinixi/resuml/compare/v1.2.3...v1.2.4) (2025-06-08)


### Bug Fixes

* generate and include type declarations for TypeScript consumers ([a9f15c1](https://github.com/phoinixi/resuml/commit/a9f15c1f121c50f0638e01ea34cdc4eb22c4aecb))

## [1.2.3](https://github.com/phoinixi/resuml/compare/v1.2.2...v1.2.3) (2025-06-08)


### Bug Fixes

* remove theme-config support and related code/docs for now ([89f2c77](https://github.com/phoinixi/resuml/commit/89f2c775089d91b03b4cfdd1519697816ba31daf))

## [1.2.2](https://github.com/phoinixi/resuml/compare/v1.2.1...v1.2.2) (2025-06-08)


### Bug Fixes

* ensure type generation and scripts are included for npm publish and development ([019521c](https://github.com/phoinixi/resuml/commit/019521c747d0a82e86f2afa38fb559cb4aaa36bc))

## [1.2.1](https://github.com/phoinixi/resuml/compare/v1.2.0...v1.2.1) (2025-06-08)


### Bug Fixes

* final cleanup and documentation updates ([4b3659b](https://github.com/phoinixi/resuml/commit/4b3659b653e89242f360644673e5574a58e7d080))

# [1.2.0](https://github.com/phoinixi/resuml/compare/v1.1.2...v1.2.0) (2025-05-25)

### Bug Fixes

- configure commitlint to ignore semantic-release commits ([61ed4e4](https://github.com/phoinixi/resuml/commit/61ed4e4d09501efca0dceaddaafc4158115c0d6a))
- disable line length limits in commitlint for semantic-release compatibility ([40471d3](https://github.com/phoinixi/resuml/commit/40471d3ed9e1866fa49a9d4105bcaad63254f56d))

### Features

- convert monorepo to monolith with production tooling ([b08fb15](https://github.com/phoinixi/resuml/commit/b08fb1597606abcb88837e955b382a1286ac5a25))

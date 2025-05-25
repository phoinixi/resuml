## 1.0.0 (2025-05-25)

* feat: initial project setup with semantic release and CLI tools ([1871f56](https://github.com/phoinixi/resuml/commit/1871f56))
* feat: rebrand from ryaml to yamlr with complete package rename ([32f6826](https://github.com/phoinixi/resuml/commit/32f6826))
* feat: rebrand from yamlr to resuml ([4a73502](https://github.com/phoinixi/resuml/commit/4a73502))
* fix: add github actions permissions and prevent release without npm token ([9d6f0e8](https://github.com/phoinixi/resuml/commit/9d6f0e8))
* fix: change package name to scoped @phoinixi/ryaml to avoid npm conflict ([a1e279d](https://github.com/phoinixi/resuml/commit/a1e279d))
* fix: skip commitlint for semantic-release commits to avoid line length issues ([3f89384](https://github.com/phoinixi/resuml/commit/3f89384))
* fix: test fixes in ci ([40aaf56](https://github.com/phoinixi/resuml/commit/40aaf56))
* fix: unit test fixes ([eab240c](https://github.com/phoinixi/resuml/commit/eab240c))
* fix: update node version in ci ([d76e55a](https://github.com/phoinixi/resuml/commit/d76e55a))
* docs: update all documentation for yamlr rebrand ([43cff9a](https://github.com/phoinixi/resuml/commit/43cff9a))
* chore: enforce conventional commits with husky and commitlint ([bc4f8e5](https://github.com/phoinixi/resuml/commit/bc4f8e5))

# Changelog

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) and uses [Conventional Commits](https://conventionalcommits.org/) for automated versioning.

## [Unreleased]

Initial project setup with:

- Core YAML resume processing library
- CLI tool with validate, tojson, render, and dev commands
- Support for JSON Resume compatible themes
- Auto-installation of missing themes
- Comprehensive test suite

# Release Process

This project uses [semantic-release](https://semantic-release.gitbook.io/) for automated versioning and publishing.

## How it works

1. **Conventional Commits**: All commits must follow the [Conventional Commits](https://conventionalcommits.org/) specification
2. **Automated Versioning**: Based on commit types, semantic-release automatically determines the next version number
3. **Automated Publishing**: When changes are pushed to the `main` branch, the release workflow automatically publishes to npm

## Commit Types and Version Bumps

| Commit Type        | Version Bump  | Example                                  |
| ------------------ | ------------- | ---------------------------------------- |
| `feat:`            | Minor (0.1.0) | `feat: add new validation command`       |
| `fix:`             | Patch (0.0.1) | `fix: resolve schema validation error`   |
| `perf:`            | Patch (0.0.1) | `perf: improve YAML parsing performance` |
| `refactor:`        | Patch (0.0.1) | `refactor: simplify theme loading logic` |
| `BREAKING CHANGE:` | Major (1.0.0) | `feat!: remove deprecated API`           |

## Setup for Repository Maintainers

### 1. GitHub Repository Secrets

Add these secrets to your GitHub repository (Settings → Secrets and variables → Actions):

- `GITHUB_TOKEN`: Automatically provided by GitHub Actions
- `NPM_TOKEN`: Your npm authentication token with publish permissions

### 2. NPM Token Setup

1. Login to npm: `npm login`
2. Create an automation token: `npm token create --type=automation`
3. Add the token to GitHub repository secrets as `NPM_TOKEN`

### 3. First Release

The first release will be triggered when you push a commit with a conventional commit message to the main branch.

## Testing the Setup

Run the dry-run test to verify configuration:

```bash
npm run test:release
```

## Manual Release (if needed)

```bash
# Ensure you're on main branch and up to date
git checkout main
git pull origin main

# Run semantic-release manually
npm run release
```

## What Gets Published

- **Package**: `yamlr` (the CLI package)
- **Registry**: npm public registry
- **Files**: Only the built distribution files and necessary metadata

## Changelog

The changelog is automatically generated and maintained in `CHANGELOG.md` based on conventional commit messages.

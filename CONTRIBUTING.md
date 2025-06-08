# Contributing to resuml

Thank you for your interest in contributing to resuml! This document provides guidelines and instructions for contributing.

## Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/resuml.git
   cd resuml
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

1. Make your changes
2. Run tests:
   ```bash
   npm test
   ```
3. Run linting:
   ```bash
   npm run lint
   ```
4. Format code:
   ```bash
   npm run format
   ```
5. Build the project:
   ```bash
   npm run build
   ```

## Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. Commit messages should be structured as follows:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

Types:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code changes that neither fix bugs nor add features
- `test`: Adding or modifying tests
- `chore`: Changes to the build process or auxiliary tools

## Pull Request Process

1. Update the README.md with details of changes if needed
2. Update the CHANGELOG.md with your changes
3. Ensure all tests pass
4. Ensure linting passes
5. Submit your pull request

## Code Style

- We use ESLint and Prettier for code formatting
- Follow the existing code style
- Write meaningful comments
- Keep functions small and focused
- Write tests for new features

## Testing

- Write tests for new features
- Ensure all tests pass
- Maintain or improve test coverage
- Test edge cases

## Documentation

- Update documentation for any new features
- Add JSDoc comments for new functions
- Update examples if needed
- Keep the README.md up to date

## Questions?

Feel free to open an issue for any questions or concerns.

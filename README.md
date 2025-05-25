# resuml

[![CI](https://github.com/phoinixi/resuml/actions/workflows/ci.yml/badge.svg)](https://github.com/phoinixi/resuml/actions/workflows/ci.yml)
[![npm version](https://badge.fury.io/js/resuml.svg)](https://badge.fury.io/js/resuml)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

Generate JSON resumes from YAML with theme support.

resuml is a modern CLI tool for managing your resume in YAML format. It enables you to maintain your resume data as modular YAML files, validate them against the JSON Resume schema, and render them to various output formats.

## Features

- **YAML-First:** Author your resume in YAML for better readability and maintainability
- **Modular Data:** Split your resume into multiple files for easier maintenance
- **Standard Compatibility:** Compatible with the [JSON Resume](https://jsonresume.org/) schema
- **Schema Validation:** Validate your resume data against the JSON Resume schema
- **Multiple Output Formats:** Convert your resume to JSON and render to HTML
- **Theme Support:** Use existing JSON Resume themes or custom resuml themes
- **Development Server:** Preview changes with hot-reloading

## Installation

```bash
# Install globally
npm install -g resuml

# Or use with npx
npx resuml --help
```

## Usage

### Basic Commands

```bash
# Validate your resume YAML files
resuml validate -r path/to/resume/dir

# Convert YAML to JSON
resuml tojson -r path/to/resume-dir -o resume.json

# Render resume to HTML
resuml render -r path/to/resume/dir -t jsonresume-theme-stackoverflow -o resume.html

# Start development server with hot-reload
resuml dev -r path/to/resume-dir -t jsonresume-theme-stackoverflow
```

### Using Multiple Files

You can split your resume into multiple files for better organization:

```
resume/
├── basics.yaml      # Personal information
├── education.yaml   # Educational background
├── work.yaml        # Work experience
├── skills.yaml      # Skills and competencies
└── projects.yaml    # Projects you've worked on
```

Then use the directory as input:

```bash
resuml validate -r resume/
```

### Using Glob Patterns

You can also use glob patterns to select specific files:

```bash
resuml validate -r "resume/**/*.yaml"
```

## Directory Structure

```
.
├── packages/
│   ├── core/         # Core functionality and data processing
│   └── cli/          # Command-line interface
├── examples/         # Example resume files and usage
└── docs/            # Documentation
```

## Development

This is a monorepo managed with npm workspaces and Turborepo.

```bash
# Clone the repository
git clone https://github.com/phoinixi/resuml.git
cd resuml

# Install dependencies
npm install

# Build all packages
npm run build

# Run tests
npm run test

# Run the CLI locally
node packages/cli/bin/resuml.js --help
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Conventional Commits

This project uses [Conventional Commits](https://conventionalcommits.org/) for automated versioning and changelog generation. Please follow the format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Types:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files

Examples:

```bash
git commit -m "feat: add auto-install for missing themes"
git commit -m "fix: resolve schema validation error for education field"
git commit -m "docs: update README with new installation instructions"
```

### Development Process

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes using conventional commits
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the LICENSE file for details.

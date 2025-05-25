# yamlr Documentation

Welcome to the yamlr documentation! This directory contains detailed guides and references for using yamlr effectively.

## Quick Start

For a quick overview, see the main [README](../README.md) in the project root.

## Guides

### Installation

```bash
npm install -g yamlr
```

### Basic Usage

```bash
# Validate your resume
yamlr validate -r path/to/resume/dir

# Convert to JSON
yamlr tojson -r path/to/resume/dir -o resume.json

# Render to HTML
yamlr render -r path/to/resume/dir -t jsonresume-theme-elegant -o resume.html

# Start development server
yamlr dev -r path/to/resume/dir -t jsonresume-theme-elegant
```

### File Structure

yamlr supports modular resume files. You can organize your resume data across multiple YAML files:

```
path/to/resume/dir
├── basics.yaml      # Personal information
├── work.yaml        # Work experience
├── education.yaml   # Education background
├── skills.yaml      # Technical skills
├── projects.yaml    # Notable projects
└── ...             # Other sections
```

### Schema Compliance

yamlr follows the [JSON Resume Schema](https://jsonresume.org/schema/), ensuring compatibility with the broader JSON Resume ecosystem.

### Themes

yamlr supports two types of themes:

1. **JSON Resume Themes** - Any theme from the JSON Resume community
2. **Native yamlr Themes** - Themes specifically designed for yamlr

#### Using JSON Resume Themes

```bash
yamlr render -r path/to/resume/dir -t jsonresume-theme-stackoverflow
```

#### Using Native Themes

```bash
yamlr render -r path/to/resume/dir -t @yamlr/theme-modern
```

### Development Server

The development server provides live preview with hot-reload:

```bash
yamlr dev -r path/to/resume/dir -t jsonresume-theme-stackoverflow --port 3000
```

Navigate to `http://localhost:3000` to see your resume. The page will automatically refresh when you modify your YAML files.

## API Reference

### Commands

#### `validate`

Validates resume data against the JSON Resume schema.

**Options:**

- `-r, --resume <path>` - Path to YAML file(s)
- `--debug` - Show detailed validation errors

#### `tojson`

Converts YAML resume data to JSON format.

**Options:**

- `-r, --resume <path>` - Path to YAML file(s)
- `-o, --output <file>` - Output JSON file path (default: resume.json)
- `--debug` - Show debug information

#### `render`

Renders resume using a specified theme.

**Options:**

- `-r, --resume <path>` - Path to YAML file(s)
- `-t, --theme <name>` - Theme name (required)
- `-o, --output <file>` - Output HTML file path (default: resume.html)
- `--theme-config <path>` - Theme configuration file
- `--language <code>` - Language code (default: en)
- `--debug` - Show debug information

#### `dev`

Starts development server with hot-reload.

**Options:**

- `-r, --resume <path>` - Path to YAML file(s)
- `-t, --theme <name>` - Theme name (required)
- `--port <number>` - Server port (default: 3000)
- `--theme-config <path>` - Theme configuration file
- `--language <code>` - Language code (default: en)
- `--debug` - Show debug information

## Contributing

For information about contributing to yamlr, see the main project README.

# resuml

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
npm install -g @resuml/cli

# Or use with npx
npx @resuml/cli --help

# After installation, use the simple command:
resuml --help
```

## Quick Start

1. Install a theme and create a resume directory:

```bash
# Install the recommended React theme
npm install -g jsonresume-theme-react

# Create your resume directory
mkdir my-resume
cd my-resume
```

2. Create your resume files (you can split into multiple files or use just one):

```yaml
# basics.yaml
basics:
  name: 'John Doe'
  label: 'Software Engineer'
  email: 'john@example.com'
  phone: '+1-555-123-4567'
  website: 'https://johndoe.dev'
  summary: 'Experienced software engineer with a passion for creating innovative solutions.'
  location:
    city: 'San Francisco'
    region: 'CA'
    countryCode: 'US'

# work.yaml
work:
  - company: 'Tech Corp'
    position: 'Senior Software Engineer'
    website: 'https://techcorp.com'
    startDate: '2020-01-01'
    endDate: '2023-12-31'
    summary: 'Led development of core platform features'
    highlights:
      - 'Improved system performance by 40%'
      - 'Mentored 5 junior developers'

# education.yaml
education:
  - institution: 'University of Technology'
    area: 'Computer Science'
    studyType: 'Bachelor of Science'
    startDate: '2016-09-01'
    endDate: '2020-05-31'
    gpa: '3.8'

# skills.yaml
skills:
  - name: 'Programming Languages'
    keywords:
      - 'JavaScript'
      - 'TypeScript'
      - 'Python'
      - 'Go'
  - name: 'Frameworks'
    keywords:
      - 'React'
      - 'Node.js'
      - 'Express'
```

3. Validate and render your resume:

```bash
# Validate your resume files
resuml validate -r .

# Convert to JSON Resume format
resuml tojson -r . -o resume.json

# Render to HTML with a theme
resuml render -r . -t jsonresume-theme-react -o resume.html

# Start development server for live preview
resuml dev -r . -t jsonresume-theme-react
```

## Usage

### Basic Commands

```bash
# Validate your resume YAML files
resuml validate -r path/to/resume/dir

# Convert YAML to JSON Resume format
resuml tojson -r path/to/resume-dir -o resume.json

# Render resume to HTML with a theme
resuml render -r path/to/resume/dir -t jsonresume-theme-react -o resume.html

# Start development server with hot-reload
resuml dev -r path/to/resume-dir -t jsonresume-theme-react
```

### Command Options

#### `validate`

Validates your resume YAML files against the JSON Resume schema.

```bash
resuml validate -r <resume-path>
```

- `-r, --resume <path>`: Path to resume files (directory or glob pattern)

#### `tojson`

Converts YAML resume files to JSON Resume format.

```bash
resuml tojson -r <resume-path> -o <output-file>
```

- `-r, --resume <path>`: Path to resume files (directory or glob pattern)
- `-o, --output <file>`: Output JSON file path

#### `render`

Renders resume to HTML using a JSON Resume theme.

```bash
resuml render -r <resume-path> -t <theme> -o <output-file>
```

- `-r, --resume <path>`: Path to resume files (directory or glob pattern)
- `-t, --theme <theme>`: Theme name (e.g., 'jsonresume-theme-react')
- `-o, --output <file>`: Output HTML file path

#### `dev`

Starts a development server with hot-reloading for live preview.

```bash
resuml dev -r <resume-path> -t <theme>
```

- `-r, --resume <path>`: Path to resume files (directory or glob pattern)
- `-t, --theme <theme>`: Theme name (e.g., 'jsonresume-theme-react')

### File Organization

You can organize your resume data in multiple ways:

#### Single File

```yaml
# resume.yaml
basics:
  name: 'John Doe'
  # ... rest of basics
work:
  - company: 'Tech Corp'
    # ... work details
education:
  - institution: 'University'
    # ... education details
```

#### Multiple Files (Recommended)

```
resume/
├── basics.yaml      # Personal information and contact details
├── work.yaml        # Work experience
├── education.yaml   # Educational background
├── skills.yaml      # Skills and competencies
├── projects.yaml    # Projects you've worked on
├── awards.yaml      # Awards and achievements
├── volunteer.yaml   # Volunteer experience
├── publications.yaml # Publications and papers
└── references.yaml  # Professional references
```

#### Using Glob Patterns

```bash
# Process all YAML files in subdirectories
resuml validate -r "resume/**/*.yaml"

# Process specific file patterns
resuml validate -r "resume/{basics,work,education}.yaml"
```

## JSON Resume Schema

resuml follows the [JSON Resume](https://jsonresume.org/) schema specification. The main sections include:

- `basics`: Personal information, contact details, and summary
- `work`: Work experience and employment history
- `volunteer`: Volunteer work and community involvement
- `education`: Educational background and qualifications
- `awards`: Awards, honors, and achievements
- `publications`: Publications, papers, and articles
- `skills`: Technical and professional skills
- `languages`: Language proficiencies
- `interests`: Personal interests and hobbies
- `references`: Professional references
- `projects`: Personal or professional projects

For detailed schema documentation, visit [jsonresume.org/schema](https://jsonresume.org/schema/).

## Themes

resuml supports all JSON Resume themes. We recommend these high-quality themes:

### Featured Themes

- **`jsonresume-theme-react`** - Modern React-based theme with excellent performance and clean design
- **`jsonresume-theme-stackoverflow`** - Clean, professional theme inspired by Stack Overflow's design

### Other Popular Themes

- `jsonresume-theme-elegant` - Modern, elegant design
- `jsonresume-theme-even` - Simple, balanced layout
- `jsonresume-theme-flat` - Flat design theme
- `jsonresume-theme-kendall` - Modern, colorful theme

To use a theme, install it via npm and reference it by name:

```bash
# Install and use the React theme (recommended)
npm install -g jsonresume-theme-react
resuml render -r resume/ -t jsonresume-theme-react -o resume.html

# Or try the Stack Overflow theme
npm install -g jsonresume-theme-stackoverflow
resuml render -r resume/ -t jsonresume-theme-stackoverflow -o resume.html
```

## Examples

Check out the [examples directory](https://github.com/phoinixi/resuml/tree/main/examples) in the repository for sample resume files and usage patterns.

## Requirements

- Node.js 20.0.0 or higher

## Contributing

Found a bug or want to contribute? Visit the [GitHub repository](https://github.com/phoinixi/resuml) to:

- Report issues
- Submit feature requests
- Contribute code improvements

## License

ISC License - see the [LICENSE](https://github.com/phoinixi/resuml/blob/main/LICENSE) file for details.

## Support

- 📖 [Documentation](https://github.com/phoinixi/resuml#readme)
- 🐛 [Issues](https://github.com/phoinixi/resuml/issues)
- 💬 [Discussions](https://github.com/phoinixi/resuml/discussions)

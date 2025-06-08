# Resume Examples

This directory contains sample resume files that demonstrate how to structure your resume data using YAML format.

## Example Types

### 1. Multi-file Resume (Modular)

Each section of the resume is stored in a separate YAML file for better organization and maintainability:

- `basics.yaml` - Personal information, contact details, and summary
- `education.yaml` - Educational background and qualifications
- `work.yaml` - Work experience and employment history
- `skills.yaml` - Technical skills and competencies
- `projects.yaml` - Projects and notable achievements

**Usage:**

```bash
# Validate the multi-file resume
resuml validate --resume examples/

# Convert to JSON
resuml tojson --resume examples/ --output examples/resume.json

# Render to HTML (requires a theme)
resuml render --resume examples/ --theme stackoverflow --output examples/resume.html
```

### 2. Single-file Comprehensive Resume

All sections are combined into a single YAML file: `resume.yaml`.

**Usage:**

```bash
# Validate the single-file resume
resuml validate --resume examples/resume.yaml

# Convert to JSON
resuml tojson --resume examples/resume.yaml --output examples/resume-single.json

# Render to HTML (requires a theme)
resuml render --resume examples/resume.yaml --theme stackoverflow --output examples/resume-single.html
```

## Creating Your Own Resume

You can use either approach as a template for your own resume:

- **Multi-file:** Copy the example files to a new directory, modify the content, and add/remove sections as needed.
- **Single-file:** Copy `resume.yaml` and edit as needed.

Validate your changes with `resuml validate`.

## Supported Sections

The resume format follows the [JSON Resume Schema](https://jsonresume.org/schema/):

- `basics` - Required: Personal information and contact details
- `work` - Employment history
- `education` - Educational background
- `skills` - Technical and professional skills
- `projects` - Notable projects and achievements
- `volunteer` - Volunteer work and community involvement
- `awards` - Awards and recognitions
- `publications` - Published works and articles
- `languages` - Language proficiency
- `interests` - Personal interests and hobbies
- `references` - Professional references

Each section can be split into separate YAML files for better organization, or combined into a single file for simplicity.

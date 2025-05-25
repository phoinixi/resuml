# Resume Examples

This directory contains sample resume files that demonstrate how to structure your resume data using YAML format.

## File Structure

- `basics.yaml` - Personal information, contact details, and summary
- `education.yaml` - Educational background and qualifications
- `work.yaml` - Work experience and employment history
- `skills.yaml` - Technical skills and competencies
- `projects.yaml` - Projects and notable achievements

## Usage

### Validate the example resume

```bash
resuml validate --resume examples/
```

### Convert to JSON

```bash
resuml tojson --resume examples/ --output examples/resume.json
```

### Render to HTML (requires a theme)

```bash
# Using JSON Resume themes
resuml render --resume examples/ --theme stackoverflow --output examples/resume.html
resuml render --resume examples/ --theme react --output examples/resume.html
```

### Start development server

```bash
resuml dev --resume examples/ --theme react --port 3000
```

## Creating Your Own Resume

You can use these files as a template for your own resume:

1. Copy the example files to a new directory
2. Modify the content to match your background
3. Add or remove sections as needed
4. Validate your changes with `resuml validate`

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

Each section can be split into separate YAML files for better organization.

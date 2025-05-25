# resuml

A CLI tool for generating JSON resumes from YAML with theme support.

## Installation

```bash
npm install -g resuml
```

## Usage

### Validate resume data
```bash
resuml validate --resume resume.yaml
```

### Convert YAML to JSON
```bash
resuml tojson --resume resume.yaml --output resume.json
```

### Render resume with theme
```bash
resuml render --resume resume.yaml --theme stackoverflow --output resume.html
```

### Development server
```bash
resuml dev --resume resume.yaml --theme react --port 3000
```

## Commands

- `validate` - Validates resume data against the JSON Resume schema
- `tojson` - Converts YAML resume data to JSON format
- `render` - Renders the resume using a specified theme
- `dev` - Starts a development server with hot-reload

## Options

- `--resume, -r` - Input YAML file(s) or directory
- `--output, -o` - Output file path
- `--theme, -t` - Theme to use for rendering
- `--port, -p` - Port for development server (default: 3000)
- `--debug` - Enable debug mode for detailed error messages

## License

ISC

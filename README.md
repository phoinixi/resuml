# resuml

A CLI tool for generating JSON resumes from YAML with theme support. This tool helps you maintain your resume in YAML format and convert it to various formats including JSON and HTML with different themes.

<a href="https://www.buymeacoffee.com/leekbeds55j"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a pizza&emoji=🍕&slug=leekbeds55j&button_colour=FF5F5F&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00" /></a>

## Prerequisites

- Node.js >= 20.0.0
- npm >= 10.0.0

## Installation

```bash
npm install -g resuml
```

## Quick Start

1. Create a YAML file for your resume (e.g., `resume.yaml`)
2. Validate your resume data:
   ```bash
   resuml validate --resume resume.yaml
   ```
3. Convert to JSON:
   ```bash
   resuml tojson --resume resume.yaml --output resume.json
   ```
4. Render with a theme:
   ```bash
   resuml render --resume resume.yaml --theme stackoverflow --output resume.html
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

## Examples

For detailed examples and usage instructions, see the [examples/README.md](examples/README.md) file.

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

## Example YAML Structure

```yaml
basics:
  name: John Doe
  label: Software Engineer
  email: john@example.com
  summary: Experienced software engineer...
  location:
    city: San Francisco
    countryCode: US
  profiles:
    - network: GitHub
      url: https://github.com/johndoe

work:
  - company: Tech Corp
    position: Senior Engineer
    startDate: 2020-01
    endDate: Present
    summary: Led development of...
```

## Available Themes

- `stackoverflow` - Clean and professional theme based on Stack Overflow's style
- `react` - Modern React-based theme with interactive features
- More themes coming soon...

## Troubleshooting

### Common Issues

1. **Validation Errors**

   - Ensure your YAML follows the JSON Resume schema
   - Check for proper indentation in your YAML file
   - Verify all required fields are present

2. **Theme Rendering Issues**

   - Make sure the theme is properly installed
   - Check if all required theme dependencies are installed
   - Try running with `--debug` flag for more information

3. **Development Server Issues**
   - Ensure the specified port is available
   - Check if you have proper permissions to access the port
   - Try a different port if the default is blocked

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC

## Node.js API Usage

You can use resuml programmatically from Node.js:

```js
import {
  processResumeData,
  loadResumeFiles,
  loadTheme,
  themeRender
} from 'resuml';

// Load YAML files
const { yamlContents } = await loadResumeFiles('resume.yaml');
// Validate and merge
const resume = await processResumeData(yamlContents);
// Load a theme
const theme = await loadTheme('stackoverflow');
// Render HTML
const html = await theme.render(resume, { locale: 'en' });
```

See the CLI and API for more details.

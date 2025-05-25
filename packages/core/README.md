# @resuml/core

Core functionality for processing resume data in YAML format and converting it to JSON Resume schema.

This package provides the core data processing functionality used by the [resuml CLI tool](https://www.npmjs.com/package/resuml). It handles parsing, merging, and validating resume data from YAML files according to the JSON Resume schema.

## Installation

```bash
npm install @resuml/core
```

## Usage

```typescript
import { processResumeData, Resume } from '@resuml/core';

// Example YAML content
const yamlContents = [
  `
basics:
  name: "John Doe"
  label: "Software Engineer"
  email: "john@example.com"
`,
  `
work:
  - company: "Tech Corp"
    position: "Senior Engineer"
    startDate: "2020-01-01"
`,
  `
skills:
  - name: "Programming"
    keywords:
      - "JavaScript"
      - "TypeScript"
`,
];

try {
  const resume: Resume = await processResumeData(yamlContents);
  console.log('Valid resume:', resume);
} catch (error) {
  console.error('Validation failed:', error.message);
}
```

## API

### `processResumeData(yamlContents: string[]): Promise<Resume>`

Processes an array of YAML strings containing resume data and returns a validated resume object.

**Parameters:**

- `yamlContents`: Array of YAML strings containing resume data

**Returns:**

- `Promise<Resume>`: A promise that resolves to a validated resume object conforming to the JSON Resume schema

**Throws:**

- `Error`: If no YAML content is provided
- `Error`: If no valid YAML content is found after parsing
- `Error`: If the merged resume data fails JSON Resume schema validation

### Data Merging

The package intelligently merges multiple YAML files:

- **Objects**: Deep merged using lodash.merge
- **Arrays**: Concatenated (not replaced)
- **Primitives**: Later values override earlier ones

Example:

```typescript
// File 1
const yaml1 = `
basics:
  name: "John Doe"
  email: "john@example.com"
work:
  - company: "Company A"
`;

// File 2
const yaml2 = `
basics:
  phone: "+1-555-1234"
work:
  - company: "Company B"
`;

// Result after merging:
{
  basics: {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1-555-1234"
  },
  work: [
    { company: "Company A" },
    { company: "Company B" }
  ]
}
```

## Schema Validation

The package validates resume data against the official [JSON Resume schema](https://jsonresume.org/schema/). All resume objects returned by `processResumeData` are guaranteed to be valid according to this schema.

## Error Handling

The package provides detailed error messages for common issues:

- **Empty input**: No YAML content provided
- **Parse errors**: Invalid YAML syntax (logged as warnings, invalid files skipped)
- **Validation errors**: Schema validation failures with detailed error information

## TypeScript Support

Full TypeScript support is included with comprehensive type definitions for the Resume interface and all exported functions.

## Dependencies

- `yaml`: YAML parsing
- `lodash.merge`: Deep object merging
- `@jsonresume/schema`: JSON Resume schema validation

## Related Packages

- [resuml](https://www.npmjs.com/package/resuml): CLI tool for working with YAML resumes
- [@jsonresume/schema](https://www.npmjs.com/package/@jsonresume/schema): Official JSON Resume schema validator

## License

ISC License - see the [LICENSE](https://github.com/phoinixi/resuml/blob/main/LICENSE) file for details.

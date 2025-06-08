const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const SCHEMA_URL = 'https://raw.githubusercontent.com/jsonresume/resume-schema/master/schema.json';
const SCHEMA_FILE = 'resume.schema.json';
const OUTPUT_DIR = path.join('src', 'types');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'resume.ts');

function runCommand(command, description) {
  console.log(`⏳ ${description}...`);
  try {
    execSync(command, { stdio: 'inherit' });
    console.log(`✅ ${description} successful!`);
  } catch (error) {
    console.error(`❌ Error during ${description}:`, error.message);
    if (error.stderr) {
      console.error(error.stderr.toString());
    }
    if (error.stdout) {
      console.error(error.stdout.toString());
    }
    process.exit(1);
  }
}

console.log('🚀 Starting type generation process...');

// 1. Fetch the schema
runCommand(`curl -s -L -o ${SCHEMA_FILE} ${SCHEMA_URL}`, 'Fetching latest JSON Resume schema');

// 2. Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  console.log(`⏳ Creating directory ${OUTPUT_DIR}...`);
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`✅ Directory ${OUTPUT_DIR} created.`);
}

// 3. Generate TypeScript types
runCommand(
  `npx json-schema-to-typescript ${SCHEMA_FILE} -o ${OUTPUT_FILE}`,
  'Generating TypeScript types'
);

// 4. Remove the downloaded schema file
console.log(`⏳ Removing temporary schema file ${SCHEMA_FILE}...`);
try {
  fs.unlinkSync(SCHEMA_FILE);
  console.log(`✅ Temporary schema file ${SCHEMA_FILE} removed.`);
} catch (error) {
  console.error(`❌ Error removing temporary schema file ${SCHEMA_FILE}:`, error.message);
  // Non-fatal, so don't exit
}

console.log('🎉 TypeScript types generated successfully from JSON Resume schema!');

/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const { createRequire } = require('module');
global.require = createRequire(process.cwd() + '/package.json');

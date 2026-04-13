# [1.11.0](https://github.com/phoinixi/resuml/compare/v1.10.0...v1.11.0) (2026-04-13)


### Features

* add JD matching to editor, fitAssessment to ATS, fix default resume score ([559066e](https://github.com/phoinixi/resuml/commit/559066e5e3a389abd08d00ebd90ebe5b23b87657))

# [1.10.0](https://github.com/phoinixi/resuml/compare/v1.9.1...v1.10.0) (2026-04-13)


### Features

* add reusable MCP client helper script ([1589d19](https://github.com/phoinixi/resuml/commit/1589d19e5de54b19f24398de8c6226b04e839a2d))

## [1.9.1](https://github.com/phoinixi/resuml/compare/v1.9.0...v1.9.1) (2026-04-13)

# [1.9.0](https://github.com/phoinixi/resuml/compare/v1.8.3...v1.9.0) (2026-04-12)


### Bug Fixes

* **mcp:** remove unnecessary type assertions ([022ea41](https://github.com/phoinixi/resuml/commit/022ea41f4fea0dc92dcdd6080fa865dd1d12f0f8))


### Features

* **mcp:** add resources, prompts, and locale/margin support ([08f0098](https://github.com/phoinixi/resuml/commit/08f00981d8dac28ac35170b305b78a5b2a4397c6))

## [1.8.3](https://github.com/phoinixi/resuml/compare/v1.8.2...v1.8.3) (2026-04-10)


### Bug Fixes

* decode all HTML entities in rendered theme output ([eb67c68](https://github.com/phoinixi/resuml/commit/eb67c681d39e3e778d33d87803a53ec31c272b5f)), closes [#39](https://github.com/phoinixi/resuml/issues/39)

## [1.8.2](https://github.com/phoinixi/resuml/compare/v1.8.1...v1.8.2) (2026-04-10)


### Bug Fixes

* decode escaped HTML entities, not just strip p tag wrappers ([3466a37](https://github.com/phoinixi/resuml/commit/3466a37e92af0e72752f128d236e15ecb4bd5470))

## [1.8.1](https://github.com/phoinixi/resuml/compare/v1.8.0...v1.8.1) (2026-04-10)


### Bug Fixes

* apply HTML cleanup to snapshots too, not just worker output ([48cfb0b](https://github.com/phoinixi/resuml/commit/48cfb0b44bcf13cab00ba0bcefcc2d7f507b140c))

# [1.8.0](https://github.com/phoinixi/resuml/compare/v1.7.6...v1.8.0) (2026-04-10)


### Features

* add MCP server for AI agent resume generation ([29f5499](https://github.com/phoinixi/resuml/commit/29f549937a86df5c4e8e0537662100c8348058f3))

## [1.7.6](https://github.com/phoinixi/resuml/compare/v1.7.5...v1.7.6) (2026-04-10)


### Bug Fixes

* strip escaped p tags from rendered HTML, fix spinner overlay ([c78e05c](https://github.com/phoinixi/resuml/commit/c78e05c4226e68214e7f007ebcc9b9c72f3138c5))

## [1.7.5](https://github.com/phoinixi/resuml/compare/v1.7.4...v1.7.5) (2026-04-10)


### Bug Fixes

* remove server fallback, simplify theme loading to sequential flow ([fe34cc6](https://github.com/phoinixi/resuml/commit/fe34cc682ddffa298b53000596e93de7ef89cc8f))

## [1.7.4](https://github.com/phoinixi/resuml/compare/v1.7.3...v1.7.4) (2026-04-10)


### Bug Fixes

* add process/global polyfill to theme worker ([c3516f1](https://github.com/phoinixi/resuml/commit/c3516f1b0ead9350d3e708d5902c96585826ad25))

## [1.7.3](https://github.com/phoinixi/resuml/compare/v1.7.2...v1.7.3) (2026-04-09)


### Bug Fixes

* add glob/globby/require-glob shims for Handlebars partial loading ([184589e](https://github.com/phoinixi/resuml/commit/184589e43b44f5dfb510f259225e28a7d7bb0ada))

## [1.7.2](https://github.com/phoinixi/resuml/compare/v1.7.1...v1.7.2) (2026-04-09)


### Bug Fixes

* pad resume before sending to theme worker ([b4b6359](https://github.com/phoinixi/resuml/commit/b4b6359c96da762d2109d3c8d166ef9ea22b92ee))

## [1.7.1](https://github.com/phoinixi/resuml/compare/v1.7.0...v1.7.1) (2026-04-09)


### Bug Fixes

* remove server fallback, fall to snapshot on worker crash ([13add8f](https://github.com/phoinixi/resuml/commit/13add8fdebb1b38e28c166d0f6503fb0c6dda3ee))

# [1.7.0](https://github.com/phoinixi/resuml/compare/v1.6.0...v1.7.0) (2026-04-09)


### Features

* pre-bundle all themes for zero-server rendering ([6fac3bf](https://github.com/phoinixi/resuml/commit/6fac3bf0ab6c8103c4e6f79563e36ae97b31704c))

# [1.6.0](https://github.com/phoinixi/resuml/compare/v1.5.2...v1.6.0) (2026-04-09)


### Bug Fixes

* resolve all lint errors in new theme worker files ([2220296](https://github.com/phoinixi/resuml/commit/22202968f8f7a6eb4b1e62a6057cb7000c715d6b))


### Features

* web worker rendering, snapshots, and CSS extraction ([e8969f8](https://github.com/phoinixi/resuml/commit/e8969f8735617a0e06b79a0349a7e163b3f14d92))

## [1.5.2](https://github.com/phoinixi/resuml/compare/v1.5.1...v1.5.2) (2026-04-09)


### Bug Fixes

* embed theme assets in fs shim + strip HTML from stored data ([49d868b](https://github.com/phoinixi/resuml/commit/49d868bae9ffe6550660fcd2dcbe7a7d06b67133))

## [1.5.1](https://github.com/phoinixi/resuml/compare/v1.5.0...v1.5.1) (2026-04-09)


### Bug Fixes

* resolve bundled theme crash + server theme UX ([5a0507a](https://github.com/phoinixi/resuml/commit/5a0507a6687553e953866d793b7829a89ccfddd6))

# [1.5.0](https://github.com/phoinixi/resuml/compare/v1.4.4...v1.5.0) (2026-04-09)


### Bug Fixes

* resolve 7 lint errors ([874db6c](https://github.com/phoinixi/resuml/commit/874db6c639cb69d7e62354f14e4614ca1bd06474))
* restore full theme list + server fallback for non-bundled themes ([8498786](https://github.com/phoinixi/resuml/commit/849878670579411016bc07924c95c7b517c882ed))


### Features

* client-side theme rendering — zero server round-trips ([21e6be0](https://github.com/phoinixi/resuml/commit/21e6be02e084cf8c17b500037d5d9dfaf7a88771))
* pre-install popular themes as deps for instant rendering ([f00d751](https://github.com/phoinixi/resuml/commit/f00d7511a6773f33304533dc90645e07e738941c))

## [1.4.4](https://github.com/phoinixi/resuml/compare/v1.4.3...v1.4.4) (2026-04-09)


### Bug Fixes

* prelink host node_modules before npm install to prevent ENOSPC ([02aedb6](https://github.com/phoinixi/resuml/commit/02aedb6627586e33eba39eb12c91e6b66b9465a3))

## [1.4.3](https://github.com/phoinixi/resuml/compare/v1.4.2...v1.4.3) (2026-04-09)


### Bug Fixes

* only show loading spinner when switching themes, not on content edits ([366854d](https://github.com/phoinixi/resuml/commit/366854d454e6b64752285bed55a8dcd49cd1eb6c))

## [1.4.2](https://github.com/phoinixi/resuml/compare/v1.4.1...v1.4.2) (2026-04-09)


### Bug Fixes

* version-based cache validation, always install deps for themes ([1d4af67](https://github.com/phoinixi/resuml/commit/1d4af67fd59c7d862264ab823de006fa90908b8e))

## [1.4.1](https://github.com/phoinixi/resuml/compare/v1.4.0...v1.4.1) (2026-04-09)


### Bug Fixes

* add repository url to package.json, fix bin entry for npm provenance ([bdc9d2e](https://github.com/phoinixi/resuml/commit/bdc9d2e5cff3f72c35661bed31490596ab0ba450))

# [1.4.0](https://github.com/phoinixi/resuml/compare/v1.3.1...v1.4.0) (2026-04-09)


### Bug Fixes

* add --legacy-peer-deps to theme install for compat ([5ee1285](https://github.com/phoinixi/resuml/commit/5ee1285d0f488e2348a32bdfaa159e28eb2cba32))
* add .js extensions to ESM relative imports in api/ files ([58011eb](https://github.com/phoinixi/resuml/commit/58011eb1d2df7ecb77e4cc99f3071367a20ba02b))
* add createRequire for ESM compat in dev-server ([3c2825e](https://github.com/phoinixi/resuml/commit/3c2825eddf19bad24eeefcb286c7cc0cfe2a2173))
* add createRequire for ESM compat in themeInstaller ([1571154](https://github.com/phoinixi/resuml/commit/157115483d2ff93f31f4b6fac8e4b7f2705ea127))
* add NPM_TOKEN back to release workflow ([b1df744](https://github.com/phoinixi/resuml/commit/b1df7448a2e7753c962c08f01bb3775802b51f17))
* add type module, remove Zod from client, fix TS/lint errors ([5eb943b](https://github.com/phoinixi/resuml/commit/5eb943b2d6550a0ac814bb4161ae2d23ee5056c3))
* add visible color for theme picker version text ([13ad52f](https://github.com/phoinixi/resuml/commit/13ad52f024c3516e076c51802d4a27a169faf6c5))
* allow scripts in preview iframe sandbox for theme compatibility ([e458272](https://github.com/phoinixi/resuml/commit/e4582721f3dfc6562bfb22bc76b2b423402dea25))
* chdir to theme dir during render for relative file reads ([c9d037d](https://github.com/phoinixi/resuml/commit/c9d037d435814abe1e0c5947771f631547c8b6e0))
* check main entry before npm install for fast fail on build-only themes ([d36338f](https://github.com/phoinixi/resuml/commit/d36338f03f0b577ec277b4e5964c3d9fcfd84593))
* clear preview immediately on theme switch, show spinner ([1216bdf](https://github.com/phoinixi/resuml/commit/1216bdf952a03a8d459bfaabdccc6996975a03be))
* cors headers on timeout, remove build step, mobile touch resize ([ab4688c](https://github.com/phoinixi/resuml/commit/ab4688cd744b7170bbf8f8ada0f2c3712501e262))
* eliminate preview flash on resume updates ([1a178e4](https://github.com/phoinixi/resuml/commit/1a178e4ed425b6ae2e478b9f000b8c4f6c04f88c))
* handle async theme render functions, prevent server crashes ([46fa1f6](https://github.com/phoinixi/resuml/commit/46fa1f62a58ec62ee95878cad1fdcc0ca1bd065f))
* lru eviction and npm cache cleanup to prevent /tmp enospc ([58c797a](https://github.com/phoinixi/resuml/commit/58c797a05da3ca2275498750253ccf08f676efb6))
* mark playwright as external in tsup to fix Vercel build ([e29bd4b](https://github.com/phoinixi/resuml/commit/e29bd4b1b6847c8277e4cb5bd5ba20b0e3a288bd))
* move useMemo before early return in AtsPanel ([7de15c4](https://github.com/phoinixi/resuml/commit/7de15c48a15a6577bccd043965d701500570ac25))
* pad resume with safe defaults to prevent theme crashes ([0ac8e79](https://github.com/phoinixi/resuml/commit/0ac8e79302455c5ab958bbcd329bd63c6cde2633))
* padResume only pads basics/location, no empty arrays ([28dbe9d](https://github.com/phoinixi/resuml/commit/28dbe9d9418fbd2eef4f54e673b0ad246f2360c8))
* pass NPM_TOKEN to release job, disable fail issue creation ([474ac06](https://github.com/phoinixi/resuml/commit/474ac0640f3058455444910e8594fd2ca3623489))
* prevent iframe from stealing mouse events during split pane drag ([248e720](https://github.com/phoinixi/resuml/commit/248e720d0fb31c9deb131c377d8b9953fd003006))
* rebuild frontend with getApiBase() for GitHub Pages API routing ([777f42a](https://github.com/phoinixi/resuml/commit/777f42adee157c2a6734b5551361d8991a540322))
* remove non-null assertion in evictOldThemes ([91b4a67](https://github.com/phoinixi/resuml/commit/91b4a67bbc87620976543c8f918b3c73abacb8df))
* remove NPM_TOKEN from workflow, oidc trusted publisher handles auth ([cf4380b](https://github.com/phoinixi/resuml/commit/cf4380b4ba195aef080bf6238d8a38ae98796da1))
* remove stray return statement in dev-server ([a6381b1](https://github.com/phoinixi/resuml/commit/a6381b11ad38412dcfc5a09e786cd50e5c3d3da0))
* replace execFileSync tar with tar npm package for Vercel compat ([f3f0ccf](https://github.com/phoinixi/resuml/commit/f3f0ccf9b15b9337e1aad3cf2d6d688eca572485))
* replace npm --prefix with cwd to avoid npm bug ([09186e0](https://github.com/phoinixi/resuml/commit/09186e02d4d4711bc469ee8c42a74a825fec4ed3))
* replace ugly spinner overlay with subtle progress bar ([c52369a](https://github.com/phoinixi/resuml/commit/c52369a594260ecb99889db3b368c3a60ee34885))
* resolve all lint errors and test failures ([2995339](https://github.com/phoinixi/resuml/commit/2995339989f868a056ad14e0adc07b63b230548c))
* resolve lint errors, auto-build themes that ship source ([65bdaad](https://github.com/phoinixi/resuml/commit/65bdaadda3b95e09da2c595ddd7370750ec81fdd))
* resolve theme crashes, release config, and GitHub Pages API routing ([396e037](https://github.com/phoinixi/resuml/commit/396e0376cb9d8e41077a8630176ed64dcdbcdb89))
* restore sourcemap in dev, improve theme load error handling ([03d6e4f](https://github.com/phoinixi/resuml/commit/03d6e4f900453b81bc611cbe2aa3100883fc924d))
* route API calls through getApiBase in useTheme hook ([4cb24d0](https://github.com/phoinixi/resuml/commit/4cb24d0ed165c32ca2e1c63a07ec4bbece1effb0))
* strip empty arrays from resume before rendering ([d5da846](https://github.com/phoinixi/resuml/commit/d5da846ed4c8cb664281e48128c7445042d43a62))
* symlink lambda node_modules into theme cache dir ([656304d](https://github.com/phoinixi/resuml/commit/656304df87d45ed11f0fc7edb6912289ee1da336))
* try loading theme without deps before npm install ([6c16b83](https://github.com/phoinixi/resuml/commit/6c16b837a021152d9b2b3c50eea099575b88e53f))
* upgrade @semantic-release/npm to v13 to restore oidc support ([b1af4ca](https://github.com/phoinixi/resuml/commit/b1af4ca55048520b73d2fdba7ca268a96e5b382f))
* upgrade semantic-release to v25 which bundles @semantic-release/npm v13 ([b5a79ba](https://github.com/phoinixi/resuml/commit/b5a79bae85512271db6d51828a1a3e2e88127bac))
* use esbuild context() for watch mode in dev server ([50483b0](https://github.com/phoinixi/resuml/commit/50483b020e76f296eeb2e352bc268a5ffd39a0b5))
* use full /usr/bin/tar path in Vercel serverless ([4d575bb](https://github.com/phoinixi/resuml/commit/4d575bb2db2f2c7c887872bdc44ea5f99cd8085c))
* use HOME=/tmp and npm cache /tmp for Vercel Lambda npm install ([0608744](https://github.com/phoinixi/resuml/commit/06087447bf12825f17dbaa0ab47273f3668d7690))
* validate cache by trying require, expose actual load error ([842059a](https://github.com/phoinixi/resuml/commit/842059a0605ac971f24a2de41f66fffb33beceec))


### Features

* add all missing form sections (volunteer, awards, certificates, publications, languages, interests, references, profiles) ([3147d28](https://github.com/phoinixi/resuml/commit/3147d289eccbc49c8eb75f776c8c8ae5b2481c18))
* add ATS scoring engine with generic checks and JD keyword matching ([9966225](https://github.com/phoinixi/resuml/commit/996622515ff81db1aa240327227ab8dbb79e1edd))
* add live resume builder website ([0e9b0c3](https://github.com/phoinixi/resuml/commit/0e9b0c3028ae87af63a12fb08b92c58534800364))
* improve PDF rendering consistency with browser ([7113b7a](https://github.com/phoinixi/resuml/commit/7113b7a8d8208dd2cedd087ca9d94daf19f8f73d))
* react + vercel architecture, strict ts, coding rules refactor ([6d2c44a](https://github.com/phoinixi/resuml/commit/6d2c44aadad6e655d2731656ad5e9952f10cf314))
* rename Form tab to Visual, make it default, swap tab order ([5586807](https://github.com/phoinixi/resuml/commit/5586807d9e56d4fb997ccc8a1753f108a2f7c45d))
* replace emoji icons with Lucide React icons, add download dropdown ([053099e](https://github.com/phoinixi/resuml/commit/053099e7c212e4a0811d9285fd1175f8ac211b89))
* replace npm install with CDN tarball loading for themes ([465b76f](https://github.com/phoinixi/resuml/commit/465b76f229b2ff0067dbb736452cb4d1a54033db))

## [1.3.1](https://github.com/phoinixi/resuml/compare/v1.3.0...v1.3.1) (2026-02-15)

# [1.3.0](https://github.com/phoinixi/resuml/compare/v1.2.6...v1.3.0) (2026-02-15)


### Bug Fixes

* **ci:** bump Node.js to 22 for semantic-release compatibility ([62bac15](https://github.com/phoinixi/resuml/commit/62bac1511cc9d9d394d4ca3e22d74f0202ae32d6))
* **ci:** configure git identity for semantic-release commits ([1343d2d](https://github.com/phoinixi/resuml/commit/1343d2d5f7632882d4792286e5e24188168a3791))
* **ci:** disable husky in release workflow ([8d151cd](https://github.com/phoinixi/resuml/commit/8d151cd4e55854d59463bbd6bc61c84d60dd4d43))
* **ci:** use npm OIDC trusted publishing, remove duplicate releaserc ([178eedf](https://github.com/phoinixi/resuml/commit/178eedfc6385c5ef6ccb3c35a4d2bd905be12f89))


### Features

* add interactive init command to scaffold resume.yaml ([#5](https://github.com/phoinixi/resuml/issues/5)) ([6d289f7](https://github.com/phoinixi/resuml/commit/6d289f7c4f2b0776c16fb52a4fa02c1e62bd4772))
* add PDF export command using Puppeteer ([#6](https://github.com/phoinixi/resuml/issues/6)) ([4e71fec](https://github.com/phoinixi/resuml/commit/4e71fec9afa87e5fc7c46712dd283e698e4fd170))
* add resuml themes command ([f191aec](https://github.com/phoinixi/resuml/commit/f191aeca3d7a0ed7686c3937d4f5af75ce26cf09))

## [1.2.6](https://github.com/phoinixi/resuml/compare/v1.2.5...v1.2.6) (2025-06-22)


### Bug Fixes

* Potential fix for code scanning alert no. 1: Unsafe shell command constructed from library input ([eeb6685](https://github.com/phoinixi/resuml/commit/eeb66858d4aea61215118dbb3e1cb8e9a952c285))
* Potential fix for code scanning alert no. 2: Unsafe shell command constructed from library input ([8a9dcdd](https://github.com/phoinixi/resuml/commit/8a9dcddde7756606e5fce98ffceab714d656e2f3))

## [1.2.5](https://github.com/phoinixi/resuml/compare/v1.2.4...v1.2.5) (2025-06-09)


### Bug Fixes

* ensure robust theme loading and consistent imports in dev command and API ([281e87f](https://github.com/phoinixi/resuml/commit/281e87f1bc209ba575ab33b526c19fe90ebe0d58))

## [1.2.4](https://github.com/phoinixi/resuml/compare/v1.2.3...v1.2.4) (2025-06-08)


### Bug Fixes

* generate and include type declarations for TypeScript consumers ([a9f15c1](https://github.com/phoinixi/resuml/commit/a9f15c1f121c50f0638e01ea34cdc4eb22c4aecb))

## [1.2.3](https://github.com/phoinixi/resuml/compare/v1.2.2...v1.2.3) (2025-06-08)


### Bug Fixes

* remove theme-config support and related code/docs for now ([89f2c77](https://github.com/phoinixi/resuml/commit/89f2c775089d91b03b4cfdd1519697816ba31daf))

## [1.2.2](https://github.com/phoinixi/resuml/compare/v1.2.1...v1.2.2) (2025-06-08)


### Bug Fixes

* ensure type generation and scripts are included for npm publish and development ([019521c](https://github.com/phoinixi/resuml/commit/019521c747d0a82e86f2afa38fb559cb4aaa36bc))

## [1.2.1](https://github.com/phoinixi/resuml/compare/v1.2.0...v1.2.1) (2025-06-08)


### Bug Fixes

* final cleanup and documentation updates ([4b3659b](https://github.com/phoinixi/resuml/commit/4b3659b653e89242f360644673e5574a58e7d080))

# [1.2.0](https://github.com/phoinixi/resuml/compare/v1.1.2...v1.2.0) (2025-05-25)

### Bug Fixes

- configure commitlint to ignore semantic-release commits ([61ed4e4](https://github.com/phoinixi/resuml/commit/61ed4e4d09501efca0dceaddaafc4158115c0d6a))
- disable line length limits in commitlint for semantic-release compatibility ([40471d3](https://github.com/phoinixi/resuml/commit/40471d3ed9e1866fa49a9d4105bcaad63254f56d))

### Features

- convert monorepo to monolith with production tooling ([b08fb15](https://github.com/phoinixi/resuml/commit/b08fb1597606abcb88837e955b382a1286ac5a25))

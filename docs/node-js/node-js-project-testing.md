---
id: node-js-project-testing
title: Node.js Project Quality Checks
sidebar_label: Node.js Project Quality Checks
description: Comprehensive guide for Node.js backend project code quality, linting, formatting, type checking, security, and testing using ESLint, Prettier, TypeScript, Mocha, Chai, and Jest.
tags:
  - Node.js
  - ESLint
  - Prettier
  - TypeScript
  - Testing
---

# Node.js Project Quality Checks

## 1. Code Quality & Standards

### a) Linting & Formatting

Use ESLint with recommended Node.js rules.

```bash
npm install eslint --save-dev
```

```base
# if already installed, check version:
    npx eslint --version
    npx eslint --init
```
```
# Run ESLint with auto-fix
    npx eslint . --fix
```
# Run ESLint on specific directory
```
npx eslint src/components --fix
```
# Check TypeScript files only
```
npx eslint "**/*.{ts,tsx}" --fix

```
### ESLint correct / recommended options for ESLint initialization

| Question | Recommended Option | Reason |
|----------|-----------------|--------|
| What do you want to lint? | javascript, json, jsonc, json5, md, css | Covers all common file types in a JS project, including Markdown and CSS |
| How would you like to use ESLint? | problems | Focus on finding problems; lighter setup if you don’t need full code style enforcement |
| What type of modules does your project use? | script | Use script if you’re not using ES modules (import/export). If your project uses import/export, select ES modules |
| Which framework does your project use? | none | Correct if your project does not use React, Vue, or other frameworks |
| Does your project use TypeScript? | No | Choose No if the project is plain JavaScript; Yes only if using TypeScript |
| Where does your code run? | browser | Choose browser if the code runs in browser; select node if it’s a backend project |
| Which language do you want your configuration file in? | ts | TypeScript config is fine if you want type-safety in ESLint config. Can also choose js or json |
| What flavor of Markdown do you want to lint? | gfm | GitHub Flavored Markdown, standard for most projects |
| Jiti is required for Node.js ``` <24.3.0 ``` to read TypeScript config files. Would you like to add it? | Yes | Recommended if Node.js version ``` < 24.3.0,``` needed to load TS ESLint config |
| Would you like to install dependencies now? | Yes | Installs all necessary ESLint packages automatically |
| Which package manager do you want to use? | npm | Use whichever your project already uses (npm, yarn, or pnpm) |


---


Example ESLint Error
text
Copy code
triline-website/start-server.js
  1:19  error    A `require()` style import is forbidden    @typescript-eslint/no-require-imports
  2:7   warning  'path' is assigned a value but never used  @typescript-eslint/no-unused-vars
  2:14  error    A `require()` style import is forbidden    @typescript-eslint/no-require-imports

✖ 3 problems (2 errors, 1 warning)
b) Prettier for Consistent Formatting
bash
Copy code
npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev
npx eslint src/**/*.ts
npx prettier --check src/**/*.ts
# Save reports
npx eslint src/**/*.ts > eslint-report.txt
npx prettier --check src/**/*.ts > prettier-report.txt
c) Type Checking (TypeScript)
bash
Copy code
# Check types without emitting JS
tsc --noEmit
Installing TypeScript
Globally:

bash
Copy code
sudo npm install -g typescript
tsc --version
Locally:

bash
Copy code
npm install --save-dev typescript
npx tsc --version
tsconfig.json Recommended Settings
json
```
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "lib": ["ES2022"],
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "noImplicitAny": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "baseUrl": "./src",
    "paths": {
      "@/*": ["*"],
      "@/types/*": ["types/*"],
      "@/utils/*": ["utils/*"],
      "@/services/*": ["services/*"]
    },
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts", "**/*.spec.ts"]
}
```
d) Security Linting
Check for vulnerable dependencies:

bash
Copy code
npm audit
Optional: Use eslint-plugin-security for code security linting.

e) Tool Comparison
Feature / Tool	ESLint	Prettier	TypeScript (tsc)
Purpose	Linting & code quality	Code formatting	Type checking & transpiling
Checks	Code style, best practices	Formatting only	Type errors
Enforces	Rules like no-unused-vars, eqeqeq	Semicolons, quotes, line width	Variable types, interfaces
Fixes	Auto-fix with --fix	Auto-format with --write	Cannot fix logic
Language	JS/TS	JS/TS/HTML/CSS/JSON/Markdown	TS only
Configuration	.eslintrc	.prettierrc	tsconfig.json
Output	Errors & warnings	Reformatted code	JS output & type errors

2. Testing
a) Unit Tests (Mocha + Chai)
Install:

bash
Copy code
npm install --save-dev mocha chai ts-node @types/mocha @types/chai
Update package.json:

json
Copy code
```
"scripts": {
  "test": "mocha -r ts-node/register 'src/**/*.spec.ts'"
}
```
Example function: src/utils/math.ts

ts
Copy code
```
export function add(a: number, b: number): number { return a + b; }
export function divide(a: number, b: number) { if(b===0) throw new Error("Cannot divide by zero"); return a/b; }
```
Unit test: src/utils/math.spec.ts

ts
Copy code
```
import { expect } from 'chai';
import { add, divide } from './math';

describe('Math Utils (Mocha + Chai)', () => {
  it('add() returns sum', () => { expect(add(2,3)).to.equal(5); });
  it('divide() returns division', () => { expect(divide(6,2)).to.equal(3); });
  it('divide() throws on zero', () => { expect(() => divide(10,0)).to.throw("Cannot divide by zero"); });
});
```
Run tests:

bash
Copy code
npm test
b) Unit Tests (Jest)
Install:

bash
Copy code
npm install --save-dev jest ts-jest @types/jest
npx ts-jest config:init
Example test: src/utils/math.spec.ts

ts
Copy code
```
import { add, divide } from './math';

describe('Math Utils (Jest)', () => {
  test('add() returns sum', () => { expect(add(2,3)).toBe(5); });
  test('divide() returns division', () => { expect(divide(6,2)).toBe(3); });
  test('divide() throws on zero', () => { expect(() => divide(10,0)).toThrow("Cannot divide by zero"); });
});
```
Run:

bash
Copy code
npx jest
Coverage report:

bash
Copy code
npx jest --coverage > jest-error-report.txt 2>&1
c) Integration Tests
Use Supertest + Jest to test APIs end-to-end including database interactions.

Aim for >80% coverage for critical modules.

This file can be saved as:

bash
Copy code
docs/nodejs-backend-quality.md
It will now:

Show title: Node.js Project Backend Quality Checks

Display sidebar label: Backend Quality Checks

Include description and tags for Docusaurus

Render Markdown correctly on Docusaurus pages


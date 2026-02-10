---
date: 2024-12-19
---

# Mochawesome: Complete Information

Mochawesome is a custom reporter for the Mocha JavaScript testing framework. It generates beautiful, detailed, and easy-to-read HTML and JSON reports for test results. It is widely used in Node.js and JavaScript projects for improving test reporting, especially in automated testing pipelines.

## 1. Key Features

### HTML and JSON Reports

Generates rich HTML reports that are easy to read and share.

Produces JSON files that can be used for further processing or integration with other tools.

### Integration with Mocha

Mochawesome is built specifically for Mocha, one of the most popular testing frameworks for JavaScript.

### Support for Screenshots

Can integrate with tools like Puppeteer or Cypress to include screenshots of failing tests in the reports.

### Aggregated Reports

Supports merging multiple test runs into a single report, which is useful for CI/CD pipelines.

### Interactive UI

HTML reports include collapsible sections, filters, and search, making it easier to analyze results.

### Cross-platform

Works on Windows, Linux, and macOS with Node.js projects.

## 2. Installation

You can install Mochawesome using npm:

```bash
npm install --save-dev mochawesome
```

For generating merged reports:

```bash
npm install --save-dev mochawesome-merge mochawesome-report-generator
```

## 3. Usage with Mocha

Run tests with Mochawesome reporter:

```bash
mocha test/**/*.js --reporter mochawesome
```

This generates:

mochawesome.json — raw test data in JSON format.

mochawesome.html — human-readable HTML report.

Example with options:
```bash
mocha test/**/*.js --reporter mochawesome --reporter-options reportDir=reports,reportFilename=index,quiet=true
```

reportDir → Directory where reports will be saved.

reportFilename → Name of the report file.

quiet → Suppresses console output of Mochawesome.

## 4. Merging Reports (For CI/CD)

If you have multiple test runs (e.g., parallel tests), you can merge reports:

```bash
npx mochawesome-merge reports/*.json > merged-report.json
npx mochawesome-report-generator merged-report.json
```

Generates a single combined HTML report.

## 5. Integration with Cypress

Mochawesome is widely used with Cypress (end-to-end testing framework):

Install required packages:

```bash
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
```

In cypress.json:

```json
{
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/reports",
    "overwrite": false,
    "html": true,
    "json": true
  }
}
```

Generate merged reports after test runs for CI/CD pipelines.

## 6. Advantages

Produces professional and readable reports.

Supports multiple test runs aggregation.

Can integrate screenshots for failing tests.

Works seamlessly with Mocha, Cypress, and CI/CD pipelines.

HTML reports are interactive and filterable.

## 7. Disadvantages / Limitations

Primarily designed for Mocha (requires adapters for other frameworks).

Large test suites can produce heavy HTML reports.

Limited styling customization without modifying the reporter code.

## 8. Example Output Structure

### HTML Report:

Summary of tests: Passed, Failed, Pending.

Detailed view per test suite.

Collapsible sections for failed tests with stack traces.

Optional screenshots.

### JSON Report:

Contains complete hierarchical structure of test suites and tests.

Useful for automation and CI/CD pipelines.

## 9. Common Use Cases

### CI/CD Pipelines

Jenkins, GitHub Actions, GitLab CI can generate automated HTML test reports.

### E2E Testing

Used with Cypress or Selenium for end-to-end test reports.

### Team Collaboration

Share detailed HTML reports with QA and development teams.

## 10. References / Resources

Mochawesome GitHub Repository

Mochawesome NPM Package

Cypress + Mochawesome Integration

✅ Summary:
Mochawesome is a powerful reporting tool for Mocha tests that makes test results readable, shareable, and analyzable, with full support for HTML and JSON reports, merging multiple runs, and integrating screenshots. It is particularly useful in CI/CD pipelines and end-to-end testing environments.
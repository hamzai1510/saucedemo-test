# Cypress E2E Test Assignment

This project contains end-to-end (E2E) tests for the SauceDemo website using Cypress. The tests cover logging in, adding products to the cart, and completing a purchase.

## Project Structure

```
/cypress
  /support
    commands
    e2e
  /integration
    saucedemo.spec.js
cypress.json
package.json
```

## Prerequisites

- Node.js
- npm

## Setup

1. **Clone the Repository**

2. **Install Dependencies**

   ```sh
   npm install
   ```

3. **Install Cypress**

   ```sh
   npm install cypress --save-dev
   ```

## Running Tests

1. **Open Cypress Test Runner**

   ```sh
   npx cypress open
   ```

2. **Run the Tests**

   Click on `saucedemo.cy.js` in the Cypress Test Runner to run the tests.

## Test Scenarios

1. **Login with Valid Credentials**
2. **Add Products to Cart**
3. **Complete the Purchase**

## License

This project is licensed under the MIT License.

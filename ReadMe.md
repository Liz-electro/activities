# Automated test cases for Activities flow

## Technologies:
- JavaScript
- [Cypress](https://www.cypress.io/)

## How to run Cypress tests in cmd with your email and password

```sh
npx cypress run --env "username={$email},password={$password}"   
```

## How to run Cypress tests in Browser with your email and password

```sh
npx cypress run --env "username={$email},password={$password}"
```

## To improve:
- Add login via API
- Delete test data before tests via API
- Add reporting

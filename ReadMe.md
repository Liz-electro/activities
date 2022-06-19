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
- Fix logout between tests issue (now have to login before every test)
- Add login via API
- Delete test data before tests via API
- Add reporting

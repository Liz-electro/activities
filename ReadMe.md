# Automated test cases for Activities flow

I chose Activity feature to write test cases for. 
Create, update are delete (with bulk) tests cases are presented as the most critical ones.


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
- Increase amount of assertions and fields for Create/Update functionality
- Add not via bulk delete functionality
- Add edit via bulk
- Add filtering and sorting
- Add tests for external/ internal integration using stubs
- Fix logout between tests issue (now have to login before every test)
- Add login via API
- Delete test data before tests via API
- Add reporting

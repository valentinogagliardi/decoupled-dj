# decoupled-dj
Companion repo for "Decoupled Django" book.

<p>
  <a href="https://twitter.com/gagliardi_vale" target="_blank">
    <img alt="Twitter: gagliardi_vale" src="https://img.shields.io/twitter/follow/gagliardi_vale?style=social" />
  </a>
  <a href="https://github.com/valentinogagliardi/decoupled-dj/actions" target="_blank">
    <img alt="Test suite" src="https://github.com/valentinogagliardi/decoupled-dj/workflows/Test%20suite/badge.svg" />
  </a>
</p>

## Project structure

The root project folder has a `package.json` which is used only to have Prettier for the whole sub folders.

The `billing` folder holds a Django app with. The app exposes two APIs:

- a REST API
- a GraphQL API

Inside this app there are also:

- a Vue.js frontend talking to the REST API
- a React/GraphQL frontend talking to the GraphQL API

## Goodies

### Using the API with Curl

Create a new invoice:

```bash
curl -X POST --location "http://127.0.0.1:8000/billing/api/invoices/" \
    -H "Accept: */*" \
    -H "Content-Type: application/json" \
    -d "{
          \"user\": 1,
          \"date\": \"2020-12-01\",
          \"due_date\": \"2020-12-30\"
        }"
```

Create a new invoice with items:

```bash
curl -X POST --location "http://127.0.0.1:8000/billing/api/invoices/" \
    -H "Accept: application/json" \
    -H "Content-Type: application/json" \
    -d "{
          \"user\": 1,
          \"date\": \"2020-12-01\",
          \"due_date\": \"2020-12-30\",
          \"items\": [
            {
              \"quantity\": 2,
              \"description\": \"JS consulting\",
              \"price\": 9800.00,
              \"taxed\": false
            },
            {
              \"quantity\": 1,
              \"description\": \"Backend consulting\",
              \"price\": 12000.00,
              \"taxed\": true
            }
          ]
        }"
```

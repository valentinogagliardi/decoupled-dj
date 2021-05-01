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

## Deployment

To deploy the project on your machine, configure the destination host in `deployment/inventory`. On your workstation, install the dependency for deployment from `requirements/deployment.txt`, then launch Ansible with the following command:

```bash
ansible-playbook -i deployment/inventory deployment/site.yml
```

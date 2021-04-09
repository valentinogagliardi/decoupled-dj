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

## Deployment

To deploy the project on a virtual server, configure the destination host in `deployment/inventory`, and the variables at the top of `deployment/site.yml`. On your workstation, install the dependency for deployment from `requirements/deployment.txt`, then launch Ansible with the following command:

```bash
ansible-playbook -i deployment/inventory deployment/site.yml
```

If you want to skip the SSL part, run:

```bash
ansible-playbook -i deployment/inventory deployment/site.yml --skip-tags=ssl
```


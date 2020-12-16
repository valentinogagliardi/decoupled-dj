<template>
  <div class="container">
    <h2>Create a new invoice</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form">
        <div class="form__aside">
          <div class="form__field">
            <label for="user">Select a client</label>
            <select id="user" name="user" required>
              <option value="--">--</option>
              <option v-for="user in users" :key="user.email" :value="user.id">
                {{ user.name }} - {{ user.email }}
              </option>
            </select>
          </div>
          <div class="form__field">
            <label for="date">Date</label>
            <input id="date" name="date" type="date" required />
          </div>
          <div class="form__field">
            <label for="due_date">Due date</label>
            <input id="due_date" name="due_date" type="date" required />
          </div>
        </div>
        <div class="form__main">
          <div class="form__field">
            <label for="quantity">Qty</label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              min="0"
              max="10"
              required
            />
          </div>
          <div class="form__field">
            <label for="description">Description</label>
            <input id="description" name="description" type="text" required />
          </div>
          <div class="form__field">
            <label for="price">Price</label>
            <input
              id="price"
              name="price"
              type="number"
              min="0"
              step="0.01"
              required
            />
          </div>
          <div class="form__field">
            <label for="taxed">Taxed</label>
            <input id="taxed" name="taxed" type="checkbox" />
          </div>
        </div>
      </div>
      <div class="form__buttons">
        <button type="submit">Create invoice</button>
        <button disabled>Send email</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "InvoiceCreate",
  data: function() {
    return {
      users: [
        { id: 1, name: "xadrg", email: "xadrg@acme.io" },
        { id: 2, name: "olcmf", email: "olcmf@zyx.dev" },
        { id: 3, name: "rlcmf", email: "rlcmf@zyx.dev" },
        { id: 4, name: "alcmf", email: "ralcmf@zyx.dev" },
        { id: 5, name: "xlcmf", email: "xalcmf@zyx.dev" }
      ]
    };
  },
  methods: {
    handleSubmit: function(event) {
      const formData = new FormData(event.target);

      const data = Object.fromEntries(formData);
      data.items = [
        {
          quantity: formData.get("quantity"),
          description: formData.get("description"),
          price: formData.get("price"),
          taxed: Boolean(formData.get("taxed"))
        }
      ];

      const csrfToken = this.$cookies.get("csrftoken");

      fetch("/billing/api/invoices/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          if (!response.ok) throw Error(response.statusText);
          return response.json();
        })
        .then(json => {
          console.log(json);
        })
        .catch(err => console.log(err));
    }
  },
  mounted() {
    fetch("/billing/api/clients/")
      .then(response => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then(json => {
        this.users = json;
      });
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&family=Nunito:wght@300;400&display=swap");

h2 {
  /*font-family: "Balsamiq Sans", cursive;*/
  font-size: 2em;
  margin-bottom: 2em;
}

.container {
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: 20px;
  max-width: 900px;
  margin: auto;
}

.form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.form__field {
  margin-bottom: 2em;
}

.form__field label {
  display: block;
  margin-bottom: 0.5em;
}

.form__field input,
select {
  height: 30px;
  margin-bottom: 1em;
  margin-right: 1em;
}

.form__field select {
  font-size: 0.6em;
}

.form__field input[type="date"] {
  font-size: 0.6em;
}

.form__field select {
}

.form__field input {
}

#quantity {
  width: 30px;
}

#description {
}

.form__aside {
  display: flex;
  flex-direction: column;
}

.form__main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: flex-end;

  flex: 1 0 0;
}

@media screen and (min-width: 960px) {
  .form__main {
    flex-wrap: nowrap;
  }

  #description {
    min-width: 400px;
  }
}

.form__buttons {
  float: right;
}

.form__buttons button {
  border: 2px solid #222;
  box-shadow: 5px 5px 0 #222;
  font: inherit;
  font-size: 16px;
  background-color: transparent;
  width: 150px;
  height: 40px;
  margin-right: 0.9em;
  padding: 2px;
}
</style>

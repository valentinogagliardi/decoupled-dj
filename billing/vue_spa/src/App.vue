<template>
  <div id="app">
    <div v-if="isLoggedIn">
      <InvoiceCreate />
    </div>
    <div v-else></div>
  </div>
</template>

<script>
import InvoiceCreate from "@/components/InvoiceCreate";

export default {
  name: "App",
  components: {
    InvoiceCreate
  },
  data: function() {
    return {
      isLoggedIn: false
    };
  },
  methods: {
    redirectToLogin: function() {
      this.isLoggedIn = false;
      window.location.href = "/auth/login/";
    }
  },
  mounted() {
    fetch("/billing/api/clients/")
      .then(response => {
        if (
          !response.ok &&
          response.statusText === "Forbidden"
        ) {
          return response.json();
        }
        this.isLoggedIn = true;
      })
      .then(drfError => {
        switch (drfError?.detail) {
          case "Authentication credentials were not provided.":
            this.redirectToLogin();
            break;
          default:
            break;
        }
      });
  }
};
</script>

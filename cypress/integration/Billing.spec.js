context("Billing app", () => {
  describe("Invoice creation", () => {
    it("can create a new invoice", () => {
      cy.intercept("GET", "/billing/api/clients", {
        statusCode: 200,
        body: [
          {
            id: 1,
            name: "Juliana",
            email: "juliana@acme.io",
          },
        ],
      });

      cy.visit("http://localhost:8080/");
      cy.get("form").within(() => {
        cy.get("select").select(
          "Juliana - juliana@acme.io"
        );

        cy.get("input[name=date]").type("2021-03-15");
        cy.get("input[name=due_date]").type("2021-03-30");
        cy.get("input[type=number]").eq(0).type("1");
        cy.get("input[name=description]").type(
          "Django consulting"
        );
        cy.get("input[type=number]").eq(1).type("5000.00");
      });

      cy.intercept("POST", "/billing/api/invoices", {
        statusCode: 201,
        body: {},
      }).as("createInvoice");

      cy.get("form").submit();
      cy.wait("@createInvoice");
    });
  });
});

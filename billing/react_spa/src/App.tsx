import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import Form from "./Form";
import Select from "./Select";

const GET_CLIENTS = gql`
  query getClients {
    getClients {
      id
      email
    }
  }
`;

const CREATE_INVOICE = gql`
  mutation createInvoice($invoice: InvoiceInput!) {
    createInvoice(invoice: $invoice) {
      date
      state
    }
  }
`;

const App = () => {
  const { loading, data } = useQuery(GET_CLIENTS);
  const [
    createInvoice,
    { error, loading: mutationLoading },
  ] = useMutation(CREATE_INVOICE);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (event.target instanceof HTMLFormElement) {
      const formData = new FormData(event.target);

      const invoice = {
        user: formData.get("user"),
        date: formData.get("date"),
        dueDate: formData.get("dueDate"),
        state: "UNPAID",
        items: [
          {
            quantity: parseInt(
              formData.get("quantity") as string
            ),
            description: formData.get("description"),
            price: formData.get("price"),
            taxed: Boolean(formData.get("taxed")),
          },
        ],
      };

      try {
        const { data } = await createInvoice({
          variables: { invoice },
        });
        // do something with the data
        event.target.reset();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return loading ? (
    <p>Loading ...</p>
  ) : (
    <Form handleSubmit={handleSubmit}>
      <Select
        id="user"
        name="user"
        options={data.getClients}
      />
      <div>
        <label htmlFor="date">Date</label>
        <input id="date" name="date" type="date" required />
      </div>
      <div>
        <label htmlFor="dueDate">Due date</label>
        <input
          id="dueDate"
          name="dueDate"
          type="date"
          required
        />
      </div>
      <div>
        <label htmlFor="quantity">Qty</label>
        <input
          id="quantity"
          name="quantity"
          type="number"
          min="0"
          max="10"
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          name="description"
          type="text"
          required
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          id="price"
          name="price"
          type="number"
          min="0"
          step="0.01"
          required
        />
      </div>
      <div>
        <label htmlFor="taxed">Taxed</label>
        <input id="taxed" name="taxed" type="checkbox" />
      </div>
      {mutationLoading ? (
        <p>Creating the invoice ...</p>
      ) : (
        <button type="submit">CREATE INVOICE</button>
      )}
    </Form>
  );
};

export default App;

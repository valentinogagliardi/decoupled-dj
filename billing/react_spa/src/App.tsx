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
  mutation invoiceCreate($invoice: InvoiceInput!) {
    date
    state
  }
`;

const App = () => {
  const { loading, data } = useQuery(GET_CLIENTS);
  const [createInvoice] = useMutation(CREATE_INVOICE);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    // client.mutate()
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
    </Form>
  );
};

export default App;

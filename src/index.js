import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import GlobalFont from "./styles/fonts";
import GlobalStyle from "./styles/globalStyle";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <h1>Dashboard</h1>
    <p className="description">Welcome back, here's what's happening with SpaceX today.  Below is an overview of the fleets, all launches past and upcoming.</p>
    <section className="card-section">
      <div className="card">
        <h2>4 Rockets</h2>
        <p className="description">View details on the rocket fleet</p>
      </div>
      <div className="card">
        <h2>22 Ships</h2>
        <p className="description">View details on the ship fleet</p>
      </div>
      <div className="card">
        <h2>19 Capsules</h2>
        <p className="description">View details on the capsules</p>
      </div>
    </section>
    <GlobalFont />
    <GlobalStyle />
  </ApolloProvider>,
  document.getElementById("root")
);

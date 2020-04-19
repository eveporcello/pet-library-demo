import React, { Suspense } from "react";
import "./App.css";
import graphql from "babel-plugin-relay/macro";
import {
  RelayEnvironmentProvider,
  preloadQuery,
  usePreloadedQuery
} from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";

function Pet(props) {
  return (
    <div className="App">
      <section>
        <p>Pet</p>
      </section>
    </div>
  );
}

function Root() {
  return (
    <Suspense fallback="Loading...">
      <Pet />
    </Suspense>
  );
}

export default Root;

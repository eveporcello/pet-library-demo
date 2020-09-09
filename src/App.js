import React, { Suspense } from "react";
import "./App.css";
import graphql from "babel-plugin-relay/macro";
import {
  RelayEnvironmentProvider,
  preloadQuery,
  usePreloadedQuery,
} from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";

const PetByIdQuery = graphql`
  query AppPetByIdQuery {
    petById(id: "C-1") {
      id
      name
      photo {
        full
      }
    }
  }
`;

const preloadedQuery = preloadQuery(
  RelayEnvironment,
  PetByIdQuery
);

function App(props) {
  const data = usePreloadedQuery(
    PetByIdQuery,
    props.preloadedQuery
  );

  return (
    <div className="App">
      <section>
        <img src={data.petById.photo.full} />
        <p>{data.petById.name}</p>
      </section>
    </div>
  );
}

function Root() {
  return (
    <RelayEnvironmentProvider
      environment={RelayEnvironment}
    >
      <Suspense fallback="Loading...">
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}
export default Root;

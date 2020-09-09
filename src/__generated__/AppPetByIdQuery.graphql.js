/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppPetByIdQueryVariables = {||};
export type AppPetByIdQueryResponse = {|
  +petById: {|
    +id: string,
    +name: string,
    +photo: ?{|
      +full: ?string
    |},
  |}
|};
export type AppPetByIdQuery = {|
  variables: AppPetByIdQueryVariables,
  response: AppPetByIdQueryResponse,
|};
*/


/*
query AppPetByIdQuery {
  petById(id: "C-1") {
    id
    name
    photo {
      full
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "id",
        "value": "C-1"
      }
    ],
    "concreteType": "Pet",
    "kind": "LinkedField",
    "name": "petById",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Photo",
        "kind": "LinkedField",
        "name": "photo",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "full",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "petById(id:\"C-1\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppPetByIdQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppPetByIdQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "AppPetByIdQuery",
    "operationKind": "query",
    "text": "query AppPetByIdQuery {\n  petById(id: \"C-1\") {\n    id\n    name\n    photo {\n      full\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ea52d7ba841848f82b8e0313b14f5d47';

module.exports = node;

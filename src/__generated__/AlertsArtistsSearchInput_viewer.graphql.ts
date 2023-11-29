/**
 * @generated SignedSource<<60aa3588e2c02f8368f6f1a5f4b7f651>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AlertsArtistsSearchInput_viewer$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ArtistsSearchResultsList_viewer">;
  readonly " $fragmentType": "AlertsArtistsSearchInput_viewer";
};
export type AlertsArtistsSearchInput_viewer$key = {
  readonly " $data"?: AlertsArtistsSearchInput_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"AlertsArtistsSearchInput_viewer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": false,
      "kind": "LocalArgument",
      "name": "hasTerm"
    },
    {
      "defaultValue": "",
      "kind": "LocalArgument",
      "name": "term"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "AlertsArtistsSearchInput_viewer",
  "selections": [
    {
      "condition": "hasTerm",
      "kind": "Condition",
      "passingValue": true,
      "selections": [
        {
          "args": [
            {
              "kind": "Variable",
              "name": "term",
              "variableName": "term"
            }
          ],
          "kind": "FragmentSpread",
          "name": "ArtistsSearchResultsList_viewer"
        }
      ]
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "fd71bea2a17f24f617888d6283e02e65";

export default node;

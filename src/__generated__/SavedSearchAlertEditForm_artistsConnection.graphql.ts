/**
 * @generated SignedSource<<aae02f1283c5712d20915f9f59194ea4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SavedSearchAlertEditForm_artistsConnection$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly internalID: string;
      readonly name: string | null | undefined;
      readonly slug: string;
    } | null | undefined;
  } | null | undefined> | null | undefined;
  readonly " $fragmentType": "SavedSearchAlertEditForm_artistsConnection";
};
export type SavedSearchAlertEditForm_artistsConnection$key = {
  readonly " $data"?: SavedSearchAlertEditForm_artistsConnection$data;
  readonly " $fragmentSpreads": FragmentRefs<"SavedSearchAlertEditForm_artistsConnection">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SavedSearchAlertEditForm_artistsConnection",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ArtistEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Artist",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "internalID",
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
              "kind": "ScalarField",
              "name": "slug",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ArtistConnection",
  "abstractKey": null
};

(node as any).hash = "15ddc9f07fe585f52a1964af2b2872c3";

export default node;

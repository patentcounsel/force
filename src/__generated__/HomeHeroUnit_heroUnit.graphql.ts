/**
 * @generated SignedSource<<6d89fe30431bcf55c28fca4bacaa1a6b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HomeHeroUnit_heroUnit$data = {
  readonly body: string;
  readonly credit: string | null;
  readonly image: {
    readonly imageURL: string | null;
  } | null;
  readonly label: string | null;
  readonly link: {
    readonly text: string;
    readonly url: string;
  };
  readonly title: string;
  readonly " $fragmentType": "HomeHeroUnit_heroUnit";
};
export type HomeHeroUnit_heroUnit$key = {
  readonly " $data"?: HomeHeroUnit_heroUnit$data;
  readonly " $fragmentSpreads": FragmentRefs<"HomeHeroUnit_heroUnit">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HomeHeroUnit_heroUnit",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "body",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "credit",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "image",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "imageURL",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "label",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HeroUnitLink",
      "kind": "LinkedField",
      "name": "link",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "text",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "url",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "HeroUnit",
  "abstractKey": null
};

(node as any).hash = "e3699deaef571ece8f91ec53f779074c";

export default node;

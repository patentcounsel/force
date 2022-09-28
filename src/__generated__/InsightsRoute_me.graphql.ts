/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type InsightsRoute_me = {
    readonly internalID: string;
    readonly myCollectionInfo: {
        readonly artworksCount: number;
        readonly " $fragmentRefs": FragmentRefs<"InsightsOverview_info">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"InsightsAuctionResults_me">;
    readonly " $refType": "InsightsRoute_me";
};
export type InsightsRoute_me$data = InsightsRoute_me;
export type InsightsRoute_me$key = {
    readonly " $data"?: InsightsRoute_me$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"InsightsRoute_me">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InsightsRoute_me",
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
      "concreteType": "MyCollectionInfo",
      "kind": "LinkedField",
      "name": "myCollectionInfo",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "artworksCount",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "InsightsOverview_info"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "InsightsAuctionResults_me"
    }
  ],
  "type": "Me",
  "abstractKey": null
};
(node as any).hash = '52f7c13c0f5d5b900a11b8252d44798c';
export default node;

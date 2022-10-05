/**
 * @generated SignedSource<<8065c2389ce870eab2046068ff39961d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkSidebarCurrentBidInfo_artwork$data = {
  readonly myLotStanding: ReadonlyArray<{
    readonly active_bid: {
      readonly is_winning: boolean | null;
    } | null;
    readonly most_recent_bid: {
      readonly max_bid: {
        readonly display: string | null;
      } | null;
    } | null;
  }> | null;
  readonly sale: {
    readonly internalID: string;
    readonly is_closed: boolean | null;
    readonly is_live_open: boolean | null;
    readonly is_with_buyers_premium: boolean | null;
  } | null;
  readonly sale_artwork: {
    readonly counts: {
      readonly bidder_positions: any | null;
    } | null;
    readonly current_bid: {
      readonly display: string | null;
    } | null;
    readonly endedAt: string | null;
    readonly is_with_reserve: boolean | null;
    readonly reserve_message: string | null;
    readonly reserve_status: string | null;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkSidebar2BiddingClosedMessage_artwork" | "ArtworkSidebarBiddingClosedMessage_artwork">;
  readonly " $fragmentType": "ArtworkSidebarCurrentBidInfo_artwork";
};
export type ArtworkSidebarCurrentBidInfo_artwork$key = {
  readonly " $data"?: ArtworkSidebarCurrentBidInfo_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkSidebarCurrentBidInfo_artwork">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "display",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkSidebarCurrentBidInfo_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Sale",
      "kind": "LinkedField",
      "name": "sale",
      "plural": false,
      "selections": [
        {
          "alias": "is_closed",
          "args": null,
          "kind": "ScalarField",
          "name": "isClosed",
          "storageKey": null
        },
        {
          "alias": "is_live_open",
          "args": null,
          "kind": "ScalarField",
          "name": "isLiveOpen",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "internalID",
          "storageKey": null
        },
        {
          "alias": "is_with_buyers_premium",
          "args": null,
          "kind": "ScalarField",
          "name": "isWithBuyersPremium",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": "sale_artwork",
      "args": null,
      "concreteType": "SaleArtwork",
      "kind": "LinkedField",
      "name": "saleArtwork",
      "plural": false,
      "selections": [
        {
          "alias": "is_with_reserve",
          "args": null,
          "kind": "ScalarField",
          "name": "isWithReserve",
          "storageKey": null
        },
        {
          "alias": "reserve_message",
          "args": null,
          "kind": "ScalarField",
          "name": "reserveMessage",
          "storageKey": null
        },
        {
          "alias": "reserve_status",
          "args": null,
          "kind": "ScalarField",
          "name": "reserveStatus",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "endedAt",
          "storageKey": null
        },
        {
          "alias": "current_bid",
          "args": null,
          "concreteType": "SaleArtworkCurrentBid",
          "kind": "LinkedField",
          "name": "currentBid",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "SaleArtworkCounts",
          "kind": "LinkedField",
          "name": "counts",
          "plural": false,
          "selections": [
            {
              "alias": "bidder_positions",
              "args": null,
              "kind": "ScalarField",
              "name": "bidderPositions",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "live",
          "value": true
        }
      ],
      "concreteType": "LotStanding",
      "kind": "LinkedField",
      "name": "myLotStanding",
      "plural": true,
      "selections": [
        {
          "alias": "active_bid",
          "args": null,
          "concreteType": "BidderPosition",
          "kind": "LinkedField",
          "name": "activeBid",
          "plural": false,
          "selections": [
            {
              "alias": "is_winning",
              "args": null,
              "kind": "ScalarField",
              "name": "isWinning",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": "most_recent_bid",
          "args": null,
          "concreteType": "BidderPosition",
          "kind": "LinkedField",
          "name": "mostRecentBid",
          "plural": false,
          "selections": [
            {
              "alias": "max_bid",
              "args": null,
              "concreteType": "BidderPositionMaxBid",
              "kind": "LinkedField",
              "name": "maxBid",
              "plural": false,
              "selections": (v0/*: any*/),
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "myLotStanding(live:true)"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkSidebarBiddingClosedMessage_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkSidebar2BiddingClosedMessage_artwork"
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};
})();

(node as any).hash = "abe03909bd62c3e2254110fe7b3fd147";

export default node;

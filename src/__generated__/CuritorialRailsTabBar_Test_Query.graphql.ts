/**
 * @generated SignedSource<<1856a1f91d1477fe333ce45c186d7fb4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CuritorialRailsTabBar_Test_Query$variables = {};
export type CuritorialRailsTabBar_Test_Query$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"CuritorialRailsTabBar_viewer">;
  } | null;
};
export type CuritorialRailsTabBar_Test_Query = {
  response: CuritorialRailsTabBar_Test_Query$data;
  variables: CuritorialRailsTabBar_Test_Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "Literal",
  "name": "first",
  "value": 50
},
v1 = {
  "kind": "Literal",
  "name": "includeArtworksByFollowedArtists",
  "value": true
},
v2 = {
  "kind": "Literal",
  "name": "isAuction",
  "value": true
},
v3 = {
  "kind": "Literal",
  "name": "liveSale",
  "value": true
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "date",
  "storageKey": null
},
v9 = {
  "alias": "sale_message",
  "args": null,
  "kind": "ScalarField",
  "name": "saleMessage",
  "storageKey": null
},
v10 = {
  "alias": "cultural_maker",
  "args": null,
  "kind": "ScalarField",
  "name": "culturalMaker",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "concreteType": "Artist",
  "kind": "LinkedField",
  "name": "artist",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ArtistTargetSupply",
      "kind": "LinkedField",
      "name": "targetSupply",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isP1",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v11/*: any*/)
  ],
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "concreteType": "ArtworkPriceInsights",
  "kind": "LinkedField",
  "name": "marketPriceInsights",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "demandRank",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v14 = [
  {
    "kind": "Literal",
    "name": "shallow",
    "value": true
  }
],
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": (v14/*: any*/),
  "concreteType": "Artist",
  "kind": "LinkedField",
  "name": "artists",
  "plural": true,
  "selections": [
    (v11/*: any*/),
    (v6/*: any*/),
    (v15/*: any*/)
  ],
  "storageKey": "artists(shallow:true)"
},
v17 = {
  "alias": "collecting_institution",
  "args": null,
  "kind": "ScalarField",
  "name": "collectingInstitution",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": (v14/*: any*/),
  "concreteType": "Partner",
  "kind": "LinkedField",
  "name": "partner",
  "plural": false,
  "selections": [
    (v15/*: any*/),
    (v6/*: any*/),
    (v11/*: any*/)
  ],
  "storageKey": "partner(shallow:true)"
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endAt",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cascadingEndTimeIntervalMinutes",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "extendedBiddingIntervalMinutes",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "startAt",
  "storageKey": null
},
v23 = {
  "alias": "is_auction",
  "args": null,
  "kind": "ScalarField",
  "name": "isAuction",
  "storageKey": null
},
v24 = {
  "alias": "is_closed",
  "args": null,
  "kind": "ScalarField",
  "name": "isClosed",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lotLabel",
  "storageKey": null
},
v26 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "display",
    "storageKey": null
  }
],
v27 = {
  "alias": "sale_artwork",
  "args": null,
  "concreteType": "SaleArtwork",
  "kind": "LinkedField",
  "name": "saleArtwork",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "lotID",
      "storageKey": null
    },
    (v25/*: any*/),
    (v19/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "extendedBiddingEndAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "formattedEndDateTime",
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
    },
    {
      "alias": "highest_bid",
      "args": null,
      "concreteType": "SaleArtworkHighestBid",
      "kind": "LinkedField",
      "name": "highestBid",
      "plural": false,
      "selections": (v26/*: any*/),
      "storageKey": null
    },
    {
      "alias": "opening_bid",
      "args": null,
      "concreteType": "SaleArtworkOpeningBid",
      "kind": "LinkedField",
      "name": "openingBid",
      "plural": false,
      "selections": (v26/*: any*/),
      "storageKey": null
    },
    (v11/*: any*/)
  ],
  "storageKey": null
},
v28 = {
  "alias": "is_saved",
  "args": null,
  "kind": "ScalarField",
  "name": "isSaved",
  "storageKey": null
},
v29 = [
  (v15/*: any*/),
  (v11/*: any*/)
],
v30 = {
  "alias": null,
  "args": null,
  "concreteType": "AttributionClass",
  "kind": "LinkedField",
  "name": "attributionClass",
  "plural": false,
  "selections": (v29/*: any*/),
  "storageKey": null
},
v31 = {
  "alias": null,
  "args": null,
  "concreteType": "ArtworkMedium",
  "kind": "LinkedField",
  "name": "mediumType",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Gene",
      "kind": "LinkedField",
      "name": "filterGene",
      "plural": false,
      "selections": (v29/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
},
v32 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v33 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v34 = {
  "alias": null,
  "args": null,
  "concreteType": "Image",
  "kind": "LinkedField",
  "name": "image",
  "plural": false,
  "selections": [
    {
      "alias": "src",
      "args": [
        {
          "kind": "Literal",
          "name": "version",
          "value": [
            "normalized",
            "larger",
            "large"
          ]
        }
      ],
      "kind": "ScalarField",
      "name": "url",
      "storageKey": "url(version:[\"normalized\",\"larger\",\"large\"])"
    },
    (v32/*: any*/),
    (v33/*: any*/)
  ],
  "storageKey": null
},
v35 = {
  "alias": null,
  "args": null,
  "concreteType": "Artwork",
  "kind": "LinkedField",
  "name": "node",
  "plural": false,
  "selections": [
    (v4/*: any*/),
    (v5/*: any*/),
    (v6/*: any*/),
    (v7/*: any*/),
    (v8/*: any*/),
    (v9/*: any*/),
    (v10/*: any*/),
    (v12/*: any*/),
    (v13/*: any*/),
    (v16/*: any*/),
    (v17/*: any*/),
    (v18/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Sale",
      "kind": "LinkedField",
      "name": "sale",
      "plural": false,
      "selections": [
        (v19/*: any*/),
        (v20/*: any*/),
        (v21/*: any*/),
        (v22/*: any*/),
        (v23/*: any*/),
        (v24/*: any*/),
        (v11/*: any*/)
      ],
      "storageKey": null
    },
    (v27/*: any*/),
    (v11/*: any*/),
    (v28/*: any*/),
    (v30/*: any*/),
    (v31/*: any*/),
    (v34/*: any*/)
  ],
  "storageKey": null
},
v36 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "src",
  "storageKey": null
},
v37 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "srcSet",
  "storageKey": null
},
v38 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "SaleArtworksConnection"
},
v39 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "FormattedNumber"
},
v40 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v41 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Sale"
},
v42 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Image"
},
v43 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "CroppedImageUrl"
},
v44 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v45 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v46 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Partner"
},
v47 = {
  "enumValues": null,
  "nullable": true,
  "plural": true,
  "type": "SaleArtwork"
},
v48 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Artwork"
},
v49 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Int"
},
v50 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
},
v51 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Int"
},
v52 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Artist"
},
v53 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "ArtistTargetSupply"
},
v54 = {
  "enumValues": null,
  "nullable": true,
  "plural": true,
  "type": "Artist"
},
v55 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "AttributionClass"
},
v56 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "ArtworkPriceInsights"
},
v57 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Float"
},
v58 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "ArtworkMedium"
},
v59 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Gene"
},
v60 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "SaleArtwork"
},
v61 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "SaleArtworkCounts"
},
v62 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "SaleArtworkHighestBid"
},
v63 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "SaleArtworkOpeningBid"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CuritorialRailsTabBar_Test_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CuritorialRailsTabBar_viewer"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CuritorialRailsTabBar_Test_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": [
              (v0/*: any*/),
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "concreteType": "SaleArtworksConnection",
            "kind": "LinkedField",
            "name": "saleArtworksConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SaleArtwork",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  (v35/*: any*/),
                  (v11/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "saleArtworksConnection(first:50,includeArtworksByFollowedArtists:true,isAuction:true,liveSale:true)"
          },
          {
            "alias": "trendingLotsConnection",
            "args": [
              {
                "kind": "Literal",
                "name": "biddableSale",
                "value": true
              },
              {
                "kind": "Literal",
                "name": "estimateRange",
                "value": "5_000_00-*"
              },
              {
                "kind": "Literal",
                "name": "first",
                "value": 10
              },
              {
                "kind": "Literal",
                "name": "sort",
                "value": "-bidder_positions_count"
              }
            ],
            "concreteType": "SaleArtworksConnection",
            "kind": "LinkedField",
            "name": "saleArtworksConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SaleArtwork",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "SaleArtworkCounts",
                    "kind": "LinkedField",
                    "name": "counts",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "bidderPositions",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Artwork",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Sale",
                        "kind": "LinkedField",
                        "name": "sale",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "isClosed",
                            "storageKey": null
                          },
                          (v11/*: any*/),
                          (v19/*: any*/),
                          (v20/*: any*/),
                          (v21/*: any*/),
                          (v22/*: any*/),
                          (v23/*: any*/),
                          (v24/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/),
                      (v16/*: any*/),
                      (v17/*: any*/),
                      (v18/*: any*/),
                      (v27/*: any*/),
                      (v11/*: any*/),
                      (v28/*: any*/),
                      (v30/*: any*/),
                      (v31/*: any*/),
                      (v34/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v11/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "saleArtworksConnection(biddableSale:true,estimateRange:\"5_000_00-*\",first:10,sort:\"-bidder_positions_count\")"
          },
          {
            "alias": "standoutLotsRailConnection",
            "args": [
              (v0/*: any*/),
              {
                "kind": "Literal",
                "name": "forSale",
                "value": true
              },
              {
                "kind": "Literal",
                "name": "geneIDs",
                "value": [
                  "our-top-auction-lots"
                ]
              }
            ],
            "concreteType": "FilterArtworksConnection",
            "kind": "LinkedField",
            "name": "artworksConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "FilterArtworksEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  (v35/*: any*/)
                ],
                "storageKey": null
              },
              (v11/*: any*/)
            ],
            "storageKey": "artworksConnection(first:50,forSale:true,geneIDs:[\"our-top-auction-lots\"])"
          },
          {
            "alias": "followedArtistsInAuction",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 1
              },
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "concreteType": "SaleArtworksConnection",
            "kind": "LinkedField",
            "name": "saleArtworksConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "FilterSaleArtworksCounts",
                "kind": "LinkedField",
                "name": "counts",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "total",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "saleArtworksConnection(first:1,includeArtworksByFollowedArtists:true,isAuction:true,liveSale:true)"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Me",
            "kind": "LinkedField",
            "name": "me",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "MyBids",
                "kind": "LinkedField",
                "name": "myBids",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MyBid",
                    "kind": "LinkedField",
                    "name": "active",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Sale",
                        "kind": "LinkedField",
                        "name": "sale",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "coverImage",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "height",
                                    "value": 100
                                  },
                                  {
                                    "kind": "Literal",
                                    "name": "version",
                                    "value": [
                                      "source",
                                      "wide",
                                      "large_rectangle"
                                    ]
                                  },
                                  {
                                    "kind": "Literal",
                                    "name": "width",
                                    "value": 330
                                  }
                                ],
                                "concreteType": "CroppedImageUrl",
                                "kind": "LinkedField",
                                "name": "cropped",
                                "plural": false,
                                "selections": [
                                  (v36/*: any*/),
                                  (v37/*: any*/)
                                ],
                                "storageKey": "cropped(height:100,version:[\"source\",\"wide\",\"large_rectangle\"],width:330)"
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "formattedStartDateTime",
                            "storageKey": null
                          },
                          (v15/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Partner",
                            "kind": "LinkedField",
                            "name": "partner",
                            "plural": false,
                            "selections": (v29/*: any*/),
                            "storageKey": null
                          },
                          (v11/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "SaleArtwork",
                        "kind": "LinkedField",
                        "name": "saleArtworks",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Artwork",
                            "kind": "LinkedField",
                            "name": "artwork",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "artistNames",
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
                                    "args": [
                                      {
                                        "kind": "Literal",
                                        "name": "height",
                                        "value": 55
                                      },
                                      {
                                        "kind": "Literal",
                                        "name": "width",
                                        "value": 55
                                      }
                                    ],
                                    "concreteType": "CroppedImageUrl",
                                    "kind": "LinkedField",
                                    "name": "cropped",
                                    "plural": false,
                                    "selections": [
                                      (v36/*: any*/),
                                      (v37/*: any*/),
                                      (v32/*: any*/),
                                      (v33/*: any*/)
                                    ],
                                    "storageKey": "cropped(height:55,width:55)"
                                  }
                                ],
                                "storageKey": null
                              },
                              (v11/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "estimate",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "SaleArtworkCurrentBid",
                            "kind": "LinkedField",
                            "name": "currentBid",
                            "plural": false,
                            "selections": (v26/*: any*/),
                            "storageKey": null
                          },
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "isHighestBidder",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "isWatching",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CausalityLotState",
                            "kind": "LinkedField",
                            "name": "lotState",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "bidCount",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Money",
                                "kind": "LinkedField",
                                "name": "sellingPrice",
                                "plural": false,
                                "selections": (v26/*: any*/),
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          (v25/*: any*/),
                          (v5/*: any*/),
                          (v11/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v11/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "acb9e99d1325f01f597bf69fb1b678b8",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "viewer": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Viewer"
        },
        "viewer.followedArtistsInAuction": (v38/*: any*/),
        "viewer.followedArtistsInAuction.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FilterSaleArtworksCounts"
        },
        "viewer.followedArtistsInAuction.counts.total": (v39/*: any*/),
        "viewer.me": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Me"
        },
        "viewer.me.id": (v40/*: any*/),
        "viewer.me.myBids": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "MyBids"
        },
        "viewer.me.myBids.active": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "MyBid"
        },
        "viewer.me.myBids.active.sale": (v41/*: any*/),
        "viewer.me.myBids.active.sale.coverImage": (v42/*: any*/),
        "viewer.me.myBids.active.sale.coverImage.cropped": (v43/*: any*/),
        "viewer.me.myBids.active.sale.coverImage.cropped.src": (v44/*: any*/),
        "viewer.me.myBids.active.sale.coverImage.cropped.srcSet": (v44/*: any*/),
        "viewer.me.myBids.active.sale.formattedStartDateTime": (v45/*: any*/),
        "viewer.me.myBids.active.sale.id": (v40/*: any*/),
        "viewer.me.myBids.active.sale.name": (v45/*: any*/),
        "viewer.me.myBids.active.sale.partner": (v46/*: any*/),
        "viewer.me.myBids.active.sale.partner.id": (v40/*: any*/),
        "viewer.me.myBids.active.sale.partner.name": (v45/*: any*/),
        "viewer.me.myBids.active.sale.slug": (v40/*: any*/),
        "viewer.me.myBids.active.saleArtworks": (v47/*: any*/),
        "viewer.me.myBids.active.saleArtworks.artwork": (v48/*: any*/),
        "viewer.me.myBids.active.saleArtworks.artwork.artistNames": (v45/*: any*/),
        "viewer.me.myBids.active.saleArtworks.artwork.id": (v40/*: any*/),
        "viewer.me.myBids.active.saleArtworks.artwork.image": (v42/*: any*/),
        "viewer.me.myBids.active.saleArtworks.artwork.image.cropped": (v43/*: any*/),
        "viewer.me.myBids.active.saleArtworks.artwork.image.cropped.height": (v49/*: any*/),
        "viewer.me.myBids.active.saleArtworks.artwork.image.cropped.src": (v44/*: any*/),
        "viewer.me.myBids.active.saleArtworks.artwork.image.cropped.srcSet": (v44/*: any*/),
        "viewer.me.myBids.active.saleArtworks.artwork.image.cropped.width": (v49/*: any*/),
        "viewer.me.myBids.active.saleArtworks.currentBid": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCurrentBid"
        },
        "viewer.me.myBids.active.saleArtworks.currentBid.display": (v45/*: any*/),
        "viewer.me.myBids.active.saleArtworks.estimate": (v45/*: any*/),
        "viewer.me.myBids.active.saleArtworks.id": (v40/*: any*/),
        "viewer.me.myBids.active.saleArtworks.internalID": (v40/*: any*/),
        "viewer.me.myBids.active.saleArtworks.isHighestBidder": (v50/*: any*/),
        "viewer.me.myBids.active.saleArtworks.isWatching": (v50/*: any*/),
        "viewer.me.myBids.active.saleArtworks.lotLabel": (v45/*: any*/),
        "viewer.me.myBids.active.saleArtworks.lotState": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CausalityLotState"
        },
        "viewer.me.myBids.active.saleArtworks.lotState.bidCount": (v51/*: any*/),
        "viewer.me.myBids.active.saleArtworks.lotState.sellingPrice": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Money"
        },
        "viewer.me.myBids.active.saleArtworks.lotState.sellingPrice.display": (v45/*: any*/),
        "viewer.me.myBids.active.saleArtworks.slug": (v40/*: any*/),
        "viewer.saleArtworksConnection": (v38/*: any*/),
        "viewer.saleArtworksConnection.edges": (v47/*: any*/),
        "viewer.saleArtworksConnection.edges.id": (v40/*: any*/),
        "viewer.saleArtworksConnection.edges.node": (v48/*: any*/),
        "viewer.saleArtworksConnection.edges.node.artist": (v52/*: any*/),
        "viewer.saleArtworksConnection.edges.node.artist.id": (v40/*: any*/),
        "viewer.saleArtworksConnection.edges.node.artist.targetSupply": (v53/*: any*/),
        "viewer.saleArtworksConnection.edges.node.artist.targetSupply.isP1": (v50/*: any*/),
        "viewer.saleArtworksConnection.edges.node.artists": (v54/*: any*/),
        "viewer.saleArtworksConnection.edges.node.artists.href": (v45/*: any*/),
        "viewer.saleArtworksConnection.edges.node.artists.id": (v40/*: any*/),
        "viewer.saleArtworksConnection.edges.node.artists.name": (v45/*: any*/),
        "viewer.saleArtworksConnection.edges.node.attributionClass": (v55/*: any*/),
        "viewer.saleArtworksConnection.edges.node.attributionClass.id": (v40/*: any*/),
        "viewer.saleArtworksConnection.edges.node.attributionClass.name": (v45/*: any*/),
        "viewer.saleArtworksConnection.edges.node.collecting_institution": (v45/*: any*/),
        "viewer.saleArtworksConnection.edges.node.cultural_maker": (v45/*: any*/),
        "viewer.saleArtworksConnection.edges.node.date": (v45/*: any*/),
        "viewer.saleArtworksConnection.edges.node.href": (v45/*: any*/),
        "viewer.saleArtworksConnection.edges.node.id": (v40/*: any*/),
        "viewer.saleArtworksConnection.edges.node.image": (v42/*: any*/),
        "viewer.saleArtworksConnection.edges.node.image.height": (v51/*: any*/),
        "viewer.saleArtworksConnection.edges.node.image.src": (v45/*: any*/),
        "viewer.saleArtworksConnection.edges.node.image.width": (v51/*: any*/),
        "viewer.saleArtworksConnection.edges.node.internalID": (v40/*: any*/),
        "viewer.saleArtworksConnection.edges.node.is_saved": (v50/*: any*/),
        "viewer.saleArtworksConnection.edges.node.marketPriceInsights": (v56/*: any*/),
        "viewer.saleArtworksConnection.edges.node.marketPriceInsights.demandRank": (v57/*: any*/),
        "viewer.saleArtworksConnection.edges.node.mediumType": (v58/*: any*/),
        "viewer.saleArtworksConnection.edges.node.mediumType.filterGene": (v59/*: any*/),
        "viewer.saleArtworksConnection.edges.node.mediumType.filterGene.id": (v40/*: any*/),
        "viewer.saleArtworksConnection.edges.node.mediumType.filterGene.name": (v45/*: any*/),
        "viewer.saleArtworksConnection.edges.node.partner": (v46/*: any*/),
        "viewer.saleArtworksConnection.edges.node.partner.href": (v45/*: any*/),
        "viewer.saleArtworksConnection.edges.node.partner.id": (v40/*: any*/),
        "viewer.saleArtworksConnection.edges.node.partner.name": (v45/*: any*/),
        "viewer.saleArtworksConnection.edges.node.sale": (v41/*: any*/),
        "viewer.saleArtworksConnection.edges.node.sale.cascadingEndTimeIntervalMinutes": (v51/*: any*/),
        "viewer.saleArtworksConnection.edges.node.sale.endAt": (v45/*: any*/),
        "viewer.saleArtworksConnection.edges.node.sale.extendedBiddingIntervalMinutes": (v51/*: any*/),
        "viewer.saleArtworksConnection.edges.node.sale.id": (v40/*: any*/),
        "viewer.saleArtworksConnection.edges.node.sale.is_auction": (v50/*: any*/),
        "viewer.saleArtworksConnection.edges.node.sale.is_closed": (v50/*: any*/),
        "viewer.saleArtworksConnection.edges.node.sale.startAt": (v45/*: any*/),
        "viewer.saleArtworksConnection.edges.node.sale_artwork": (v60/*: any*/),
        "viewer.saleArtworksConnection.edges.node.sale_artwork.counts": (v61/*: any*/),
        "viewer.saleArtworksConnection.edges.node.sale_artwork.counts.bidder_positions": (v39/*: any*/),
        "viewer.saleArtworksConnection.edges.node.sale_artwork.endAt": (v45/*: any*/),
        "viewer.saleArtworksConnection.edges.node.sale_artwork.extendedBiddingEndAt": (v45/*: any*/),
        "viewer.saleArtworksConnection.edges.node.sale_artwork.formattedEndDateTime": (v45/*: any*/),
        "viewer.saleArtworksConnection.edges.node.sale_artwork.highest_bid": (v62/*: any*/),
        "viewer.saleArtworksConnection.edges.node.sale_artwork.highest_bid.display": (v45/*: any*/),
        "viewer.saleArtworksConnection.edges.node.sale_artwork.id": (v40/*: any*/),
        "viewer.saleArtworksConnection.edges.node.sale_artwork.lotID": (v45/*: any*/),
        "viewer.saleArtworksConnection.edges.node.sale_artwork.lotLabel": (v45/*: any*/),
        "viewer.saleArtworksConnection.edges.node.sale_artwork.opening_bid": (v63/*: any*/),
        "viewer.saleArtworksConnection.edges.node.sale_artwork.opening_bid.display": (v45/*: any*/),
        "viewer.saleArtworksConnection.edges.node.sale_message": (v45/*: any*/),
        "viewer.saleArtworksConnection.edges.node.slug": (v40/*: any*/),
        "viewer.saleArtworksConnection.edges.node.title": (v45/*: any*/),
        "viewer.standoutLotsRailConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FilterArtworksConnection"
        },
        "viewer.standoutLotsRailConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "FilterArtworksEdge"
        },
        "viewer.standoutLotsRailConnection.edges.node": (v48/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.artist": (v52/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.artist.id": (v40/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.artist.targetSupply": (v53/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.artist.targetSupply.isP1": (v50/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.artists": (v54/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.artists.href": (v45/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.artists.id": (v40/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.artists.name": (v45/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.attributionClass": (v55/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.attributionClass.id": (v40/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.attributionClass.name": (v45/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.collecting_institution": (v45/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.cultural_maker": (v45/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.date": (v45/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.href": (v45/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.id": (v40/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.image": (v42/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.image.height": (v51/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.image.src": (v45/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.image.width": (v51/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.internalID": (v40/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.is_saved": (v50/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.marketPriceInsights": (v56/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.marketPriceInsights.demandRank": (v57/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.mediumType": (v58/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.mediumType.filterGene": (v59/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.mediumType.filterGene.id": (v40/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.mediumType.filterGene.name": (v45/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.partner": (v46/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.partner.href": (v45/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.partner.id": (v40/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.partner.name": (v45/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.sale": (v41/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.sale.cascadingEndTimeIntervalMinutes": (v51/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.sale.endAt": (v45/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.sale.extendedBiddingIntervalMinutes": (v51/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.sale.id": (v40/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.sale.is_auction": (v50/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.sale.is_closed": (v50/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.sale.startAt": (v45/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.sale_artwork": (v60/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.sale_artwork.counts": (v61/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.sale_artwork.counts.bidder_positions": (v39/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.sale_artwork.endAt": (v45/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.sale_artwork.extendedBiddingEndAt": (v45/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.sale_artwork.formattedEndDateTime": (v45/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.sale_artwork.highest_bid": (v62/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.sale_artwork.highest_bid.display": (v45/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.sale_artwork.id": (v40/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.sale_artwork.lotID": (v45/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.sale_artwork.lotLabel": (v45/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.sale_artwork.opening_bid": (v63/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.sale_artwork.opening_bid.display": (v45/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.sale_message": (v45/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.slug": (v40/*: any*/),
        "viewer.standoutLotsRailConnection.edges.node.title": (v45/*: any*/),
        "viewer.standoutLotsRailConnection.id": (v40/*: any*/),
        "viewer.trendingLotsConnection": (v38/*: any*/),
        "viewer.trendingLotsConnection.edges": (v47/*: any*/),
        "viewer.trendingLotsConnection.edges.counts": (v61/*: any*/),
        "viewer.trendingLotsConnection.edges.counts.bidderPositions": (v39/*: any*/),
        "viewer.trendingLotsConnection.edges.id": (v40/*: any*/),
        "viewer.trendingLotsConnection.edges.node": (v48/*: any*/),
        "viewer.trendingLotsConnection.edges.node.artist": (v52/*: any*/),
        "viewer.trendingLotsConnection.edges.node.artist.id": (v40/*: any*/),
        "viewer.trendingLotsConnection.edges.node.artist.targetSupply": (v53/*: any*/),
        "viewer.trendingLotsConnection.edges.node.artist.targetSupply.isP1": (v50/*: any*/),
        "viewer.trendingLotsConnection.edges.node.artists": (v54/*: any*/),
        "viewer.trendingLotsConnection.edges.node.artists.href": (v45/*: any*/),
        "viewer.trendingLotsConnection.edges.node.artists.id": (v40/*: any*/),
        "viewer.trendingLotsConnection.edges.node.artists.name": (v45/*: any*/),
        "viewer.trendingLotsConnection.edges.node.attributionClass": (v55/*: any*/),
        "viewer.trendingLotsConnection.edges.node.attributionClass.id": (v40/*: any*/),
        "viewer.trendingLotsConnection.edges.node.attributionClass.name": (v45/*: any*/),
        "viewer.trendingLotsConnection.edges.node.collecting_institution": (v45/*: any*/),
        "viewer.trendingLotsConnection.edges.node.cultural_maker": (v45/*: any*/),
        "viewer.trendingLotsConnection.edges.node.date": (v45/*: any*/),
        "viewer.trendingLotsConnection.edges.node.href": (v45/*: any*/),
        "viewer.trendingLotsConnection.edges.node.id": (v40/*: any*/),
        "viewer.trendingLotsConnection.edges.node.image": (v42/*: any*/),
        "viewer.trendingLotsConnection.edges.node.image.height": (v51/*: any*/),
        "viewer.trendingLotsConnection.edges.node.image.src": (v45/*: any*/),
        "viewer.trendingLotsConnection.edges.node.image.width": (v51/*: any*/),
        "viewer.trendingLotsConnection.edges.node.internalID": (v40/*: any*/),
        "viewer.trendingLotsConnection.edges.node.is_saved": (v50/*: any*/),
        "viewer.trendingLotsConnection.edges.node.marketPriceInsights": (v56/*: any*/),
        "viewer.trendingLotsConnection.edges.node.marketPriceInsights.demandRank": (v57/*: any*/),
        "viewer.trendingLotsConnection.edges.node.mediumType": (v58/*: any*/),
        "viewer.trendingLotsConnection.edges.node.mediumType.filterGene": (v59/*: any*/),
        "viewer.trendingLotsConnection.edges.node.mediumType.filterGene.id": (v40/*: any*/),
        "viewer.trendingLotsConnection.edges.node.mediumType.filterGene.name": (v45/*: any*/),
        "viewer.trendingLotsConnection.edges.node.partner": (v46/*: any*/),
        "viewer.trendingLotsConnection.edges.node.partner.href": (v45/*: any*/),
        "viewer.trendingLotsConnection.edges.node.partner.id": (v40/*: any*/),
        "viewer.trendingLotsConnection.edges.node.partner.name": (v45/*: any*/),
        "viewer.trendingLotsConnection.edges.node.sale": (v41/*: any*/),
        "viewer.trendingLotsConnection.edges.node.sale.cascadingEndTimeIntervalMinutes": (v51/*: any*/),
        "viewer.trendingLotsConnection.edges.node.sale.endAt": (v45/*: any*/),
        "viewer.trendingLotsConnection.edges.node.sale.extendedBiddingIntervalMinutes": (v51/*: any*/),
        "viewer.trendingLotsConnection.edges.node.sale.id": (v40/*: any*/),
        "viewer.trendingLotsConnection.edges.node.sale.isClosed": (v50/*: any*/),
        "viewer.trendingLotsConnection.edges.node.sale.is_auction": (v50/*: any*/),
        "viewer.trendingLotsConnection.edges.node.sale.is_closed": (v50/*: any*/),
        "viewer.trendingLotsConnection.edges.node.sale.startAt": (v45/*: any*/),
        "viewer.trendingLotsConnection.edges.node.sale_artwork": (v60/*: any*/),
        "viewer.trendingLotsConnection.edges.node.sale_artwork.counts": (v61/*: any*/),
        "viewer.trendingLotsConnection.edges.node.sale_artwork.counts.bidder_positions": (v39/*: any*/),
        "viewer.trendingLotsConnection.edges.node.sale_artwork.endAt": (v45/*: any*/),
        "viewer.trendingLotsConnection.edges.node.sale_artwork.extendedBiddingEndAt": (v45/*: any*/),
        "viewer.trendingLotsConnection.edges.node.sale_artwork.formattedEndDateTime": (v45/*: any*/),
        "viewer.trendingLotsConnection.edges.node.sale_artwork.highest_bid": (v62/*: any*/),
        "viewer.trendingLotsConnection.edges.node.sale_artwork.highest_bid.display": (v45/*: any*/),
        "viewer.trendingLotsConnection.edges.node.sale_artwork.id": (v40/*: any*/),
        "viewer.trendingLotsConnection.edges.node.sale_artwork.lotID": (v45/*: any*/),
        "viewer.trendingLotsConnection.edges.node.sale_artwork.lotLabel": (v45/*: any*/),
        "viewer.trendingLotsConnection.edges.node.sale_artwork.opening_bid": (v63/*: any*/),
        "viewer.trendingLotsConnection.edges.node.sale_artwork.opening_bid.display": (v45/*: any*/),
        "viewer.trendingLotsConnection.edges.node.sale_message": (v45/*: any*/),
        "viewer.trendingLotsConnection.edges.node.slug": (v40/*: any*/),
        "viewer.trendingLotsConnection.edges.node.title": (v45/*: any*/)
      }
    },
    "name": "CuritorialRailsTabBar_Test_Query",
    "operationKind": "query",
    "text": "query CuritorialRailsTabBar_Test_Query {\n  viewer {\n    ...CuritorialRailsTabBar_viewer\n  }\n}\n\nfragment CuritorialRailsTabBar_viewer on Viewer {\n  ...WorksByArtistsYouFollowRail_viewer\n  ...TrendingLotsRail_viewer\n  ...StandoutLotsRail_viewer\n  followedArtistsInAuction: saleArtworksConnection(includeArtworksByFollowedArtists: true, isAuction: true, liveSale: true, first: 1) {\n    counts {\n      total\n    }\n  }\n  me {\n    ...MyBids_me\n    id\n  }\n}\n\nfragment Details_artwork on Artwork {\n  href\n  title\n  date\n  sale_message: saleMessage\n  cultural_maker: culturalMaker\n  artist {\n    targetSupply {\n      isP1\n    }\n    id\n  }\n  marketPriceInsights {\n    demandRank\n  }\n  artists(shallow: true) {\n    id\n    href\n    name\n  }\n  collecting_institution: collectingInstitution\n  partner(shallow: true) {\n    name\n    href\n    id\n  }\n  sale {\n    endAt\n    cascadingEndTimeIntervalMinutes\n    extendedBiddingIntervalMinutes\n    startAt\n    is_auction: isAuction\n    is_closed: isClosed\n    id\n  }\n  sale_artwork: saleArtwork {\n    lotID\n    lotLabel\n    endAt\n    extendedBiddingEndAt\n    formattedEndDateTime\n    counts {\n      bidder_positions: bidderPositions\n    }\n    highest_bid: highestBid {\n      display\n    }\n    opening_bid: openingBid {\n      display\n    }\n    id\n  }\n  ...NewSaveButton_artwork\n  ...HoverDetails_artwork\n}\n\nfragment HoverDetails_artwork on Artwork {\n  internalID\n  attributionClass {\n    name\n    id\n  }\n  mediumType {\n    filterGene {\n      name\n      id\n    }\n  }\n}\n\nfragment Metadata_artwork on Artwork {\n  ...Details_artwork\n  internalID\n  href\n}\n\nfragment MyBidsBidHeader_sale on Sale {\n  coverImage {\n    cropped(width: 330, height: 100, version: [\"source\", \"wide\", \"large_rectangle\"]) {\n      src\n      srcSet\n    }\n  }\n  formattedStartDateTime\n  name\n  partner {\n    name\n    id\n  }\n  slug\n}\n\nfragment MyBidsBidItem_saleArtwork on SaleArtwork {\n  artwork {\n    artistNames\n    image {\n      cropped(width: 55, height: 55) {\n        src\n        srcSet\n        width\n        height\n      }\n    }\n    id\n  }\n  estimate\n  currentBid {\n    display\n  }\n  internalID\n  isHighestBidder\n  isWatching\n  lotState {\n    bidCount\n    sellingPrice {\n      display\n    }\n  }\n  lotLabel\n  slug\n}\n\nfragment MyBids_me on Me {\n  myBids {\n    active {\n      sale {\n        slug\n        ...MyBidsBidHeader_sale\n        id\n      }\n      saleArtworks {\n        ...MyBidsBidItem_saleArtwork\n        id\n      }\n    }\n  }\n}\n\nfragment NewSaveButton_artwork on Artwork {\n  id\n  internalID\n  slug\n  is_saved: isSaved\n  title\n}\n\nfragment SaveButton_artwork on Artwork {\n  id\n  internalID\n  slug\n  is_saved: isSaved\n  title\n}\n\nfragment ShelfArtwork_artwork on Artwork {\n  ...Metadata_artwork\n  ...SaveButton_artwork\n  title\n  href\n  image {\n    src: url(version: [\"normalized\", \"larger\", \"large\"])\n    width\n    height\n  }\n}\n\nfragment StandoutLotsRail_viewer on Viewer {\n  standoutLotsRailConnection: artworksConnection(forSale: true, first: 50, geneIDs: [\"our-top-auction-lots\"]) {\n    edges {\n      node {\n        internalID\n        slug\n        ...ShelfArtwork_artwork\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment TrendingLotsRail_viewer on Viewer {\n  trendingLotsConnection: saleArtworksConnection(biddableSale: true, first: 10, sort: \"-bidder_positions_count\", estimateRange: \"5_000_00-*\") {\n    edges {\n      counts {\n        bidderPositions\n      }\n      node {\n        internalID\n        slug\n        sale {\n          isClosed\n          id\n        }\n        ...ShelfArtwork_artwork\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment WorksByArtistsYouFollowRail_viewer on Viewer {\n  saleArtworksConnection(includeArtworksByFollowedArtists: true, isAuction: true, liveSale: true, first: 50) {\n    edges {\n      node {\n        internalID\n        slug\n        ...ShelfArtwork_artwork\n        id\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e3911a29d16779b82fa60bc6ef3c996b";

export default node;

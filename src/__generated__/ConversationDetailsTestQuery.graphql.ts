/**
 * @generated SignedSource<<da3ecff64566325ebc4b7278d4ff9f5e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ConversationDetailsTestQuery$variables = {};
export type ConversationDetailsTestQuery$data = {
  readonly conversation: {
    readonly " $fragmentSpreads": FragmentRefs<"ConversationDetails_conversation">;
  } | null;
};
export type ConversationDetailsTestQuery = {
  response: ConversationDetailsTestQuery$data;
  variables: ConversationDetailsTestQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "conversation-id"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  (v2/*: any*/)
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v5 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v6 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v7 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ConversationDetailsTestQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Conversation",
        "kind": "LinkedField",
        "name": "conversation",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ConversationDetails_conversation"
          }
        ],
        "storageKey": "conversation(id:\"conversation-id\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ConversationDetailsTestQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Conversation",
        "kind": "LinkedField",
        "name": "conversation",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 1
              },
              {
                "kind": "Literal",
                "name": "states",
                "value": [
                  "APPROVED",
                  "FULFILLED",
                  "SUBMITTED",
                  "PROCESSING_APPROVAL",
                  "REFUNDED",
                  "CANCELED"
                ]
              }
            ],
            "concreteType": "CommerceOrderConnectionWithTotalCount",
            "kind": "LinkedField",
            "name": "orderConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CommerceOrderEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      {
                        "kind": "TypeDiscriminator",
                        "abstractKey": "__isCommerceOrder"
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "code",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "state",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "mode",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "stateReason",
                        "storageKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CommerceOffer",
                            "kind": "LinkedField",
                            "name": "lastOffer",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "from",
                                "plural": false,
                                "selections": [
                                  (v1/*: any*/)
                                ],
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "offerAmountChanged",
                                "storageKey": null
                              },
                              (v2/*: any*/),
                              {
                                "alias": null,
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "precision",
                                    "value": 2
                                  }
                                ],
                                "kind": "ScalarField",
                                "name": "amount",
                                "storageKey": "amount(precision:2)"
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "CommerceOfferOrder",
                        "abstractKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "stateExpiresAt",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "stateUpdatedAt",
                        "storageKey": null
                      },
                      {
                        "alias": "formattedStateExpiresAt",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "format",
                            "value": "MMM D, h:mm A zz"
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "stateExpiresAt",
                        "storageKey": "stateExpiresAt(format:\"MMM D, h:mm A zz\")"
                      },
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CommerceLineItemConnection",
                        "kind": "LinkedField",
                        "name": "lineItems",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CommerceLineItemEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "CommerceLineItem",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Artwork",
                                    "kind": "LinkedField",
                                    "name": "artwork",
                                    "plural": false,
                                    "selections": (v3/*: any*/),
                                    "storageKey": null
                                  },
                                  (v2/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "orderConnection(first:1,states:[\"APPROVED\",\"FULFILLED\",\"SUBMITTED\",\"PROCESSING_APPROVAL\",\"REFUNDED\",\"CANCELED\"])"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ConversationItem",
            "kind": "LinkedField",
            "name": "items",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "item",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v2/*: any*/),
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "date",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "title",
                        "storageKey": null
                      },
                      {
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
                            "kind": "ScalarField",
                            "name": "name",
                            "storageKey": null
                          },
                          (v4/*: any*/),
                          (v2/*: any*/)
                        ],
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
                            "name": "url",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "type": "Artwork",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": (v3/*: any*/),
                    "type": "Node",
                    "abstractKey": "__isNode"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": "conversation(id:\"conversation-id\")"
      }
    ]
  },
  "params": {
    "cacheID": "125108f46713a6a4a4d565a4142a24fc",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "conversation": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Conversation"
        },
        "conversation.id": (v5/*: any*/),
        "conversation.items": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ConversationItem"
        },
        "conversation.items.item": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ConversationItemType"
        },
        "conversation.items.item.__isNode": (v6/*: any*/),
        "conversation.items.item.__typename": (v6/*: any*/),
        "conversation.items.item.artist": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artist"
        },
        "conversation.items.item.artist.id": (v5/*: any*/),
        "conversation.items.item.artist.name": (v7/*: any*/),
        "conversation.items.item.artist.slug": (v5/*: any*/),
        "conversation.items.item.date": (v7/*: any*/),
        "conversation.items.item.id": (v5/*: any*/),
        "conversation.items.item.image": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "conversation.items.item.image.url": (v7/*: any*/),
        "conversation.items.item.slug": (v5/*: any*/),
        "conversation.items.item.title": (v7/*: any*/),
        "conversation.orderConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceOrderConnectionWithTotalCount"
        },
        "conversation.orderConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "CommerceOrderEdge"
        },
        "conversation.orderConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceOrder"
        },
        "conversation.orderConnection.edges.node.__isCommerceOrder": (v6/*: any*/),
        "conversation.orderConnection.edges.node.__typename": (v6/*: any*/),
        "conversation.orderConnection.edges.node.code": (v6/*: any*/),
        "conversation.orderConnection.edges.node.formattedStateExpiresAt": (v7/*: any*/),
        "conversation.orderConnection.edges.node.id": (v5/*: any*/),
        "conversation.orderConnection.edges.node.lastOffer": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceOffer"
        },
        "conversation.orderConnection.edges.node.lastOffer.amount": (v7/*: any*/),
        "conversation.orderConnection.edges.node.lastOffer.from": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "CommerceOrderPartyUnion"
        },
        "conversation.orderConnection.edges.node.lastOffer.from.__typename": (v6/*: any*/),
        "conversation.orderConnection.edges.node.lastOffer.id": (v5/*: any*/),
        "conversation.orderConnection.edges.node.lastOffer.offerAmountChanged": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Boolean"
        },
        "conversation.orderConnection.edges.node.lineItems": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceLineItemConnection"
        },
        "conversation.orderConnection.edges.node.lineItems.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "CommerceLineItemEdge"
        },
        "conversation.orderConnection.edges.node.lineItems.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceLineItem"
        },
        "conversation.orderConnection.edges.node.lineItems.edges.node.artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "conversation.orderConnection.edges.node.lineItems.edges.node.artwork.id": (v5/*: any*/),
        "conversation.orderConnection.edges.node.lineItems.edges.node.id": (v5/*: any*/),
        "conversation.orderConnection.edges.node.mode": {
          "enumValues": [
            "BUY",
            "OFFER"
          ],
          "nullable": true,
          "plural": false,
          "type": "CommerceOrderModeEnum"
        },
        "conversation.orderConnection.edges.node.state": {
          "enumValues": [
            "ABANDONED",
            "APPROVED",
            "CANCELED",
            "FULFILLED",
            "IN_REVIEW",
            "PENDING",
            "PROCESSING_APPROVAL",
            "REFUNDED",
            "SUBMITTED"
          ],
          "nullable": false,
          "plural": false,
          "type": "CommerceOrderStateEnum"
        },
        "conversation.orderConnection.edges.node.stateExpiresAt": (v7/*: any*/),
        "conversation.orderConnection.edges.node.stateReason": (v7/*: any*/),
        "conversation.orderConnection.edges.node.stateUpdatedAt": (v7/*: any*/)
      }
    },
    "name": "ConversationDetailsTestQuery",
    "operationKind": "query",
    "text": "query ConversationDetailsTestQuery {\n  conversation(id: \"conversation-id\") {\n    ...ConversationDetails_conversation\n    id\n  }\n}\n\nfragment ConversationArtwork_conversation on Conversation {\n  items {\n    item {\n      __typename\n      ... on Artwork {\n        id\n        slug\n        date\n        title\n        artist {\n          name\n          slug\n          id\n        }\n        image {\n          url\n        }\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n\nfragment ConversationDetails_conversation on Conversation {\n  orderConnection(first: 1, states: [APPROVED, FULFILLED, SUBMITTED, PROCESSING_APPROVAL, REFUNDED, CANCELED]) {\n    edges {\n      node {\n        __typename\n        ...OrderInformation_order\n        id\n      }\n    }\n  }\n  ...ConversationArtwork_conversation\n  ...ConversationHelpCenter_conversation\n}\n\nfragment ConversationHelpCenter_conversation on Conversation {\n  items {\n    item {\n      __typename\n      ... on Artwork {\n        id\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n\nfragment OrderInformation_order on CommerceOrder {\n  __isCommerceOrder: __typename\n  code\n  ...OrderState_state\n  ...ReviewOrderButton_order\n  ... on CommerceOfferOrder {\n    lastOffer {\n      amount(precision: 2)\n      id\n    }\n  }\n}\n\nfragment OrderStateStatusWithCounter_order on CommerceOrder {\n  __isCommerceOrder: __typename\n  stateExpiresAt\n  stateUpdatedAt\n  formattedStateExpiresAt: stateExpiresAt(format: \"MMM D, h:mm A zz\")\n}\n\nfragment OrderState_state on CommerceOrder {\n  __isCommerceOrder: __typename\n  state\n  mode\n  stateReason\n  ... on CommerceOfferOrder {\n    lastOffer {\n      from {\n        __typename\n      }\n      offerAmountChanged\n      id\n    }\n  }\n  ...OrderStateStatusWithCounter_order\n}\n\nfragment ReviewOrderButton_order on CommerceOrder {\n  __isCommerceOrder: __typename\n  id\n  state\n  mode\n  lineItems {\n    edges {\n      node {\n        artwork {\n          id\n        }\n        id\n      }\n    }\n  }\n  ... on CommerceOfferOrder {\n    lastOffer {\n      from {\n        __typename\n      }\n      offerAmountChanged\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ac0c329f77c26863f96e49f8518a736d";

export default node;
/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type conversationRoutes_DetailQueryVariables = {
    conversationID: string;
};
export type conversationRoutes_DetailQueryResponse = {
    readonly me: {
        readonly " $fragmentRefs": FragmentRefs<"Conversation_me">;
    } | null;
};
export type conversationRoutes_DetailQuery = {
    readonly response: conversationRoutes_DetailQueryResponse;
    readonly variables: conversationRoutes_DetailQueryVariables;
};



/*
query conversationRoutes_DetailQuery(
  $conversationID: String!
) {
  me {
    ...Conversation_me_3oGfhn
    id
  }
}

fragment Contact_artwork on Artwork {
  href
  is_inquireable: isInquireable
  sale {
    is_auction: isAuction
    is_live_open: isLiveOpen
    is_open: isOpen
    is_closed: isClosed
    id
  }
  partner(shallow: true) {
    type
    id
  }
  sale_artwork: saleArtwork {
    highest_bid: highestBid {
      display
    }
    opening_bid: openingBid {
      display
    }
    counts {
      bidder_positions: bidderPositions
    }
    id
  }
}

fragment ConversationCTA_conversation on Conversation {
  internalID
  items {
    item {
      __typename
      ... on Artwork {
        internalID
        isOfferableFromInquiry
      }
      ... on Node {
        id
      }
    }
  }
  activeOrders: orderConnection(first: 10, states: [APPROVED, FULFILLED, SUBMITTED, REFUNDED]) {
    edges {
      node {
        __typename
        internalID
        state
        stateReason
        stateExpiresAt
        ... on CommerceOfferOrder {
          buyerAction
          offers(first: 5) {
            edges {
              node {
                internalID
                id
              }
            }
          }
        }
        id
      }
    }
  }
}

fragment ConversationList_me on Me {
  conversationsConnection(first: 25) {
    edges {
      cursor
      node {
        id
        internalID
        lastMessage
        ...ConversationSnippet_conversation
        __typename
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}

fragment ConversationMessages_messagesAndEvents on ConversationEventConnection {
  edges {
    node {
      __typename
      ... on Message {
        internalID
        createdAt
        isFromUser
        body
        ...Message_message
      }
      ...OrderUpdate_event
      ... on ConversationOrderStateChanged {
        state
        stateReason
        createdAt
      }
      ... on ConversationOfferSubmitted {
        createdAt
      }
      ... on Node {
        id
      }
    }
  }
}

fragment ConversationSnippet_conversation on Conversation {
  internalID
  to {
    name
    id
  }
  lastMessage
  lastMessageAt
  unread
  items {
    item {
      __typename
      ... on Artwork {
        date
        title
        artistNames
        image {
          url
        }
      }
      ... on Show {
        fair {
          name
          id
        }
        name
        coverImage {
          url
        }
      }
      ... on Node {
        id
      }
    }
  }
}

fragment Conversation_conversation on Conversation {
  id
  internalID
  from {
    name
    email
    id
  }
  to {
    name
    initials
    id
  }
  initialMessage
  lastMessageID
  fromLastViewedMessageID
  isLastMessageToUser
  unread
  orderConnection(first: 10, states: [APPROVED, FULFILLED, SUBMITTED, REFUNDED, CANCELED], participantType: BUYER) {
    edges {
      node {
        __typename
        internalID
        updatedAt
        ... on CommerceOfferOrder {
          buyerAction
        }
        id
      }
    }
  }
  conversationEventConnection(first: 30) {
    pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
    edges {
      node {
        __typename
        ... on Node {
          id
        }
      }
      cursor
    }
    totalCount
    ...ConversationMessages_messagesAndEvents
  }
  items {
    item {
      __typename
      ... on Artwork {
        id
        isOfferableFromInquiry
        internalID
      }
      ...Item_item
      ... on Node {
        id
      }
    }
    liveArtwork {
      __typename
      ... on Artwork {
        isOfferableFromInquiry
        internalID
        __typename
      }
      ... on Node {
        id
      }
    }
  }
  ...ConversationCTA_conversation
}

fragment Conversation_me_3oGfhn on Me {
  ...ConversationList_me
  conversation(id: $conversationID) {
    internalID
    ...Conversation_conversation
    ...ConversationCTA_conversation
    ...Details_conversation
    id
  }
}

fragment Details_artwork on Artwork {
  href
  title
  date
  sale_message: saleMessage
  cultural_maker: culturalMaker
  artists(shallow: true) {
    id
    href
    name
  }
  collecting_institution: collectingInstitution
  partner(shallow: true) {
    name
    href
    id
  }
  sale {
    is_auction: isAuction
    is_closed: isClosed
    id
  }
  sale_artwork: saleArtwork {
    counts {
      bidder_positions: bidderPositions
    }
    highest_bid: highestBid {
      display
    }
    opening_bid: openingBid {
      display
    }
    id
  }
}

fragment Details_conversation on Conversation {
  to {
    name
    initials
    id
  }
  messagesConnection(first: 30, sort: DESC) {
    edges {
      node {
        attachments {
          id
          contentType
          fileName
          downloadURL
        }
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  items {
    item {
      __typename
      ... on Artwork {
        href
        ...Metadata_artwork
        image {
          thumbnailUrl: url(version: "small")
        }
      }
      ... on Show {
        href
        image: coverImage {
          thumbnailUrl: url(version: "small")
        }
      }
      ... on Node {
        id
      }
    }
  }
}

fragment Item_item on ConversationItemType {
  __typename
  ... on Artwork {
    internalID
    id
    date
    title
    artistNames
    href
    isOfferableFromInquiry
    image {
      url(version: ["large"])
    }
    listPrice {
      __typename
      ... on Money {
        display
      }
      ... on PriceRange {
        display
      }
    }
  }
  ... on Show {
    id
    fair {
      name
      exhibitionPeriod
      location {
        city
        id
      }
      id
    }
    href
    name
    coverImage {
      url
    }
  }
}

fragment Message_message on Message {
  __typename
  internalID
  body
  createdAt
  isFromUser
  from {
    name
    email
  }
  attachments {
    id
    contentType
    fileName
    downloadURL
  }
}

fragment Metadata_artwork on Artwork {
  ...Details_artwork
  ...Contact_artwork
  href
}

fragment OrderUpdate_event on ConversationEvent {
  ... on ConversationOrderStateChanged {
    __typename
    createdAt
    stateReason
    state
  }
  ... on ConversationOfferSubmitted {
    __typename
    createdAt
    amount
    fromParticipant
    offerAmountChanged
    respondsTo {
      fromParticipant
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "conversationID",
    "type": "String!"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 25
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
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
  "name": "name",
  "storageKey": null
},
v6 = [
  (v5/*: any*/),
  (v3/*: any*/)
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "unread",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "date",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "artistNames",
  "storageKey": null
},
v12 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  }
],
v13 = {
  "alias": null,
  "args": null,
  "concreteType": "Image",
  "kind": "LinkedField",
  "name": "coverImage",
  "plural": false,
  "selections": (v12/*: any*/),
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endCursor",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasNextPage",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasPreviousPage",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "startCursor",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v19 = {
  "kind": "Literal",
  "name": "first",
  "value": 10
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "buyerAction",
  "storageKey": null
},
v21 = {
  "kind": "Literal",
  "name": "first",
  "value": 30
},
v22 = [
  (v21/*: any*/)
],
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "concreteType": "Attachment",
  "kind": "LinkedField",
  "name": "attachments",
  "plural": true,
  "selections": [
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "contentType",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fileName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "downloadURL",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "stateReason",
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "state",
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fromParticipant",
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isOfferableFromInquiry",
  "storageKey": null
},
v29 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v30 = {
  "alias": "thumbnailUrl",
  "args": [
    {
      "kind": "Literal",
      "name": "version",
      "value": "small"
    }
  ],
  "kind": "ScalarField",
  "name": "url",
  "storageKey": "url(version:\"small\")"
},
v31 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "display",
    "storageKey": null
  }
],
v32 = [
  {
    "kind": "Literal",
    "name": "shallow",
    "value": true
  }
],
v33 = [
  (v21/*: any*/),
  {
    "kind": "Literal",
    "name": "sort",
    "value": "DESC"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "conversationRoutes_DetailQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": [
              {
                "kind": "Variable",
                "name": "conversationID",
                "variableName": "conversationID"
              }
            ],
            "kind": "FragmentSpread",
            "name": "Conversation_me"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "conversationRoutes_DetailQuery",
    "selections": [
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
            "args": (v1/*: any*/),
            "concreteType": "ConversationConnection",
            "kind": "LinkedField",
            "name": "conversationsConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ConversationEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Conversation",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "lastMessage",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ConversationResponder",
                        "kind": "LinkedField",
                        "name": "to",
                        "plural": false,
                        "selections": (v6/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "lastMessageAt",
                        "storageKey": null
                      },
                      (v7/*: any*/),
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
                              (v8/*: any*/),
                              (v3/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v9/*: any*/),
                                  (v10/*: any*/),
                                  (v11/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Image",
                                    "kind": "LinkedField",
                                    "name": "image",
                                    "plural": false,
                                    "selections": (v12/*: any*/),
                                    "storageKey": null
                                  }
                                ],
                                "type": "Artwork"
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Fair",
                                    "kind": "LinkedField",
                                    "name": "fair",
                                    "plural": false,
                                    "selections": (v6/*: any*/),
                                    "storageKey": null
                                  },
                                  (v5/*: any*/),
                                  (v13/*: any*/)
                                ],
                                "type": "Show"
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v8/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  (v14/*: any*/),
                  (v15/*: any*/),
                  (v16/*: any*/),
                  (v17/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "conversationsConnection(first:25)"
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "ConversationList_conversationsConnection",
            "kind": "LinkedHandle",
            "name": "conversationsConnection"
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "conversationID"
              }
            ],
            "concreteType": "Conversation",
            "kind": "LinkedField",
            "name": "conversation",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ConversationInitiator",
                "kind": "LinkedField",
                "name": "from",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v18/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ConversationResponder",
                "kind": "LinkedField",
                "name": "to",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "initials",
                    "storageKey": null
                  },
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "initialMessage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lastMessageID",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "fromLastViewedMessageID",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isLastMessageToUser",
                "storageKey": null
              },
              (v7/*: any*/),
              {
                "alias": null,
                "args": [
                  (v19/*: any*/),
                  {
                    "kind": "Literal",
                    "name": "participantType",
                    "value": "BUYER"
                  },
                  {
                    "kind": "Literal",
                    "name": "states",
                    "value": [
                      "APPROVED",
                      "FULFILLED",
                      "SUBMITTED",
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
                          (v8/*: any*/),
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "updatedAt",
                            "storageKey": null
                          },
                          (v3/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v20/*: any*/)
                            ],
                            "type": "CommerceOfferOrder"
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "orderConnection(first:10,participantType:\"BUYER\",states:[\"APPROVED\",\"FULFILLED\",\"SUBMITTED\",\"REFUNDED\",\"CANCELED\"])"
              },
              {
                "alias": null,
                "args": (v22/*: any*/),
                "concreteType": "ConversationEventConnection",
                "kind": "LinkedField",
                "name": "conversationEventConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "kind": "LinkedField",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [
                      (v17/*: any*/),
                      (v14/*: any*/),
                      (v16/*: any*/),
                      (v15/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ConversationEventEdge",
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
                          (v8/*: any*/),
                          (v3/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v4/*: any*/),
                              (v23/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "isFromUser",
                                "storageKey": null
                              },
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
                                "concreteType": "MessageInitiator",
                                "kind": "LinkedField",
                                "name": "from",
                                "plural": false,
                                "selections": [
                                  (v5/*: any*/),
                                  (v18/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v24/*: any*/)
                            ],
                            "type": "Message"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v23/*: any*/),
                              (v25/*: any*/),
                              (v26/*: any*/)
                            ],
                            "type": "ConversationOrderStateChanged"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v23/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "amount",
                                "storageKey": null
                              },
                              (v27/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "offerAmountChanged",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ConversationOfferSubmitted",
                                "kind": "LinkedField",
                                "name": "respondsTo",
                                "plural": false,
                                "selections": [
                                  (v27/*: any*/),
                                  (v3/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "ConversationOfferSubmitted"
                          }
                        ],
                        "storageKey": null
                      },
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "totalCount",
                    "storageKey": null
                  }
                ],
                "storageKey": "conversationEventConnection(first:30)"
              },
              {
                "alias": null,
                "args": (v22/*: any*/),
                "filters": [],
                "handle": "connection",
                "key": "Conversation_conversationEventConnection",
                "kind": "LinkedHandle",
                "name": "conversationEventConnection"
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
                      (v8/*: any*/),
                      (v3/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v28/*: any*/),
                          (v4/*: any*/),
                          (v9/*: any*/),
                          (v10/*: any*/),
                          (v11/*: any*/),
                          (v29/*: any*/),
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
                                    "name": "version",
                                    "value": [
                                      "large"
                                    ]
                                  }
                                ],
                                "kind": "ScalarField",
                                "name": "url",
                                "storageKey": "url(version:[\"large\"])"
                              },
                              (v30/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "listPrice",
                            "plural": false,
                            "selections": [
                              (v8/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": (v31/*: any*/),
                                "type": "Money"
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": (v31/*: any*/),
                                "type": "PriceRange"
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": "sale_message",
                            "args": null,
                            "kind": "ScalarField",
                            "name": "saleMessage",
                            "storageKey": null
                          },
                          {
                            "alias": "cultural_maker",
                            "args": null,
                            "kind": "ScalarField",
                            "name": "culturalMaker",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": (v32/*: any*/),
                            "concreteType": "Artist",
                            "kind": "LinkedField",
                            "name": "artists",
                            "plural": true,
                            "selections": [
                              (v3/*: any*/),
                              (v29/*: any*/),
                              (v5/*: any*/)
                            ],
                            "storageKey": "artists(shallow:true)"
                          },
                          {
                            "alias": "collecting_institution",
                            "args": null,
                            "kind": "ScalarField",
                            "name": "collectingInstitution",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": (v32/*: any*/),
                            "concreteType": "Partner",
                            "kind": "LinkedField",
                            "name": "partner",
                            "plural": false,
                            "selections": [
                              (v5/*: any*/),
                              (v29/*: any*/),
                              (v3/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "type",
                                "storageKey": null
                              }
                            ],
                            "storageKey": "partner(shallow:true)"
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Sale",
                            "kind": "LinkedField",
                            "name": "sale",
                            "plural": false,
                            "selections": [
                              {
                                "alias": "is_auction",
                                "args": null,
                                "kind": "ScalarField",
                                "name": "isAuction",
                                "storageKey": null
                              },
                              {
                                "alias": "is_closed",
                                "args": null,
                                "kind": "ScalarField",
                                "name": "isClosed",
                                "storageKey": null
                              },
                              (v3/*: any*/),
                              {
                                "alias": "is_live_open",
                                "args": null,
                                "kind": "ScalarField",
                                "name": "isLiveOpen",
                                "storageKey": null
                              },
                              {
                                "alias": "is_open",
                                "args": null,
                                "kind": "ScalarField",
                                "name": "isOpen",
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
                                "selections": (v31/*: any*/),
                                "storageKey": null
                              },
                              {
                                "alias": "opening_bid",
                                "args": null,
                                "concreteType": "SaleArtworkOpeningBid",
                                "kind": "LinkedField",
                                "name": "openingBid",
                                "plural": false,
                                "selections": (v31/*: any*/),
                                "storageKey": null
                              },
                              (v3/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": "is_inquireable",
                            "args": null,
                            "kind": "ScalarField",
                            "name": "isInquireable",
                            "storageKey": null
                          }
                        ],
                        "type": "Artwork"
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Fair",
                            "kind": "LinkedField",
                            "name": "fair",
                            "plural": false,
                            "selections": [
                              (v5/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "exhibitionPeriod",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Location",
                                "kind": "LinkedField",
                                "name": "location",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "city",
                                    "storageKey": null
                                  },
                                  (v3/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v3/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v29/*: any*/),
                          (v5/*: any*/),
                          (v13/*: any*/),
                          {
                            "alias": "image",
                            "args": null,
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "coverImage",
                            "plural": false,
                            "selections": [
                              (v30/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "Show"
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "liveArtwork",
                    "plural": false,
                    "selections": [
                      (v8/*: any*/),
                      (v3/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v28/*: any*/),
                          (v4/*: any*/),
                          (v8/*: any*/)
                        ],
                        "type": "Artwork"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": "activeOrders",
                "args": [
                  (v19/*: any*/),
                  {
                    "kind": "Literal",
                    "name": "states",
                    "value": [
                      "APPROVED",
                      "FULFILLED",
                      "SUBMITTED",
                      "REFUNDED"
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
                          (v8/*: any*/),
                          (v4/*: any*/),
                          (v26/*: any*/),
                          (v25/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "stateExpiresAt",
                            "storageKey": null
                          },
                          (v3/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v20/*: any*/),
                              {
                                "alias": null,
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "first",
                                    "value": 5
                                  }
                                ],
                                "concreteType": "CommerceOfferConnection",
                                "kind": "LinkedField",
                                "name": "offers",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "CommerceOfferEdge",
                                    "kind": "LinkedField",
                                    "name": "edges",
                                    "plural": true,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "CommerceOffer",
                                        "kind": "LinkedField",
                                        "name": "node",
                                        "plural": false,
                                        "selections": [
                                          (v4/*: any*/),
                                          (v3/*: any*/)
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": "offers(first:5)"
                              }
                            ],
                            "type": "CommerceOfferOrder"
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "orderConnection(first:10,states:[\"APPROVED\",\"FULFILLED\",\"SUBMITTED\",\"REFUNDED\"])"
              },
              {
                "alias": null,
                "args": (v33/*: any*/),
                "concreteType": "MessageConnection",
                "kind": "LinkedField",
                "name": "messagesConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MessageEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Message",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v24/*: any*/),
                          (v3/*: any*/),
                          (v8/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "kind": "LinkedField",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [
                      (v14/*: any*/),
                      (v15/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "messagesConnection(first:30,sort:\"DESC\")"
              },
              {
                "alias": null,
                "args": (v33/*: any*/),
                "filters": [],
                "handle": "connection",
                "key": "Messages_messagesConnection",
                "kind": "LinkedHandle",
                "name": "messagesConnection"
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "conversationRoutes_DetailQuery",
    "operationKind": "query",
    "text": "query conversationRoutes_DetailQuery(\n  $conversationID: String!\n) {\n  me {\n    ...Conversation_me_3oGfhn\n    id\n  }\n}\n\nfragment Contact_artwork on Artwork {\n  href\n  is_inquireable: isInquireable\n  sale {\n    is_auction: isAuction\n    is_live_open: isLiveOpen\n    is_open: isOpen\n    is_closed: isClosed\n    id\n  }\n  partner(shallow: true) {\n    type\n    id\n  }\n  sale_artwork: saleArtwork {\n    highest_bid: highestBid {\n      display\n    }\n    opening_bid: openingBid {\n      display\n    }\n    counts {\n      bidder_positions: bidderPositions\n    }\n    id\n  }\n}\n\nfragment ConversationCTA_conversation on Conversation {\n  internalID\n  items {\n    item {\n      __typename\n      ... on Artwork {\n        internalID\n        isOfferableFromInquiry\n      }\n      ... on Node {\n        id\n      }\n    }\n  }\n  activeOrders: orderConnection(first: 10, states: [APPROVED, FULFILLED, SUBMITTED, REFUNDED]) {\n    edges {\n      node {\n        __typename\n        internalID\n        state\n        stateReason\n        stateExpiresAt\n        ... on CommerceOfferOrder {\n          buyerAction\n          offers(first: 5) {\n            edges {\n              node {\n                internalID\n                id\n              }\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment ConversationList_me on Me {\n  conversationsConnection(first: 25) {\n    edges {\n      cursor\n      node {\n        id\n        internalID\n        lastMessage\n        ...ConversationSnippet_conversation\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment ConversationMessages_messagesAndEvents on ConversationEventConnection {\n  edges {\n    node {\n      __typename\n      ... on Message {\n        internalID\n        createdAt\n        isFromUser\n        body\n        ...Message_message\n      }\n      ...OrderUpdate_event\n      ... on ConversationOrderStateChanged {\n        state\n        stateReason\n        createdAt\n      }\n      ... on ConversationOfferSubmitted {\n        createdAt\n      }\n      ... on Node {\n        id\n      }\n    }\n  }\n}\n\nfragment ConversationSnippet_conversation on Conversation {\n  internalID\n  to {\n    name\n    id\n  }\n  lastMessage\n  lastMessageAt\n  unread\n  items {\n    item {\n      __typename\n      ... on Artwork {\n        date\n        title\n        artistNames\n        image {\n          url\n        }\n      }\n      ... on Show {\n        fair {\n          name\n          id\n        }\n        name\n        coverImage {\n          url\n        }\n      }\n      ... on Node {\n        id\n      }\n    }\n  }\n}\n\nfragment Conversation_conversation on Conversation {\n  id\n  internalID\n  from {\n    name\n    email\n    id\n  }\n  to {\n    name\n    initials\n    id\n  }\n  initialMessage\n  lastMessageID\n  fromLastViewedMessageID\n  isLastMessageToUser\n  unread\n  orderConnection(first: 10, states: [APPROVED, FULFILLED, SUBMITTED, REFUNDED, CANCELED], participantType: BUYER) {\n    edges {\n      node {\n        __typename\n        internalID\n        updatedAt\n        ... on CommerceOfferOrder {\n          buyerAction\n        }\n        id\n      }\n    }\n  }\n  conversationEventConnection(first: 30) {\n    pageInfo {\n      startCursor\n      endCursor\n      hasPreviousPage\n      hasNextPage\n    }\n    edges {\n      node {\n        __typename\n        ... on Node {\n          id\n        }\n      }\n      cursor\n    }\n    totalCount\n    ...ConversationMessages_messagesAndEvents\n  }\n  items {\n    item {\n      __typename\n      ... on Artwork {\n        id\n        isOfferableFromInquiry\n        internalID\n      }\n      ...Item_item\n      ... on Node {\n        id\n      }\n    }\n    liveArtwork {\n      __typename\n      ... on Artwork {\n        isOfferableFromInquiry\n        internalID\n        __typename\n      }\n      ... on Node {\n        id\n      }\n    }\n  }\n  ...ConversationCTA_conversation\n}\n\nfragment Conversation_me_3oGfhn on Me {\n  ...ConversationList_me\n  conversation(id: $conversationID) {\n    internalID\n    ...Conversation_conversation\n    ...ConversationCTA_conversation\n    ...Details_conversation\n    id\n  }\n}\n\nfragment Details_artwork on Artwork {\n  href\n  title\n  date\n  sale_message: saleMessage\n  cultural_maker: culturalMaker\n  artists(shallow: true) {\n    id\n    href\n    name\n  }\n  collecting_institution: collectingInstitution\n  partner(shallow: true) {\n    name\n    href\n    id\n  }\n  sale {\n    is_auction: isAuction\n    is_closed: isClosed\n    id\n  }\n  sale_artwork: saleArtwork {\n    counts {\n      bidder_positions: bidderPositions\n    }\n    highest_bid: highestBid {\n      display\n    }\n    opening_bid: openingBid {\n      display\n    }\n    id\n  }\n}\n\nfragment Details_conversation on Conversation {\n  to {\n    name\n    initials\n    id\n  }\n  messagesConnection(first: 30, sort: DESC) {\n    edges {\n      node {\n        attachments {\n          id\n          contentType\n          fileName\n          downloadURL\n        }\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  items {\n    item {\n      __typename\n      ... on Artwork {\n        href\n        ...Metadata_artwork\n        image {\n          thumbnailUrl: url(version: \"small\")\n        }\n      }\n      ... on Show {\n        href\n        image: coverImage {\n          thumbnailUrl: url(version: \"small\")\n        }\n      }\n      ... on Node {\n        id\n      }\n    }\n  }\n}\n\nfragment Item_item on ConversationItemType {\n  __typename\n  ... on Artwork {\n    internalID\n    id\n    date\n    title\n    artistNames\n    href\n    isOfferableFromInquiry\n    image {\n      url(version: [\"large\"])\n    }\n    listPrice {\n      __typename\n      ... on Money {\n        display\n      }\n      ... on PriceRange {\n        display\n      }\n    }\n  }\n  ... on Show {\n    id\n    fair {\n      name\n      exhibitionPeriod\n      location {\n        city\n        id\n      }\n      id\n    }\n    href\n    name\n    coverImage {\n      url\n    }\n  }\n}\n\nfragment Message_message on Message {\n  __typename\n  internalID\n  body\n  createdAt\n  isFromUser\n  from {\n    name\n    email\n  }\n  attachments {\n    id\n    contentType\n    fileName\n    downloadURL\n  }\n}\n\nfragment Metadata_artwork on Artwork {\n  ...Details_artwork\n  ...Contact_artwork\n  href\n}\n\nfragment OrderUpdate_event on ConversationEvent {\n  ... on ConversationOrderStateChanged {\n    __typename\n    createdAt\n    stateReason\n    state\n  }\n  ... on ConversationOfferSubmitted {\n    __typename\n    createdAt\n    amount\n    fromParticipant\n    offerAmountChanged\n    respondsTo {\n      fromParticipant\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '8b91cee06dddc3a6ac68091c2ec87b17';
export default node;

/**
 * @generated SignedSource<<d27f7dd334809f18abdc6005eff77d31>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NotificationTypesEnum = "ARTICLE_FEATURED_ARTIST" | "ARTWORK_ALERT" | "ARTWORK_PUBLISHED" | "PARTNER_SHOW_OPENED" | "VIEWING_ROOM_PUBLISHED" | "%future added value";
export type SimpleNotificationQuery$variables = {
  id: string;
};
export type SimpleNotificationQuery$data = {
  readonly me: {
    readonly notification: {
      readonly notificationType: NotificationTypesEnum;
    } | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"SimpleNotificationAlert_me" | "SimpleNotificationArtworkPublished_me">;
  } | null | undefined;
};
export type SimpleNotificationQuery = {
  response: SimpleNotificationQuery$data;
  variables: SimpleNotificationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "notificationType",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SimpleNotificationQuery",
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
            "concreteType": "Notification",
            "kind": "LinkedField",
            "name": "notification",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "args": (v1/*: any*/),
            "kind": "FragmentSpread",
            "name": "SimpleNotificationAlert_me"
          },
          {
            "args": (v1/*: any*/),
            "kind": "FragmentSpread",
            "name": "SimpleNotificationArtworkPublished_me"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SimpleNotificationQuery",
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
            "concreteType": "Notification",
            "kind": "LinkedField",
            "name": "notification",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "content",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Alert",
                        "kind": "LinkedField",
                        "name": "alert",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "attributionClass",
                            "storageKey": null
                          },
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "type": "AlertNotificationContent",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Artist",
                        "kind": "LinkedField",
                        "name": "artists",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "name",
                            "storageKey": null
                          },
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "type": "ArtworkPublishedNotificationContent",
                    "abstractKey": null
                  }
                ],
                "storageKey": null
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
    "cacheID": "af9ea12725be7f9ebd5ed1dd0af93488",
    "id": null,
    "metadata": {},
    "name": "SimpleNotificationQuery",
    "operationKind": "query",
    "text": "query SimpleNotificationQuery(\n  $id: String!\n) {\n  me {\n    notification(id: $id) {\n      notificationType\n      id\n    }\n    ...SimpleNotificationAlert_me_1Bmzm5\n    ...SimpleNotificationArtworkPublished_me_1Bmzm5\n    id\n  }\n}\n\nfragment SimpleNotificationAlert_me_1Bmzm5 on Me {\n  notification(id: $id) {\n    notificationType\n    content {\n      __typename\n      ... on AlertNotificationContent {\n        alert {\n          attributionClass\n          id\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment SimpleNotificationArtworkPublished_me_1Bmzm5 on Me {\n  notification(id: $id) {\n    notificationType\n    content {\n      __typename\n      ... on ArtworkPublishedNotificationContent {\n        artists {\n          name\n          id\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "e3ff601ff7b12008d15d664c34c30768";

export default node;

/**
 * @generated SignedSource<<9d7f5706627d8a7654d5b66fe09082a3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type NotificationTypesEnum = "ARTICLE_FEATURED_ARTIST" | "ARTWORK_ALERT" | "ARTWORK_PUBLISHED" | "PARTNER_SHOW_OPENED" | "VIEWING_ROOM_PUBLISHED" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type SimpleNotificationAlert_me$data = {
  readonly notification: {
    readonly content: {
      readonly alert?: {
        readonly attributionClass: ReadonlyArray<string | null | undefined> | null | undefined;
      } | null | undefined;
    } | null | undefined;
    readonly notificationType: NotificationTypesEnum;
  } | null | undefined;
  readonly " $fragmentType": "SimpleNotificationAlert_me";
};
export type SimpleNotificationAlert_me$key = {
  readonly " $data"?: SimpleNotificationAlert_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"SimpleNotificationAlert_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "id"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "SimpleNotificationAlert_me",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "id"
        }
      ],
      "concreteType": "Notification",
      "kind": "LinkedField",
      "name": "notification",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "notificationType",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "content",
          "plural": false,
          "selections": [
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
                    }
                  ],
                  "storageKey": null
                }
              ],
              "type": "AlertNotificationContent",
              "abstractKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "ed6b31486ab78a9267a248ee1b20f895";

export default node;

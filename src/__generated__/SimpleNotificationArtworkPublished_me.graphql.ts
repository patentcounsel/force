/**
 * @generated SignedSource<<1628217b8f86d83267bfadfa2b2c7999>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type NotificationTypesEnum = "ARTICLE_FEATURED_ARTIST" | "ARTWORK_ALERT" | "ARTWORK_PUBLISHED" | "PARTNER_SHOW_OPENED" | "VIEWING_ROOM_PUBLISHED" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type SimpleNotificationArtworkPublished_me$data = {
  readonly notification: {
    readonly content: {
      readonly artists?: ReadonlyArray<{
        readonly name: string | null | undefined;
      }>;
    } | null | undefined;
    readonly notificationType: NotificationTypesEnum;
  } | null | undefined;
  readonly " $fragmentType": "SimpleNotificationArtworkPublished_me";
};
export type SimpleNotificationArtworkPublished_me$key = {
  readonly " $data"?: SimpleNotificationArtworkPublished_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"SimpleNotificationArtworkPublished_me">;
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
  "name": "SimpleNotificationArtworkPublished_me",
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
                    }
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
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "0fa052d74c199a103ec74eb5649d6c74";

export default node;

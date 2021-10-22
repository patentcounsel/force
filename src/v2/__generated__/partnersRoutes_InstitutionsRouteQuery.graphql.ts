/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type partnersRoutes_InstitutionsRouteQueryVariables = {};
export type partnersRoutes_InstitutionsRouteQueryResponse = {
    readonly viewer: {
        readonly " $fragmentRefs": FragmentRefs<"InstitutionsRoute_viewer">;
    } | null;
};
export type partnersRoutes_InstitutionsRouteQuery = {
    readonly response: partnersRoutes_InstitutionsRouteQueryResponse;
    readonly variables: partnersRoutes_InstitutionsRouteQueryVariables;
};



/*
query partnersRoutes_InstitutionsRouteQuery {
  viewer {
    ...InstitutionsRoute_viewer
  }
}

fragment FollowProfileButton_profile on Profile {
  id
  slug
  name
  internalID
  is_followed: isFollowed
}

fragment InstitutionsRoute_viewer on Viewer {
  partnerCategories(categoryType: INSTITUTION, size: 50, internal: false) {
    name
    slug
    ...PartnersRail_partnerCategory_q3ILp
    id
  }
}

fragment PartnerCell_partner on Partner {
  internalID
  slug
  name
  href
  initials
  locationsConnection(first: 15) {
    edges {
      node {
        city
        id
      }
    }
  }
  profile {
    ...FollowProfileButton_profile
    isFollowed
    image {
      cropped(width: 325, height: 244, version: ["wide", "large", "featured", "larger"]) {
        src
        srcSet
      }
    }
    id
  }
}

fragment PartnersRail_partnerCategory_q3ILp on PartnerCategory {
  name
  primary: partners(eligibleForListing: true, eligibleForPrimaryBucket: true, type: INSTITUTION, sort: RANDOM_SCORE_DESC, defaultProfilePublic: true) {
    internalID
    ...PartnerCell_partner
    id
  }
  secondary: partners(eligibleForListing: true, eligibleForSecondaryBucket: true, type: INSTITUTION, sort: RANDOM_SCORE_DESC, defaultProfilePublic: true) {
    internalID
    ...PartnerCell_partner
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v2 = {
  "kind": "Literal",
  "name": "defaultProfilePublic",
  "value": true
},
v3 = {
  "kind": "Literal",
  "name": "eligibleForListing",
  "value": true
},
v4 = {
  "kind": "Literal",
  "name": "sort",
  "value": "RANDOM_SCORE_DESC"
},
v5 = {
  "kind": "Literal",
  "name": "type",
  "value": "INSTITUTION"
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = [
  (v6/*: any*/),
  (v1/*: any*/),
  (v0/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "href",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "initials",
    "storageKey": null
  },
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 15
      }
    ],
    "concreteType": "LocationConnection",
    "kind": "LinkedField",
    "name": "locationsConnection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "LocationEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Location",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "city",
                "storageKey": null
              },
              (v7/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "locationsConnection(first:15)"
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "Profile",
    "kind": "LinkedField",
    "name": "profile",
    "plural": false,
    "selections": [
      (v7/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/),
      (v6/*: any*/),
      {
        "alias": "is_followed",
        "args": null,
        "kind": "ScalarField",
        "name": "isFollowed",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isFollowed",
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
                "value": 244
              },
              {
                "kind": "Literal",
                "name": "version",
                "value": [
                  "wide",
                  "large",
                  "featured",
                  "larger"
                ]
              },
              {
                "kind": "Literal",
                "name": "width",
                "value": 325
              }
            ],
            "concreteType": "CroppedImageUrl",
            "kind": "LinkedField",
            "name": "cropped",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "src",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "srcSet",
                "storageKey": null
              }
            ],
            "storageKey": "cropped(height:244,version:[\"wide\",\"large\",\"featured\",\"larger\"],width:325)"
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  (v7/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "partnersRoutes_InstitutionsRouteQuery",
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
            "name": "InstitutionsRoute_viewer"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "partnersRoutes_InstitutionsRouteQuery",
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
              {
                "kind": "Literal",
                "name": "categoryType",
                "value": "INSTITUTION"
              },
              {
                "kind": "Literal",
                "name": "internal",
                "value": false
              },
              {
                "kind": "Literal",
                "name": "size",
                "value": 50
              }
            ],
            "concreteType": "PartnerCategory",
            "kind": "LinkedField",
            "name": "partnerCategories",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              {
                "alias": "primary",
                "args": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "kind": "Literal",
                    "name": "eligibleForPrimaryBucket",
                    "value": true
                  },
                  (v4/*: any*/),
                  (v5/*: any*/)
                ],
                "concreteType": "Partner",
                "kind": "LinkedField",
                "name": "partners",
                "plural": true,
                "selections": (v8/*: any*/),
                "storageKey": "partners(defaultProfilePublic:true,eligibleForListing:true,eligibleForPrimaryBucket:true,sort:\"RANDOM_SCORE_DESC\",type:\"INSTITUTION\")"
              },
              {
                "alias": "secondary",
                "args": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "kind": "Literal",
                    "name": "eligibleForSecondaryBucket",
                    "value": true
                  },
                  (v4/*: any*/),
                  (v5/*: any*/)
                ],
                "concreteType": "Partner",
                "kind": "LinkedField",
                "name": "partners",
                "plural": true,
                "selections": (v8/*: any*/),
                "storageKey": "partners(defaultProfilePublic:true,eligibleForListing:true,eligibleForSecondaryBucket:true,sort:\"RANDOM_SCORE_DESC\",type:\"INSTITUTION\")"
              },
              (v7/*: any*/)
            ],
            "storageKey": "partnerCategories(categoryType:\"INSTITUTION\",internal:false,size:50)"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "partnersRoutes_InstitutionsRouteQuery",
    "operationKind": "query",
    "text": "query partnersRoutes_InstitutionsRouteQuery {\n  viewer {\n    ...InstitutionsRoute_viewer\n  }\n}\n\nfragment FollowProfileButton_profile on Profile {\n  id\n  slug\n  name\n  internalID\n  is_followed: isFollowed\n}\n\nfragment InstitutionsRoute_viewer on Viewer {\n  partnerCategories(categoryType: INSTITUTION, size: 50, internal: false) {\n    name\n    slug\n    ...PartnersRail_partnerCategory_q3ILp\n    id\n  }\n}\n\nfragment PartnerCell_partner on Partner {\n  internalID\n  slug\n  name\n  href\n  initials\n  locationsConnection(first: 15) {\n    edges {\n      node {\n        city\n        id\n      }\n    }\n  }\n  profile {\n    ...FollowProfileButton_profile\n    isFollowed\n    image {\n      cropped(width: 325, height: 244, version: [\"wide\", \"large\", \"featured\", \"larger\"]) {\n        src\n        srcSet\n      }\n    }\n    id\n  }\n}\n\nfragment PartnersRail_partnerCategory_q3ILp on PartnerCategory {\n  name\n  primary: partners(eligibleForListing: true, eligibleForPrimaryBucket: true, type: INSTITUTION, sort: RANDOM_SCORE_DESC, defaultProfilePublic: true) {\n    internalID\n    ...PartnerCell_partner\n    id\n  }\n  secondary: partners(eligibleForListing: true, eligibleForSecondaryBucket: true, type: INSTITUTION, sort: RANDOM_SCORE_DESC, defaultProfilePublic: true) {\n    internalID\n    ...PartnerCell_partner\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '3d638da9726e83cbc4faa0be3fe71145';
export default node;
/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _BidResult_sale_artwork$ref: unique symbol;
export type BidResult_sale_artwork$ref = typeof _BidResult_sale_artwork$ref;
export type BidResult_sale_artwork = {
    readonly minimum_next_bid: {
        readonly amount: string | null;
        readonly cents: number | null;
        readonly display: string | null;
    } | null;
    readonly sale: {
        readonly live_start_at: string | null;
        readonly end_at: string | null;
        readonly gravityID: string;
    } | null;
    readonly " $refType": BidResult_sale_artwork$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "BidResult_sale_artwork",
  "type": "SaleArtwork",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "minimum_next_bid",
      "storageKey": null,
      "args": null,
      "concreteType": "SaleArtworkMinimumNextBid",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "amount",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "cents",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "display",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "sale",
      "storageKey": null,
      "args": null,
      "concreteType": "Sale",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "live_start_at",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "end_at",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "gravityID",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node as any).hash = '7e7efbc1fdee3686cd3b2330b2dd2ae9';
export default node;

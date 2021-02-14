// TypeScript model

import {Embedded} from "./embedded";
import {GiftCertificate} from "./giftt-certificate";

export interface ListResult {
  content: any;
  _links: any;
  number: number;
  pageSize: number;
  totalPages:number;
  totalElements:number;
  first:boolean;
  last:boolean;

}

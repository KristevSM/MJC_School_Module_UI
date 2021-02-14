import {User} from "./user";
import {GiftCertificate} from "./giftt-certificate";

export class Order {
  id: number;
  userDTO: User;
  giftCertificateDTO: GiftCertificate | null;
  cost: number;
  orderDate: Date
}

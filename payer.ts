import { Address } from "../functional/address.model";
import { Contact } from "../functional/contact.model";
import { PersonalInfo } from "../functional/personalinfo.model";


export class Payer {
  payerName: string;
  payerType: string;
  payerCode: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zip: string;
  contact: string;
  fax: string;
  email: string;
  contactPerson: string;
  require: string;
  inactive: string;
  cmnt: string;
  lastName: string;
  firstName: string;
  contactNumber: string;
  personal: any;
  personalInfo: any;
  discipline: string;
  constructor() {
    this.personalInfo = new PersonalInfo();
    this.payerName = "";
    this.payerType = "";
    this.payerCode = "";
    this.addressLine1 = "";
    this.addressLine2 = "";
    this.city = "";
    this.state = "";
    this.zip = "";
    this.contact = "";
    this.fax = "";
    this.email = "";
    this.contactPerson = "";
    this.require = "";
    this.inactive = "";
    this.cmnt = "";

  }
}




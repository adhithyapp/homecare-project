import { PersonalInfo } from "../functional/personalinfo.model";
import { Contact } from "../functional/contact.model";
import { ReferralRequestModel } from "../apimodels/referral-request-model";
export class Referrals {

  firstName: string = "";
  lastName: string = "";
  middleName: string = "";
  addressLine1: string = "";
  addressLine2: string = "";
  city: string = "";
  state: string = "";
  zip: string = "";
  contactNumber: string = "";
  otherPhoneNumber: string = "";
  email: string = "";
  fax: string = "";
  office: string;
  contact: Contact;
  personalinfo: PersonalInfo;
  ref: ReferralRequestModel;

  constructor() {
    this.personalinfo = new PersonalInfo();
    this.ref = new ReferralRequestModel();
    this.contact = new Contact();
    this.firstName = "";
    this.lastName = "";
    this.middleName = "";
    this.addressLine1 = "";
    this.addressLine2 = "";
    this.city = "";
    this.state = "";
    this.zip = "";
    this.contactNumber = "";
    this.otherPhoneNumber = "";
    this.email = "";
    this.fax = "";
  }
}

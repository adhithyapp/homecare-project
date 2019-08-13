import { PersonalInfo } from "../functional/personalinfo.model";
import { Contact } from "../functional/contact.model";
import { Address } from "../functional/address.model";
import { PersonRequestModel } from "../apimodels/person-request-model";
import { AgencyOfficeRequestModel } from "../apimodels/agency-office-request-model";
import { CaregiverRequestModel } from "../apimodels/caregiver-request-model";

export class Physician {
  title: string;
  clinic: string;
  personalinfo: PersonalInfo;
  address: Address;
  contact: Contact
  firstName: String;
  lastName: String;
  middleName: String;
  addressLine1: String;
  addressLine2: String;
  city: String;
  state: String;
  cellPhoneNumber: String;
  zip: String;
  otherPhoneNumber: String;
  email: String;
  fax: String;
  Speciality: string;
  contactNumber: string;
  discipline: string;
    constructor(){
        this.title="";
        this.clinic="";
        this.contact = new Contact();
        this.personalinfo = new PersonalInfo();
    }

}
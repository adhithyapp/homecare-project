import { PersonalInfo } from "../functional/personalinfo.model"
import { Contact } from "../functional/contact.model";
import { Address } from "../functional/address.model";
export class Patientmodel {

    personal_info: PersonalInfo;
    medicalRecordNumber: string;
    socialSecurityNumber: string;
    medicalID: string;
    contactName: string;
    comments: string;
    contact: Contact;
    address: Address;

    constructor() {
        this.personal_info = new PersonalInfo();
        this.medicalRecordNumber = "";
        this.socialSecurityNumber = "";
        this.medicalID = "";
        this.contactName = "";
        this.comments = "";

    }

} 
import { PersonalInfo } from "../functional/personalinfo.model"
import { Contact } from "../functional/contact.model";
import { Address } from "../functional/address.model";
export class Caregivermodel {

    personalInfo: PersonalInfo;
    discipline: string;
    ssn: string;
    payroll: string;
    pager: string;
    emergencyContact: string;
    region: string;
    comments: string;
    contact: Contact;
    address: Address;
    constructor() {
        this.personalInfo = new PersonalInfo();
        this.discipline = "";
        this.ssn = "";
        this.payroll = "";
        this.pager = "";
        this.emergencyContact = "";
        this.region = "";
        this.comments = "";
        this.contact = new Contact();
        this.address = new Address();
    }
}


import { AgencyRoleRequestModel } from "./agency-role-request-model";
import { AddressRequestModel } from "./address-request-model";

export class PersonRequestModel {
    id: number;
    agencyRoleID: number;
    agencyRole: string;
    associatedOfficeCSV: string;
    firstName: string;
    imagePath: string;
    languagePreference: string;
    lastName: string;
    middle: string;
    pan: string;
    ssn: string;
    endDate: string;
    startDate: string;
    legalDocumentsVerified: number;
    contactAddressID: number;
    contactAddress: string;
    primaryAddressID: number;
    primaryAddress: string;
    address: AddressRequestModel;
    AgencyRoleRequestModel: AgencyRoleRequestModel;

    constructor() {
        this.AgencyRoleRequestModel = new AgencyRoleRequestModel();
        this.address = new AddressRequestModel();
        this.id;
        this.agencyRoleID;
        this.agencyRole = "";
        this.associatedOfficeCSV = "";
        this.firstName = "";
        this.imagePath = "";
        this.languagePreference = "";
        this.lastName = "";
        this.middle = "";
        this.pan = "";
        this.ssn = "";
        this.endDate = "";
        this.startDate = "";
        this.legalDocumentsVerified;
        this.contactAddressID;
        this.contactAddress;
        this.primaryAddressID;
        this.primaryAddress = "";
      
      //  this.contact = new Contact();
       
    }
}

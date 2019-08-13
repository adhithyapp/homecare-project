import { AddressRequestModel } from "./AddressRequestModel";
import { AgencyRoleRequestModel } from "./AgencyRoleRequestModel";

export class PersonRequestModel {

    id: number;
    agencyRoleID: number;
    agencyRole: AgencyRoleRequestModel;
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
    contactAddress: AddressRequestModel;
    primaryAddressID: number;
    primaryAddress: AddressRequestModel;

    constructor() {

        this.id = 0;
        this.agencyRoleID = 0;
        this.agencyRole = new AgencyRoleRequestModel();
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
        this.legalDocumentsVerified = 0;
        this.contactAddressID = 0;
        this.contactAddress = new AddressRequestModel();
        this.primaryAddressID = 0;
        this.primaryAddress = new AddressRequestModel();


    }
}
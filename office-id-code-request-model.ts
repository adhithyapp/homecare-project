import { AgencyOfficeRequestModel } from "./agency-office-request-model";
export class OfficeIdCodeRequestModel {
    agencyMedicaidID: string;
    agencyMedicareID: string;
    branchID: string;
    employerTaxID: string;
    nationalProviderID: string;
    qualityData: string;
    stateAssignedAgencyID: string;
    office: string;
    officeName:string;
    officeId: number;
    id: number;
    AgencyOfficeRequestModel: AgencyOfficeRequestModel;
    // AgencyOfficeRequestModel: any;
    constructor() {
        this.AgencyOfficeRequestModel = new AgencyOfficeRequestModel();
        this.agencyMedicaidID = "";
        this.agencyMedicareID = "";
        this.branchID = "";
        this.employerTaxID = "";
        this.nationalProviderID = "";
        this.qualityData = "";
        this.stateAssignedAgencyID = "";
        this.office = "";
        this.officeId;
        this.id;
        this.officeName="";
    }
}

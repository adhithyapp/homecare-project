import { AddressRequestModel } from "./address-request-model";

export class AgencyRoleRequestModel {
    id: number;
    isDirectCareWorker: number;
    isEmployee: number;
    isLiason: number;
    isPatient: number;
    isPhysician: number;
    isThirdParty: number;
    title: string;
    //AddressRequestModel: AddressRequestModel;

    constructor() {
        this.id;
        this.isDirectCareWorker;
        this.isEmployee;
        this.isLiason;
        this.isPatient;
        this.isPhysician;
        this.isThirdParty;
        this.title="";
      
    }
}

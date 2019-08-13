export class AgencyRoleRequestModel {

    id: number;
    isDirectCareWorker: number;
    isEmployee: number;
    isLiason: number;
    isPatient: number;
    isPhysician: number;
    isThirdParty: number;
    title: string;

    constructor() {

        this.id = 0;
        this.isDirectCareWorker = 0;
        this.isEmployee = 0;
        this.isLiason = 0;
        this.isPatient = 0;
        this.isPhysician = 0;
        this.isThirdParty = 0;
        this.title = "";


    }

}

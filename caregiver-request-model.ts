import { PersonRequestModel } from "./person-request-model";
import { AgencyRoleRequestModel } from "./agency-role-request-model";
import { AddressRequestModel } from "./address-request-model";

export class CaregiverRequestModel {
    id: number;
    descipline: string;
    personID: number;
    hireDate: string;
    terminationDate: string;
    person: string;
    PersonRequestModel: PersonRequestModel;
    caregiverLogin:string;
    caregiverlogout:string;
    constructor() {
        this.id;
        this.descipline = "";
        this.personID;
        this.hireDate = "";
        this.terminationDate = "";
        this.person = "";
        this.PersonRequestModel = new PersonRequestModel();
        this.caregiverLogin="";
        this.caregiverlogout="";

    }
}

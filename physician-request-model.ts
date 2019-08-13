import { PersonRequestModel } from "./person-request-model";
import { AgencyRoleRequestModel } from "./agency-role-request-model";
import { AddressRequestModel } from "./address-request-model";
export class PhysicianRequestModel {
    id: number;
    personID: number;
    speciality: string;
    title: string;
    clinic: string;
    person: string;
    PersonRequestModel: PersonRequestModel;
    //AgencyRoleRequestModel: any;
    //AddressRequestModel: any;
    constructor() {
        this.id;
        this.personID;
        this.speciality = "";
        this.title = "";
        this.clinic = "";
        this.person = "";
        this.PersonRequestModel = new PersonRequestModel();
        //this.AgencyRoleRequestModel=new AgencyRoleRequestModel();
        //this.AddressRequestModel=new AddressRequestModel();
    }
}


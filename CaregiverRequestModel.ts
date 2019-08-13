import { PersonRequestModel } from "./PersonRequestModel";

export class CaregiverRequestModel {

    id: number;
    descipline: string;
    personID: number;
    hireDate: string;
    terminationDate: string;
    person: PersonRequestModel;

    constructor() {
        this.id ;
        this.descipline = "";
        this.personID ;
        this.hireDate = "";
        this.terminationDate = "";
        this.person = new PersonRequestModel();


    }
}
import { PersonRequestModel } from "./person-request-model";
export class TaskRequestModel {
    id: number;
    category: string = "";
    description: string = "";
    PersonRequestModel: PersonRequestModel;
    cost: number;
    receivable: number;
    timeRequired: number;
    type: number;
    person:string="";

    constructor() {
        this.category = "";
        this.description = "";
        this.id;
        this.cost;
        this.person="";
        this.receivable;
        this.timeRequired;
        this.type;
        this.PersonRequestModel = new PersonRequestModel();
    }
}

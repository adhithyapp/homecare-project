import { PersonRequestModel } from "./PersonRequestModel";
import { PayerRequestModel } from "./PayerRequestModel";

export class ClientRequestModel {
    id: number;
    payerID: number;
    payer: PayerRequestModel;
    personID: number;
    person: PersonRequestModel;

    constructor() {

        this.id = 0;
        this.payerID = 0;
        this.payer = new PayerRequestModel();
        this.personID = 0;
        this.person = new PersonRequestModel();


    }

}
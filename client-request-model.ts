import { PayerRequestModel } from "./payer-request-model";
import { AddressRequestModel } from "./address-request-model";
import { PersonRequestModel } from "./person-request-model";

export class ClientRequestModel {
    id: number;
    payerID: number;
    payer: string;
    personID: number;
    person: string;
    PayerRequestModel: PayerRequestModel;
    PersonRequestModel: PersonRequestModel;
    AddressRequestModel:AddressRequestModel;
    constructor() {
        this.id;
        this.payerID;
        this.payer = "";
        this.PayerRequestModel = new PayerRequestModel();
        this.AddressRequestModel=new AddressRequestModel();
        this.PersonRequestModel = new PersonRequestModel();
        this.personID;
        this.person = "";
    }
}

import { AddressRequestModel } from "./address-request-model";

export class PayerRequestModel {
    id: number;
    comments: string;
    payerName: string;
    payerType: string;
    require485POCPlus: number;
    addressID: number;
    address: string;
    AddressRequestModel: AddressRequestModel;
    constructor() {
        this.id;
        this.comments = "";
        this.payerName = "";
        this.payerType = "";
        this.require485POCPlus;
        this.addressID;
        this.address = "";
        this.AddressRequestModel = new AddressRequestModel();
    }
}

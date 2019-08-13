import { AddressRequestModel } from "./AddressRequestModel";

export class PayerRequestModel {

    id: number;
    comments: string;
    payerName: string;
    payerType: string;
    require485POCPlus: number;
    addressID: number;
    address: AddressRequestModel;

    constructor() {
        this.id = 0;
        this.comments = "";
        this.payerName = "";
        this.payerType = "";
        this.require485POCPlus = 0;
        this.addressID = 0;
        this.address=new AddressRequestModel();

    }
}
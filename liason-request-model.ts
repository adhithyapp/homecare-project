import { PersonRequestModel } from "./person-request-model";


export class LiasonRequestModel {

id :number;
personID:number;
person:string;
paymentType:string;
paymentMethod: string;
socialSecurityNumber: string;
PersonRequestModel: PersonRequestModel;
   

constructor()
{
    this.PersonRequestModel = new PersonRequestModel();
    this.id;
    this.personID;
    this.person="";
    this.paymentType="";
    this.paymentMethod= "";
    this.socialSecurityNumber = "";
}

}

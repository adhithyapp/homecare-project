export class ReferralRequestModel {
    id: number;
    firstName: string = "";
    lastName: string = "";
    contactNumber: string = "";
    office: string = "";
    middleName:string="";
    addressLine1:string="";
    addressLine2:string="";
    city:string="";
    state:string="";
    zip:string="";
    email:string="";
    fax:string="";
    billingCode:string;
    otherContactNumber:string;
    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.contactNumber = "";
        this.office = "";
        this.id;
        this.middleName="";
        this.addressLine1="";
        this.addressLine2="";
        this.city="";
        this.state="";
        this.zip="";
        this.email="";
        this.fax="";
        this.otherContactNumber="";
        this.billingCode="";
    }
}

export class CaregiverDto {
    personId: string;
    caregiverId: string;
    firstName: string;
    lastName: string;
    middleName:string;
    dob:string;
    addressLine1: string;
    addressLine2: string;
    sex:String;
    state: string;
    zip: string;
    city: string;
    ethnicity: string;
    discipline:string;
    title:string;
    hireDate:string;
    terminationDate:string;
    email:string;
    fax:string;
    cellPhone:string;
    otherPhone:string;
    ssn: string;
    payroll: string;
    pager: string;
    emergencyContact: string;
    region: string;
    comments: string;


    constructor() {
        this.personId = "";
        this.caregiverId = "";
        this.firstName = "";
        this.lastName = "";
        this.middleName = "";
        this.dob = "";
        this.sex = "";
        this.addressLine1 = "";
        this.addressLine2 = "";
        this.state = "";
        this.zip = "";
        this.city = "";
        this.ethnicity = "";
        this.ssn = "";
        this.payroll = "";
        this.pager = "";
        this.emergencyContact = "";
        this.region = "";
        this.comments = "";
        this.title="";
        this.hireDate="";
        this.terminationDate="";
        this.email="";
        this.fax="";
        this.cellPhone="";
        this.otherPhone="";
        this.discipline="";
    }
}
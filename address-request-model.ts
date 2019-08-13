export class AddressRequestModel {
    addressLine1: string;
    addressLine2: string;
    city: string;
    comments: string;
    contactPerson: string;
    email: string;
    fax: string;
    phone1: string;
    phone2: string;
    state: string;
    timeZone: string;
    zip: string;
    active: boolean;
    addressLatitude: number;
    addressLongitude: number;

    constructor() {
        this.addressLine1 = "";
        this.addressLine2 = "";
        this.city = "";
        this.comments = "";
        this.contactPerson = "";
        this.email = "";
        this.fax = "";
        this.phone1 = "";
        this.phone2 = "";
        this.state = "";
        this.timeZone = "";
        this.zip = "";
        this.active;
        this.addressLatitude;
        this.addressLongitude;
    }
}

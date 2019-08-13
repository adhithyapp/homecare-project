export class ClientDto {

  clientId: string;
  personId: string;
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2: string;
  state: string;
  zip: string;
  city: string;
  payerName: string;
  longitude: string;
  latitude: string;
  email: string;
  cellPhone: string;
  otherPhone: string;
  contactName: string;
  contactNumber: string;
  constructor() {
    this.personId = "";
    this.clientId = "";
    this.firstName = "";
    this.lastName = "";
    this.addressLine1 = "";
    this.addressLine2 = "";
    this.state = "";
    this.zip = "";
    this.city = "";
    this.payerName = "";
    this.longitude = "";
    this.latitude = "";
    this.email = "";
    this.cellPhone = "";
    this.otherPhone = "";
    this.contactName = "";
    this.contactNumber = "";
  }
}
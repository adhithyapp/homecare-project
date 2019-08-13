import { PayerRequestModel } from "./PayerRequestModel";

export class BillingCodeRequestModel {


    id:number;
    description: string;
    discipline: string;
    payerID: number;
    payer: PayerRequestModel;
    revenueCode: string;
    firstHourCharge: number;
    firstHourCost: number;
    firstHourRecievable: number;
    unitCost: number;
    unitInMinutes: number;
    unitRecievable: number;
    enableRounding: boolean;
    isBillable: boolean;
    includeInactivePayer:string;
    through:string;
    from:string;
    modifier:string;
    cpt:string;
    billingcode:string;
    markInactive:boolean;
    visit1:boolean;
    time:boolean;
    minutes1:boolean;
    minutes2:boolean;
    minutes3:boolean;
    noRounding:boolean;
    minutes15:boolean;
    minutes30:boolean;
    hour1:boolean;
    justLikeMedicare:boolean;
   
    constructor() {

        this.id;
        this.description = "";
        this.discipline = "";
        this.payerID;
        this.payer=new PayerRequestModel();
        this.revenueCode = "";
        this.firstHourCharge;
        this.firstHourCost;
        this.firstHourRecievable;
        this.unitCost;
        this.unitInMinutes;
        this.unitRecievable;
        this.enableRounding = false;
        this.isBillable = false;
        this.includeInactivePayer="";
        this.through="";
        this.from="";
        this.modifier="";
        this.cpt="";
        this.billingcode="";
        this.markInactive;
        this.visit1;
        this.time;
        this.minutes1;
        this.minutes2;
        this.minutes3;
        this.noRounding;
        this.minutes15;
        this.minutes30;
        this.hour1;
        this.justLikeMedicare;
    }
}
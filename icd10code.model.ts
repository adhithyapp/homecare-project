import { ICDCodeRequestModel } from "../apimodels/icdcode-request-model";


export class Icd10Code {

    code: string;
    display: string;
    //ICDModel: ICDCodeRequestModel;
   
    constructor() {
        //this.ICDModel= new ICDCodeRequestModel();
        this.code = "";
        this.display = "";
    }

}
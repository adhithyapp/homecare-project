export class ScheduleMasterDTO {
    sequenceID: string;
    caregiverID: string;
    caregiverPersonId: string;
    clientID: string;
    clientPersonId: string;
    payerId: string;
    billingCode: string;
    pocID: string;
    startTime: string;
    endTime: string;
    startDate: string;
    endDate: string;
    weekdayCSV: string;
    assignedTasksCSV: string;
    reccurence:string;
    constructor() {
        this.sequenceID = '';
        this.caregiverID = '';
        this.caregiverPersonId = '';
        this.clientID = '';
        this.clientPersonId = '';
        this.payerId = '';
        this.billingCode = '';
        this.pocID = '';
        this.startTime = '';
        this.endTime = '';
        this.startDate = '';
        this.endDate = '';
        this.weekdayCSV = '';
        this.assignedTasksCSV = '';
        this.reccurence='';
    }
}
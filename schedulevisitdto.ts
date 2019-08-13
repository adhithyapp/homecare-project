import { CalendarEvent } from "angular-calendar";
import { ScheduleDto } from "./scheduledto";

export class ScheduleVisitDto implements CalendarEvent {
    sequenceID: string;
    caregiverID: string;
    clientID: string;
    payerID:string;
    caregiverFirstName: string;
    caregiverLastName: string;
    clientFirstName: string;
    clientLastName: string;
    payerName:string;
    billingcode: string;
    billingCodeDescription: string;
    startDateTime: Date;
    endDateTime: Date;
    status:string;
    exceptions:string[];
    category:string;
    public get start(): Date {
        return new Date(this.startDateTime)
    }
    public set start(value: Date) {

    }
    public get end(): Date {
        return new Date(this.endDateTime)
    }
    public set end(value: Date) {

    }
    title: string;
    actions: any;
    allDay: boolean;
    draggable: boolean;
    constructor() {
        this.sequenceID = "";
        this.caregiverID = "";
        this.clientID = "";
        this.caregiverFirstName = "";
        this.caregiverLastName = "";
        this.clientFirstName = "";
        this.clientLastName = "";
        this.billingcode = "";
        this.billingCodeDescription = "";
        this.title = "";
        this.actions = []
        this.allDay = false
        this.draggable = false;
    }

    
}


const colors: any = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};

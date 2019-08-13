import { ClientDto } from "./ClientDTO";
import { CaregiverDto } from "./CaregiverDTO";
import { ScheduleVisitDto } from "./schedulevisitdto";

export class ScheduleDto{
 
        clients	: Array<ClientDto>;
        caregivers	:Array<CaregiverDto>;
        scheduleEvents : Array<ScheduleVisitDto>;
        constructor(){
            this.caregivers=[];
            this.clients=[];
            this.scheduleEvents=[];
        }
     
}
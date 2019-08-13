export class SignUpRequest {

    userId: number;
    name: string;
    email: string;
    password: string;
    mobile: number;

    constructor() {

        this.userId = 0;
        this.name = "";
        this.email = "";
        this.password = "";
        this.mobile = 0;
    }
}
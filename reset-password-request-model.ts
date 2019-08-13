export class ResetPasswordRequestModel {
    userId: number;
    otp: number;
    password: string;
    confirmPassword: string;
    constructor() {
        this.userId;
        this.otp;
        this.password = "";
        this.confirmPassword = "";
    }
}

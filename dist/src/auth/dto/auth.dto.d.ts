export declare class AuthDto {
    email: string;
    password: string;
}
export declare class RegisterDto extends AuthDto {
    name: string;
    surname: string;
    middleName: string;
}

import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma.service";
import { AuthDto, RegisterDto } from "./dto/auth.dto";
import { UserService } from "src/user/user.service";
export declare class AuthService {
    private prisma;
    private jwt;
    private userService;
    constructor(prisma: PrismaService, jwt: JwtService, userService: UserService);
    login(dto: AuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    getNewTokens(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    register(dto: RegisterDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    private issueTokens;
    private returnUserFields;
    private validateUser;
}

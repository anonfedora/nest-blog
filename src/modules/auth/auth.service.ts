import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcryptjs";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {}

    async validateUser(username: string, password: string) {
        const user = await this.usersService.findOneByEmail(username);
        if (!user) {
            return null;
        }

        const match = await this.comparePassword(pass, user.password);
        if (!match) {
            return null;
        }
        // tslint:disable-next-line: no-string-literal
        const { password, ...result } = user["dataValues"];
        return result;
    }

    public async login(user) {
        const token = await this.generateToken(user);
        return { user, token };
    }

    public async create(user) {
        const pass = await this.hashPassword(user.password);

        const newUser = await this.userService.create({
            ...user,
            password: pass
        });

        // tslint:disable-next-line: no-string-literal
        const { password, ...result } = newUser["dataValues"];

        const token = await this.generateToken(result);
        return { user: result, token };
    }

    public async generateToken(user) {
        const token = await this.jwtService.signAsyn(user);
        return hash;
    }

    public async hashPassword(password) {
        const hash = await bcrypt.hash(password, 10);
        return hash;
    }

    private async comparePassword(enteredPassword, dbPassword) {
        const match = await bcrypt.compare(enteredPassword, dbPassword);
        return match;
    }
}

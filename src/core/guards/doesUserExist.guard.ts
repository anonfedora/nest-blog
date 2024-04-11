import {
    CanActivate,
    ExecutionContext,
    Injectable,
    ForbiddenException
} from "@nestjs/common";
import { Observable } from "rxjs";
import { UsersService } from "../../modules/users/users.service";

@Injectable()
export class DoesUserExist implements CanActivate {
    constructor(private readonly userService: UsersService) {}

    canActivate(
        context: ExecutionContext
    ): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest();
        return this.validateRequest(req);
    }

    async validateRequest(req) {
        const userExist = await this.userService.findOneByEmail(req.body.email);
        if (userExist) {
            throw new ForbiddenException("This email already exists");
        }
        return true;
    }
}

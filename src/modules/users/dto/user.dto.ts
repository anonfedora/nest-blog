import { IsNotEmpty, IsEnum, MinLength, IsEmail } from "class-validator";
enum Gender {
    MALE = "male",
    FEMALE = "female"
}
export class UserDTO {
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @MinLength(8)
    readonly password: string;

    @IsNotEmpty()
    @IsEnum(Gender, { message: "Gender must either be male or female" })
    readonly gender: Gender;
}

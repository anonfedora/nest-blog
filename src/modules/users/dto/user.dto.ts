import { ApiProperty } from "@nestjs/swagger";
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
    @ApiProperty({ example: "dev.mes.anonfedora@gmail.com" })
    readonly email: string;

    @IsNotEmpty()
    @MinLength(8)
    @ApiProperty({ example: "password"})
    readonly password: string;

    @IsNotEmpty()
    @IsEnum(Gender, { message: "Gender must either be male or female" })
    readonly gender: Gender;
}

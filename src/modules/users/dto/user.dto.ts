import { ApiProperty } from "@nestjs/swagger";
import {
    IsNotEmpty,
    IsString,
    IsEnum,
    MinLength,
    IsEmail
} from "class-validator";

enum Gender {
    MALE = "male",
    FEMALE = "female"
}
export class UserDTO {
    @ApiProperty({ type: String, example: "John Doe" })
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @ApiProperty({ type: String, example: "john@mail.com" })
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @ApiProperty({ type: String, example: "password" })
    @IsNotEmpty()
    @MinLength(8)
    readonly password: string;

    @ApiProperty({ example: "male" })
    @IsNotEmpty()
    @IsEnum(Gender, { message: "Gender must either be male or female" })
    readonly gender: Gender;
}

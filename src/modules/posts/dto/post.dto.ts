import { IsNotEmpty, MinLength } from "class-validator";

export class PostDTO {
    @IsNotEmpty()
    @MinLength(4)
    private title: string;

    @IsNotEmpty()
    private body: string;
}
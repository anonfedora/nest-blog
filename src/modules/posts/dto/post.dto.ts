import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MinLength } from "class-validator";

export class PostDto {
    @ApiProperty({ type: String, example: "New Post" })
    @IsNotEmpty()
    @MinLength(4)
    private title: string;

    @ApiProperty({
        type: String,
        example: "This is the content/body of the blog post."
    })
    @IsNotEmpty()
    private body: string;
}

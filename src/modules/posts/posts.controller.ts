import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    NotFoundException,
    UseGuards,
    Request
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { PostsService } from "./posts.service";
import { Post as PostEntity } from "./post.entity";
import { PostDto } from "./dto/post.dto";

@Controller("posts")
export class PostsController {
    constructor(private readonly PostsService: PostsService) {}
    
    
}

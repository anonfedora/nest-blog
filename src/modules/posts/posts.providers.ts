import { Post } from "./post.entity";
import { POST_REPOSITORY } from "../../core/constants";

export const POST_REPOSITORY = [
    {
        provide: POST_REPOSITORY,
        useValue: Post
    }
];

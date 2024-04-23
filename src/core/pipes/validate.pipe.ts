import {
    Injectable,
    ArgumentMetadata,
    BadRequestException,
    ValidationPipe,
    UnprocessableEntityException
} from "@nestjs/common";

@Injectable()
export class ValidateInputPipe extends ValidationPipe {
    public async transform(value, metadata: ArgumentMetadata) {
        try {
            return await super.transform(value, metadata);
        } catch (error) {
            if (error instanceof BadRequestException) {
                throw new UnprocessableEntityException(
                    this.handleError(error.message)
                );
            }
        }
    }

    private handleError(errors) {
        return errors.map(error => error.constraints);
    }
}

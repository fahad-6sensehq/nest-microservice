import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
    sendEmail() {
        return { response: 'Send email' };
    }
}

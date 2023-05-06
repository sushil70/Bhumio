import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    uploadedFile(file: any): Promise<{
        originalname: any;
        filename: any;
    }>;
}

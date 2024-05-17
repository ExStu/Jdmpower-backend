/// <reference types="multer" />
import { FileResponse } from "./file.dto";
export declare class FilesService {
    saveFiles(files: Express.Multer.File[], folder: string, itemId: string): Promise<FileResponse[]>;
}

import { Injectable } from "@nestjs/common";
import { path } from "app-root-path";
import { ensureDir, writeFile } from "fs-extra";
import { FileResponse } from "./file.dto";

@Injectable()
export class FilesService {
	async saveFiles(
		files: Express.Multer.File[],
		folder: string,
		itemId: string
	): Promise<FileResponse[]> {
		const uploadFolder = `${path}/uploads/${folder}/${itemId}`;
		await ensureDir(uploadFolder);
		const [res] = await Promise.all([
			Promise.all(
				files.map(async file => {
					await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer);
					return {
						url: `http://localhost:4200/uploads/${folder}/${file.originalname}`,
						name: file.originalname
					};
				})
			)
		]);

		return res;
	}
}

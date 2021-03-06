import { Controller, Get, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload (@UploadedFile('file') file) {
    // console.log(file)
    return {
      url: `http://localhost:${process.env.ADMIN_PORT}/uploads/${file.filename}`
    }
  }
}

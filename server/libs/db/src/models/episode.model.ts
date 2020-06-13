import { prop, ModelOptions, Ref } from '@typegoose/typegoose'
import { ApiProperty  } from '@nestjs/swagger'
import { Course } from './course.model'

@ModelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Episode {
  @ApiProperty({description: '课时名称'})
  @prop()
  name: string


  @ApiProperty({description: '视频文件'})
  @prop()
  file: string

  @prop({ref: 'Course'})
  course: Ref<Course>
}
import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class NewsDto {
  @ApiProperty({
    type: String
  })
  @IsString()
  image: string

  @ApiProperty({
    type: String
  })
  @IsString()
  title: string

  @ApiProperty({
    type: String
  })
  @IsString()
  description: string

}

export class NewsResponseDto {

  @ApiProperty({
    type: Number
  })
  id: number

  @ApiProperty({
    type: Date
  })
  createdAt: Date

  @ApiProperty({
    type: String
  })
  image: string

  @ApiProperty({
    type: String
  })
  title: string

  @ApiProperty({
    type: String
  })
  description: string

  @ApiProperty({
    type: String
  })
  slug: string
}

export class NewsMutationResponseDto {
  @ApiProperty({
    type: Number
  })
  id: number

  @ApiProperty({
    type: Date
  })
  updatedAt: Date

  @ApiProperty({
    type: String
  })
  image: string

  @ApiProperty({
    type: String
  })
  title: string

  @ApiProperty({
    type: String
  })
  description: string

  @ApiProperty({
    type: String
  })
  slug: string
}
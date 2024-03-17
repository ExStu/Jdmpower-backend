import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CurrencyDto {
  @ApiProperty({
    type: String
  })
  @IsString()
  name: string

  @ApiProperty({
    type: Number
  })
  @IsNumber()
  value: number
}

export class CurrencyResponseDto {
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
  name: string

  @ApiProperty({
    type: Number
  })
  value: number
}
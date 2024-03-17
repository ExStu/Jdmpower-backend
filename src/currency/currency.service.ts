import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { CurrencyDto } from "./currency.dto";
import { returnCurrencyObject } from "./return-currency.object";

@Injectable()
export class CurrencyService {
  constructor (private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.currency.findMany({
      select: returnCurrencyObject
    })
  }

  async create(dto: CurrencyDto) {
    return this.prisma.currency.create({
      data: {
        name: dto.name,
        value: dto.value
      }
    })
  }

  async update(id: number, dto: CurrencyDto) {
    return this.prisma.currency.update({
      where: {
        id
      },
      data: {
        updatedAt: new Date(),
        name: dto.name,
        value: dto.value
      },
    })
  }

  async delete(id: number) {

    return this.prisma.currency.delete({
      where: {
        id
      },
      select: returnCurrencyObject
    })
  }


}

import { Prisma } from "@prisma/client";

export const returnCurrencyObject: Prisma.CurrencySelect = {
  id: true,
  updatedAt: true,
  name: true,
  value: true
}
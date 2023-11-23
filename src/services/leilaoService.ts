// src/services/leilaoService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class LeilaoService {
  async getAllLeiloes() {
    return prisma.leilao.findMany();
  }

  async getLeilaoById(id: string) {
    return prisma.leilao.findUnique({
      where: { id },
    });
  }

  async createLeilao(data: any) {
    return prisma.leilao.create({
      data,
    });
  }
}

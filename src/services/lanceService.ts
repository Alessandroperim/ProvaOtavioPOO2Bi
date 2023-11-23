// src/services/lanceService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class LanceService {
  async getAllLances() {
    return prisma.lance.findMany();
  }

  async getLanceById(id: string) {
    return prisma.lance.findUnique({
      where: { id },
    });
  }

  async createLance(data: any) {
    return prisma.lance.create({
      data,
    });
  }
}

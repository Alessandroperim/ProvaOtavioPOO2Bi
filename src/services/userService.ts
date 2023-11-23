// src/services/userService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class UserService {
  async getAllUsers() {
    return prisma.user.findMany();
  }

  async getUserById(id: string) {
    return prisma.user.findUnique({
      where: { id },
    });
  }

  async createUser(data: any) {
    return prisma.user.create({
      data,
    });
  }
}

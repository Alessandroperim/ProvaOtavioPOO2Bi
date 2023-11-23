// src/models/leilao.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma.leilao;

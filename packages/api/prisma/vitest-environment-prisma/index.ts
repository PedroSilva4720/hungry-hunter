import 'dotenv/config';

import { exec } from 'node:child_process';
import { Environment } from 'vitest';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default <Environment>{
  name: 'prisma',
  async setup() {
    if (!process.env.DATABASE_URL) {
      throw new Error('Please provide a DATABASE_URL environment variable.');
    }
    const url = new URL(process.env.DATABASE_URL);
    url.searchParams.set('schema', 'test');

    const databaseURL = url.toString();

    process.env.DATABASE_URL = databaseURL;

    exec('yarn prisma migrate deploy');

    return {
      teardown() {
        prisma.$executeRawUnsafe('DROP SCHEMA IF EXISTS "test" CASCADE');
        prisma.$disconnect();
      },
    };
  },
};

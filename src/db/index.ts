import { createKysely } from '@vercel/postgres-kysely';
import { Database } from '../types/db';
export const db = createKysely<Database>();
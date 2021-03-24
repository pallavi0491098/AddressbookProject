import { dbConfig } from './config';
import * as pg from 'pg';

export const createPoolConfig = (dbConfigLocalFormat: any): pg.PoolConfig => ({
  user: 'user2',
  host: 'localhost',
  database: 'addressbook',
  password: 'password123',
  port: 5432,
  ssl: false,
  connectionTimeoutMillis: 5000,
  max: 10,
  idleTimeoutMillis: 0
});

const pool = new pg.Pool(createPoolConfig(dbConfig));

pool.on('connect', async client => {
  await client.query(`SET search_path TO addressbook`);
});

export default pool;

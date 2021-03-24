import pool from './postgresClient';
import * as pg from 'pg';

export const query = async (poolClient: pg.Pool, queryString: string, values?: any[]) => {
  let result: pg.QueryResult;
  const client = await poolClient.connect();
  try {
    result = await client.query(queryString, values);
  } finally {
    client.release();
  }
  return result;
};

export const executeQuery = async (queryString: string, values?: any[]) => {
  return await query(pool, queryString, values);
};
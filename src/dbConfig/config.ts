export const dbConfig = {
    db_username: process.env.db_username,
    db_name: process.env.db_name,
    db_host: process.env.db_host,
    db_password: process.env.db_password,
    db_ssl: process.env.db_ssl === 'true',
    db_port: parseInt(process.env.db_port, 16),
    db_pool_connection_timeout: parseInt(process.env.db_pool_connection_timeout, 16),
    pool: {
      max: parseInt(process.env.db_max_pool_size, 16),
      idleTimeoutMillis: parseInt(process.env.db_idle_timeout_millis, 16)
    }
  };
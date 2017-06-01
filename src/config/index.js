import Dotenv from 'dotenv';
import path from 'path';

Dotenv.config();

const NODE_ENV = process.env.NODE_ENV || 'development';

const isProd = NODE_ENV === 'production';
const isStage = NODE_ENV === 'stage';
const isDev = NODE_ENV === 'development';

const config = {
  NODE_ENV,
  ROOT_PATH: path.resolve(process.env.ROOT_PATH),
  env: {
    isProd,
    isStage,
    isDev
  },
  db: {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    alias: process.env.DB_ALIAS,
    name: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
  },
  aws: {
    s3: {
      region: process.env.AWS_S3_REGION,
      accessKey: process.env.AWS_ACCESS_KEY,
      secretKey: process.env.AWS_SECRET_KEY,
      bucket: process.env.AWS_S3_BUCKET
    }
  }
};

export default config;

import { ISystemConfig } from '@/types/config';

const systemConfig: ISystemConfig = {
  port: 8001,
  dbUrl: 'mongodb://127.0.0.1:27017/simple-login-db'
};

export { systemConfig };

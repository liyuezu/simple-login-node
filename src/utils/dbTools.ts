// 第三方模块
import mongoose from 'mongoose';
// 自定义模块
import { systemConfig } from '../config';

/* 初始化数据库连接 */
function connectMongo() {
  /**
   * 将 mongoose 的 Promise 属性指向 node 原生的 Promise 对象，以避免来自 MongoDB 驱动程序的弃用警告
   */
  mongoose.Promise = global.Promise;
  try {
    mongoose.connect(systemConfig.dbUrl, {
      useCreateIndex: true, // 创建索引的方式，以避免来自 MongoDB 驱动程序的弃用警告
      useNewUrlParser: true // 使用新的 url parser，以避免来自 MongoDB 驱动程序的弃用警告
    });
  } catch (error) {
    console.log(`连接数据库失败, ${error.message}`);
  }

  mongoose.connection
    .once('open', function() {
      console.log('数据库连接成功！');
    })
    .on('error', function(err) {
      throw err;
    });
}

export default { connectMongo };

import { join } from 'path';
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1611038425326_4049';
  // add your config here
  config.middleware = [];

  config.axios = {
    baseURL: 'https://www.yuque.com/api/v2',
    timeout: 1000,
    headers: {
      'X-Auth-Token': '8yx2GugoI9kLsKAQ9pDR1f2S371Vwh4D8EHzx1OW',
      'User-Agent': 'midway-yuque-blog',
    },
  };

  config.static = {
    prefix: '/',
    dir: join(appInfo.appDir, './build'),
  };

  return config;
};

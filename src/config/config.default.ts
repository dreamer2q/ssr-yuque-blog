import { join } from 'path';
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1611038425326_4049';
  // add your config here
  config.middleware = ['errorHandler', 'notfoundHandler'];

  //https://www.yuque.com/api/books/2030975/docs?include_catalog_node_uuid=true&include_contributors=true&include_hits=true&limit=20&offset=0
  config.axios = {
    // baseURL: 'https://www.yuque.com/api/v2',
    baseURL: 'https://www.yuque.com/api',
    timeout: 10000,
    headers: {
      // 'X-Auth-Token': 'Hs7u2y2fiG8rNYS8K1CPdW36PokYElfPmNEjxSN1',
      // 'User-Agent': 'midway-yuque-blog',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
      Cookie:
        'lang=zh-cn; _yuque_session=TIkLqidn86fi06AORFkqXsCiPwmQPJ_6OA5pyyCPZDhGKHiFHzLsdamR9Rwy-U9F0uhRUxXTFDxyk0hga4ZMoA==; yuque_ctoken=INBGOBTC3_mWxhKFV4JgGV6q;  acw_tc=0bda72db16287754119276249e23fc25c898dd7431f8ee3221dc7d27bf7f7e; tree=a385%0123991288-0a14-481c-ae9a-55140d8d0af4%0112',
    },
  };

  config.http2 = {
    baseURL: 'https://www.yuque.com/api/v2',
    timeout: 10000,
    headers: {
      'X-Auth-Token': 'Hs7u2y2fiG8rNYS8K1CPdW36PokYElfPmNEjxSN1',
      'User-Agent': 'midway-yuque-blog',
    },
  };

  config.static = {
    prefix: '/',
    dir: join(appInfo.appDir, './build'),
  };

  return config;
};

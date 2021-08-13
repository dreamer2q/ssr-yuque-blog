import { UserConfig } from 'ssr-types';

const SSRMetaKey = 'ssr_meta_key';

// TODO 考虑研究一下 midway decorator 这方面的内容
function SSRConfig(config: UserConfig) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    // return Reflect.metadata(SSRMetaKey, config);
    console.log(config, target, propertyKey, descriptor);
  };
}

export { SSRMetaKey, SSRConfig };

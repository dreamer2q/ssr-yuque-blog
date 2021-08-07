import { Configuration } from '@midwayjs/decorator';
import * as axios from '@midwayjs/axios';
import { join } from 'path';

@Configuration({
  imports: [
    axios, // 导入 axios 组件
  ],
  importConfigs: [join(__dirname, 'config')],
})
export class ContainerLifeCycle {}

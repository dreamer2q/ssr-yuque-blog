import { Configuration } from '@midwayjs/decorator';
import * as axios from '@midwayjs/axios';
import { join } from 'path';
import {
  ILifeCycle,
  IMidwayApplication,
  IMidwayContainer,
} from '@midwayjs/core';

import AxiosInstance from 'axios';

@Configuration({
  imports: [
    axios, // 导入 axios 组件
  ],
  importConfigs: [join(__dirname, 'config')],
})
export class ContainerLifeCycle implements ILifeCycle {
  async onReady(
    container: IMidwayContainer,
    app: IMidwayApplication
  ): Promise<void> {
    const config = app.getConfig('http2');
    const http2 = AxiosInstance.create(config);
    container.registerObject('http2', http2);
  }
}

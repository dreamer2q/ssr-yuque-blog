import { Configuration } from '@midwayjs/decorator';
import * as axios from '@midwayjs/axios';
import { join } from 'path';
import { ILifeCycle, IMidwayContainer } from '@midwayjs/core';

@Configuration({
  imports: [
    axios, // 导入 axios 组件
  ],
  importConfigs: [join(__dirname, 'config')],
})
export class ContainerLifeCycle implements ILifeCycle {
  async onReady(container: IMidwayContainer): Promise<void> {}
}

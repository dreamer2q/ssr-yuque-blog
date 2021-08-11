import { HttpService } from '@midwayjs/axios';
import { Inject, Controller, Provide, Get } from '@midwayjs/decorator';
import { Context } from 'egg';
import { IApiService, IApiDetailService } from '../interface';

@Provide()
@Controller('/api')
export class Api {
  @Inject()
  ctx: Context;

  @Inject('ApiService')
  service: IApiService;

  @Inject('ApiDetailService')
  detailService: IApiDetailService;

  @Inject()
  http: HttpService;

  @Get('/list')
  async getListData() {
    const data = await this.http.get('/repos/dreamer2q/blog/docs');
    return data.data;
  }

  @Get('/index')
  async getIndexData() {
    const data = await this.service.index();
    return data;
  }

  @Get('/detail/:id')
  async getDetailData() {
    const { ctx, detailService } = this;
    const id = ctx.params.id;
    const data = await detailService.index(id);
    return data;
  }
}

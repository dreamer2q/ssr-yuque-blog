import { Controller, Get, Provide, Inject } from '@midwayjs/decorator';
import { Context } from 'egg';
import { IApiService, IApiDetailService } from '../interface';
import { HttpService } from '@midwayjs/axios';

interface IEggContext extends Context {
  apiService: IApiService;
  apiDeatilservice: IApiDetailService;
}

@Provide()
@Controller('/', { middleware: ['ssrHandler'] })
export class Index {
  @Inject()
  ctx: IEggContext;

  @Inject()
  http: HttpService;

  // @Get('/')
  // async handler(): Promise<void> {
  //   // try {
  //   //   const stream = await render<Readable>(this.ctx, {
  //   //     stream: true,
  //   //   });
  //   //   this.ctx.body = stream;
  //   // } catch (error) {
  //   //   console.log(error);
  //   //   this.ctx.body = error;
  //   // }
  // }

  @Get('/')
  async getListData() {
    const data = await this.http.get('/repos/dreamer2q/blog/docs');
    return data.data;
  }
}

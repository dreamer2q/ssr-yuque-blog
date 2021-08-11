import { Provide } from '@midwayjs/decorator';
import {
  IMidwayWebNext,
  IWebMiddleware,
  MidwayWebMiddleware,
} from '@midwayjs/web';
import { Context } from 'egg';

@Provide()
export class NotfoundHandler implements IWebMiddleware {
  resolve(): MidwayWebMiddleware {
    return async (ctx: Context, next: IMidwayWebNext) => {
      await next();
      if (ctx.status === 404 && !ctx.body) {
        // ctx.status = 404;
        // ctx.redirect('/404');
        ctx.body = {
          status: '404',
          title: '请求不存在',
          source: {
            pointer: ctx.url,
          },
        };
      }
    };
  }
}

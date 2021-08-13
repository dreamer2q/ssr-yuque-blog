import { UserConfig } from 'ssr-types';
import { Provide } from '@midwayjs/decorator';
import {
  IMidwayWebNext,
  IWebMiddleware,
  MidwayWebMiddleware,
} from '@midwayjs/web';
import { Context } from 'egg';
import { render } from 'ssr-core-vue3';
import { Readable } from 'stream';

@Provide('ssrHandler')
export class RendererHandler implements IWebMiddleware {
  resolve(): MidwayWebMiddleware {
    return async (ctx: Context, next: IMidwayWebNext) => {
      const rendering = async () => {
        let config: UserConfig = { stream: true };
        if (ctx.body.config) {
          config = Object.assign(config, ctx.body.config);
        }
        const stream = await render<Readable>(ctx, config);
        ctx.body = stream;
      };
      //midway
      try {
        await next();
        ctx.fetchData = ctx.body;
      } catch (error) {
        ctx.errorData = error;
        console.log(`midway error: ${error}`);
      }
      //ssr
      try {
        await rendering();
      } catch (error) {
        console.log(`ssr rendering error: ${error}`);
        ctx.body = error;
      }
    };
  }
}

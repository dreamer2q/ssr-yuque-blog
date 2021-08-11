import { Inject, Controller, Provide, Get, Param } from '@midwayjs/decorator';
import { Context } from 'egg';
import { RepositoryService } from 'src/service/repository';

@Provide()
@Controller('/api')
export class Api {
  @Inject()
  ctx: Context;

  @Inject()
  repository: RepositoryService;

  @Get('/docs')
  async getDocs() {
    return await this.repository.getDocs();
  }

  @Get('/docs/:slug')
  async getDocDetail(@Param() slug: string) {
    return await this.repository.getDocDetail(slug);
  }
}

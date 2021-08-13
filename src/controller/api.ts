import {
  Inject,
  Controller,
  Provide,
  Get,
  Param,
  Query,
} from '@midwayjs/decorator';
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
  async getDocs(@Query() limit = 20, @Query() offset = 0) {
    return await this.repository.getDocs({ limit, offset });
  }

  @Get('/docs/:slug')
  async getDocDetail(@Param() slug: string) {
    return await this.repository.getDocDetail(slug);
  }

  @Get('/tags')
  async getTags() {
    return await this.repository.getTags();
  }

  @Get('/tags/:tag')
  async getTagDocs(@Param() tag: string) {
    return await this.repository.getTagDocs(tag);
  }
}

import {
  Controller,
  Get,
  Provide,
  Inject,
  Param,
  Query,
} from '@midwayjs/decorator';
import { Context } from 'egg';
import { RepositoryService } from 'src/service/repository';

@Provide()
@Controller('/', { middleware: ['ssrHandler'] })
export class Index {
  @Inject()
  ctx: Context;

  @Inject()
  repository: RepositoryService;

  @Get('/404')
  // @SSRConfig({
  //   mode: 'csr',
  // })
  async common() {
    return {};
  }

  @Get('/')
  async index(@Query() limit = 20, @Query() offset = 0) {
    return await this.repository.getDocs({ limit, offset });
  }

  @Get('/articles/:slug')
  async viewArticle(@Param() slug: string) {
    return await this.repository.getDocDetail(slug);
  }

  @Get('/tags')
  async indexTags() {
    return await this.repository.getTags();
  }

  @Get('/tags/:tag')
  async indexTagDocs(@Param() tag: string) {
    return await this.repository.getTagDocs(tag);
  }

  @Get('/archives')
  async indexChives() {
    return await this.repository.getDocs({ limit: 9999 });
  }
}

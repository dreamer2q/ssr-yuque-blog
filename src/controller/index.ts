import {
  Controller,
  Get,
  Provide,
  Inject,
  Param,
  Query,
} from '@midwayjs/decorator';
import { Context } from 'egg';
import { IApiService, IApiDetailService } from '../interface';
import { HttpService } from '@midwayjs/axios';
import { RepositoryService } from 'src/service/repository';

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

  @Inject()
  repository: RepositoryService;

  @Get('/')
  async index(@Query() limit = 20, @Query() offset = 0) {
    return await this.repository.getDocs({ limit, offset });
  }

  @Get('/articles/:slug')
  async viewArticle(@Param() slug: string) {
    return await this.repository.getDocDetail(slug);
  }
}

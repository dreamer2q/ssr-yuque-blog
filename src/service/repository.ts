import { HttpService } from '@midwayjs/axios';
import { Inject, Provide } from '@midwayjs/decorator';
import { Context } from '@midwayjs/web';

@Provide()
export class RepositoryService {
  @Inject()
  ctx: Context;

  @Inject()
  http: HttpService;

  async getDocs() {
    const data = await this.http.get('/repos/dreamer2q/blog/docs');
    return data.data;
  }

  async getDocDetail(slug: string) {
    const data = await this.http.get(`/repos/dreamer2q/blog/docs/${slug}`);
    return data.data;
  }
}

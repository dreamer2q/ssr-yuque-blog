import { DocSeri, TagSeri } from './../../web/interface/types';
import { HttpService } from '@midwayjs/axios';
import { Inject, Provide } from '@midwayjs/decorator';
import { Context } from '@midwayjs/web';
import { AxiosInstance } from 'axios';

@Provide()
export class RepositoryService {
  @Inject()
  ctx: Context;

  @Inject()
  http: HttpService;

  @Inject('http2')
  http2: AxiosInstance;

  async getDocs({
    offset = 0,
    limit = 20,
  }: {
    offset?: number;
    limit?: number;
  }) {
    // const data = await this.http.get('/repos/dreamer2q/blog/docs');
    const data = await this.http.get('/books/2030975/docs', {
      params: {
        // include_catalog_node_uuid: true,
        // include_contributors: true,
        include_hits: true,
        offset: offset,
        limit: limit,
      },
    });
    return data.data;
  }

  async getDocDetail(slug: string) {
    const v2 = this.http2.get(`/repos/dreamer2q/blog/docs/${slug}`);
    const v1 = this.http.get(`/docs/${slug}`, {
      params: {
        book_id: 2030975,
        // include_contributors: true,
        include_hits: true,
        include_like: true,
        include_pager: true,
        include_suggests: true,
      },
    });
    const [doc2, doc] = await Promise.all([v2, v1]);
    const data = { ...doc2.data };
    Object.assign(data.data, doc.data.data);
    return data;
  }

  async getDocTags(docId: number) {
    const doc = await this.http.get('/tags', { params: { docId } });
    return doc.data;
  }

  async getTags() {
    const tags = {};
    const { data } = await this.getDocs({ limit: 9999 });
    const fetchTags = (data as DocSeri[]).map(doc => {
      return this.getDocTags(doc.id);
    });
    const allTags = await Promise.all(fetchTags);
    allTags.forEach(({ data }) => {
      if (data.length > 0) {
        data.forEach((tag: TagSeri) => {
          if (tags[tag.title]) {
            tags[tag.title] += 1;
          } else {
            tags[tag.title] = 1;
          }
        });
      }
    });
    return {
      data: tags,
    };
  }

  async getTagDocs(tags: string) {
    const { data } = await this.http.get('/tags/docs', {
      params: { tags, userId: 2596791 },
    });
    return data;
  }
}

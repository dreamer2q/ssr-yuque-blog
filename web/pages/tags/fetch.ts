import { TagsPage } from './../../interface/pages';
import { ISSRContext } from 'ssr-types';
import { Params } from '@/interface';

export default async (
  { store, router }: Params,
  ctx: ISSRContext<TagsPage>
) => {
  return ctx.fetchData;
};

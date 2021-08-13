import { RouteLocationNormalizedLoaded } from 'vue-router';
import { Store } from 'vuex';
import { DocSeri } from './types';

export interface Params {
  store: Store<any>;
  router: RouteLocationNormalizedLoaded;
}

export interface IndexPage {
  fetchData: DocSeri[];
}

export interface TagsPage {
  fetchData: Record<string, any>;
}

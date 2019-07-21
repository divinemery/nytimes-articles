import { queryNews } from '../services/news';

export default {
  namespace: 'news',
  state: {
    data: [],
    total: 0,
    loading: true,
  },
  reducers: {
    delete(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
    initList(state, { payload }) {
      return Object.assign(
        {},
        { ...state },
        {
          data: payload.results,
          total: payload.num_results,
          loading: false        
        },
      );
    },
  },
  subscriptions: {
    setup({ dispatch }, done) {
      setTimeout(() => {
        dispatch({
          type: 'fetchNews',
        });
      }, 2000);
    },
  },
  effects: {
    *fetchNews(_, { call, put }) {
      const response = yield call(queryNews);
      yield put({
        type: 'initList',
        payload: response.data,
      });
    },
  },
};

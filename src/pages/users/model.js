//只有一个model的话，可以不用建models目录。但名字必须为model。js
import {
  getList
} from './service';
export default {
  namespace: 'users',
  state: {
    list: [],
    total: null,
  },
  reducers: {
    // save(state, { payload: { data: list, total } }) {
    //   return { ...state, list, total };
    // },
  },
  effects: {
    *_getList({payload, callback}, { call }) {
      const response = yield call(getList, { payload });
      console.log(response)
      if (response.code === 200) {
        if (callback && typeof callback === 'function') {
          callback(response); // 返回结果
        }
      }
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
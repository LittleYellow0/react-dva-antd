import request from '../utils/request';

export default {
  namespace: 'userInfo',
  state: { des: "啊啊啊啊啊啊啊啊啊啊啊啊啊" },
  reducers: {
    showTips(state, { payload: _des }) {
      return { des: _des };
    },
    save(state, action) {
      return { des: action.payload.data[0].name };
    },
  },
  effects: {
    *getDes(action, { call, put }) {
      const data = yield request('http://127.0.0.1:8071/api/user?token=abcd1234');
      yield put({
        type: 'save',
        payload: data.data
      });
    },
    *getMockData(action, { call, put }) {
      const data = yield request('api/users');
      yield put({
        type: 'save',
        payload: data.data
      });
    },
  },
  subscriptions: {
    setup({ history, dispatch }) {
      // 监听 history 变化，当进入 `/` 时触发 `load` action
      return history.listen(({ pathname }) => {
        if (pathname === "/user") {
          dispatch({ type: "showTips", payload: "发个给过过过过过过过过过过", });
        }
      });
    },
  },
};
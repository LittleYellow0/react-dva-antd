
export default {

  namespace: 'app',

  state: {},

  reducers: {
    showText(state, { payload: _text }) {
      console.log(_text)
      return {};
    },
  },

  subscriptions: {
    setup({ history, dispatch }) {
      // 监听 history 变化，当进入 `/` 时触发 `load` action
      return history.listen(({ pathname }) => {
        console.log(pathname);
        if (pathname === "/products") {
          dispatch({ type: "showText", payload: "反反复复发", });
        }
      });
    },
  },

};

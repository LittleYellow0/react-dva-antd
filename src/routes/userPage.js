import React from 'react';
import { connect } from 'dva';


const UserDes = ({ dispatch, userInfo }) => {
  function changeText() {
    dispatch({
      type: 'userInfo/showTips',
      payload: "fshoifhoisdhio",
    });
  }
  return (
    <div>
      <h2 onClick={changeText}>user-page</h2>
      <h3 onClick={() => { dispatch({type: 'userInfo/getDes'}); }}>user-title</h3>
      <h3 onClick={() => { dispatch({type: 'userInfo/getMockData'}); }}>user-mock</h3>
      <p>{userInfo.des}</p>
    </div>
  );
};

export default connect(({ userInfo }) => ({
  userInfo,
}))(UserDes);
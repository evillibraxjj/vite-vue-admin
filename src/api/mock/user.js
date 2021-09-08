export let user = {
  id: 1,
  account: 'admin',
  password: 'e10adc3949ba59abbe56e057f20f883e',
  name: '许佳俊',
  sex: 1,
  roles: ['admin'],
};

export default {
  'post|/login': ({ body }) => {
    const { account, password } = JSON.parse(body);
    const success = user.account === account && user.password === password;
    return {
      code: success ? 200 : 500,
      success,
      message: success ? '' : '账号或者密码错误',
      data: new Date().getTime(),
    };
  },
  'get|/info': () => {
    return {
      code: 200,
      success: true,
      message: '',
      data: user,
    };
  },
  'get|/list*': ({ body }) => {
    const { pageNo, pageSize } = JSON.parse(body);
    const list = [user];
    return {
      code: 200,
      success: true,
      message: '',
      data: {
        pageNo,
        pageSize,
        total: 100,
        list,
      },
    };
  },
};

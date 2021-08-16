const user = { id: 0, account: "admin", name: "管理员", sex: 1 };
export default {
  "post|/login": ({ body }) => {
    const { account, password, token } = JSON.parse(body);
    const success = !!token || (account == "admin" && password == "123456");
    const code = success ? 200 : 500,
      message = !success && "登录失败";
    return {
      code,
      success,
      message,
      data: new Date().getTime(),
    };
  },
  "get|/info": () => {
    return {
      code: 200,
      success: true,
      message: "",
      data: user,
    };
  },
};

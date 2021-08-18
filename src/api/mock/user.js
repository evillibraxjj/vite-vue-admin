const user = { id: 1, account: 'admin', name: '许佳俊', sex: 1, roles: ['admin'] };
export default {
	'post|/login': ({ body }) => {
		const { account, password, token } = JSON.parse(body);
		const success = !!token || (account == 'admin' && password == '123456');
		const code = success ? 200 : 500,
			message = !success && '登录失败';
		return {
			code,
			success,
			message,
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

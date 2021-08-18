const router = [
	{
		path: '/user',
		name: 'user',
		meta: {
			title: '用户',
			icon: 'UsergroupAddOutlined',
		},
		children: [
			{
				path: 'list',
				name: 'userList',
				meta: {
					title: '用户列表',
					icon: 'OrderedListOutlined',
					actions: ['export', 'update'],
				},
				component: 'userList',
			},
		],
	},
];

export default {
	'get|/menu': () => {
		return {
			code: 200,
			success: true,
			message: '',
			data: router,
		};
	},
};

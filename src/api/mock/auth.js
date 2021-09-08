export let router = [
  {
    path: '/service',
    name: 'service',
    meta: {
      title: '服务管理',
      icon: 'UsergroupAddOutlined',
      show: false,
    },
    component: 'userList',
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      title: '用户管理',
      icon: 'UsergroupAddOutlined',
    },
    redirect: { name: 'userList' },
    children: [
      {
        path: 'account',
        name: 'account',
        meta: {
          title: '账号管理',
          icon: 'OrderedListOutlined',
        },
        children: [
          {
            path: 'list',
            name: 'userList',
            meta: {
              title: '用户列表',
              icon: 'OrderedListOutlined',
              actions: ['export', 'update'],
              keepAlive: true,
            },
            component: 'userList',
          },
        ],
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

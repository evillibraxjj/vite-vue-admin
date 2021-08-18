import request from '@/utils/request';

export const userLogin = (data) => request.post('/user/login', data);
export const getUserInfo = () => request.get('/user/info');
export const getUserList = (data) => request.get('/user/list', data);

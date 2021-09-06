import request from '@/utils/request';

export const getAuthMenu = () => request.get('/auth/menu');
